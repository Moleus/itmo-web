import {HitResult} from '../models/HitResult'
import {emptyApi} from "./BaseApiService";
import {HitQuery} from "../models/HitQuery";

export const hitAPI = emptyApi.enhanceEndpoints({addTagTypes: ['Hits']}).injectEndpoints({
    endpoints: (build) => ({
        fetchAllHits: build.query<HitResult[], void>({
            query: () => ({
                url: `/hits`,
            }),
            providesTags: ['Hits']
        }),
        createHit: build.mutation<void, HitQuery>({
            query: (post) => ({
                url: `/hits/add`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Hits'],
        }),
        deleteAllHits: build.mutation<void, void>({
            query: () => ({
                url: `/hits`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Hits'],
        }),
    })
})