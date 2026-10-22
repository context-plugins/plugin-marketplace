<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsageApi — operations

Accessor: `client.usageApi` · Source: `src/resources/usage-api.ts` · 1 operation · Request and error types: namespace `UsageApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUsage

- **Signature**: `getUsage(request: UsageApi.GetUsageRequest, options?: RequestOptions): ApiPromise<UsageResponse, UsageApi.GetUsageError>`
- **Wire**: `GET /v1/team/usage`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `UsageApi.GetUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"error403"` [403] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsageApi.GetUsageRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `startTime` | `query` | `start_time` | `Date` (date-time) | yes |
| `endTime` | `query` | `end_time` | `Date` (date-time) | yes |
| `bucketWidth` | `query` | `bucket_width` | `BucketWidth1` | no |
| `limit` | `query` | — | `Limit2` | no |
| `page` | `query` | — | `Page` | no |
| `groupBy` | `query` | `group_by` | `GroupBy1` | no |
| `models` | `query` | — | `Models` | no |
| `userIds` | `query` | `user_ids` | `UserIds` | no |
| `productTypes` | `query` | `product_types` | `ProductTypes` | no |
| `gpuTypes` | `query` | `gpu_types` | `GpuTypes` | no |
| `capacityTypes` | `query` | `capacity_types` | `CapacityTypes` | no |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BucketWidth1` | `bucketWidth1Schema` | `src/models/unions/bucket-width1.ts` |
| `Limit2` | `limit2Schema` | `src/models/unions/limit2.ts` |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `GroupBy1` | `groupBy1Schema` | `src/models/unions/group-by1.ts` |
| `Models` | `modelsSchema` | `src/models/unions/models.ts` |
| `UserIds` | `userIdsSchema` | `src/models/unions/user-ids.ts` |
| `ProductTypes` | `productTypesSchema` | `src/models/unions/product-types.ts` |
| `GpuTypes` | `gpuTypesSchema` | `src/models/unions/gpu-types.ts` |
| `CapacityTypes` | `capacityTypesSchema` | `src/models/unions/capacity-types.ts` |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `UsageResponse` | `usageResponseSchema` | `src/models/usage-response.ts` |

