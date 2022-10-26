package com.moleus.web.service.stratagies;

import com.moleus.web.service.auth.AuthManager;
import com.moleus.web.service.auth.ProcessStatus;
import com.moleus.web.service.helpers.ActionResult;
import com.moleus.web.util.ActionUtil;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import lombok.extern.log4j.Log4j2;

@Log4j2
@ApplicationScoped
public class LoginAction implements Action {
    @Inject
    private AuthManager authManager;

    @Override
    public ActionResult execute() {
        log.info("Processing login");

        authManager.init();

        if (!authManager.satisfiesConstraints()) {
            return ActionUtil.statusToJson(ProcessStatus.UNSATISFIED_CONSTRAINTS);
        }
        return ActionUtil.statusToJson(authManager.authenticate());
    }
}
