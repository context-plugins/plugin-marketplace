<!-- Generated file — do not edit; regenerated with the SDK. -->

# Cost — operations

Accessor: `client.cost` · Source: `src/resources/cost.ts` · 1 operation · Request and error types: namespace `Cost`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCost

- **Signature**: `getCost(request: Cost.GetCostRequest, options?: RequestOptions): ApiPromise<CostResponse, Cost.GetCostError>`
- **Wire**: `GET /v1/team/cost`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CostResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `Cost.GetCostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"error403"` [403] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cost.GetCostRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `startTime` | `query` | `start_time` | `Date` (date-time) | yes | — |
| `endTime` | `query` | `end_time` | `Date` (date-time) | yes | — |
| `bucketWidth` | `query` | `bucket_width` | `BucketWidth` | no | — |
| `limit` | `query` | — | `number` | no | `7` |
| `page` | `query` | — | `Page` | no | — |
| `groupBy` | `query` | `group_by` | `GroupBy` | no | — |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `BucketWidth` | `bucketWidthSchema` | `src/models/unions/bucket-width.ts` |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `GroupBy` | `groupBySchema` | `src/models/unions/group-by.ts` |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `CostResponse` | `costResponseSchema` | `src/models/cost-response.ts` |

