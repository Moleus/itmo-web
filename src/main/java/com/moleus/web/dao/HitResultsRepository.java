package com.moleus.web.dao;

import com.moleus.web.model.HitResult;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import lombok.extern.log4j.Log4j2;

import java.util.List;

@Log4j2
@ApplicationScoped
public class HitResultsRepository extends AbstractRepository<HitResult> {
    public HitResultsRepository() {
        super(HitResult.class);
    }

    public List<HitResult> findByUser(long userId) {
        var userIdCriteria = super.criteriaSelectEqual(userId, "userId");
        return super.entityManager.createQuery(userIdCriteria).getResultList();
    }

    @Transactional
    public void removeByUserId(long userId) {
        var userIdCriteria = super.criteriaDeleteEqual(userId, "userId");
        super.entityManager.createQuery(userIdCriteria).executeUpdate();
    }
}