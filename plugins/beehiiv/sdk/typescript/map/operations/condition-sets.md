<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConditionSets — operations

Accessor: `client.conditionSets` · Source: `src/resources/condition-sets.ts` · 2 operations · Request and error types: namespace `ConditionSets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### index9

- **Signature**: `index9(request: ConditionSets.Index9Request, options?: RequestOptions): ApiPromise<ConditionSetsListResponse, ConditionSets.Index9Error>`
- **Wire**: `GET /publications/{publicationId}/condition_sets`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConditionSetsListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `ConditionSets.Index9Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConditionSets.Index9Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `page` | `query` | — | `number` | no |
| `purpose` | `query` | — | `ConditionSetPurpose` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConditionSetPurpose` | `conditionSetPurposeSchema` | `src/models/condition-set-purpose.ts` |
| `ConditionSetsListResponse` | `conditionSetsListResponseSchema` | `src/models/condition-sets-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show6

- **Signature**: `show6(request: ConditionSets.Show6Request, options?: RequestOptions): ApiPromise<ConditionSetShowResponse, ConditionSets.Show6Error>`
- **Wire**: `GET /publications/{publicationId}/condition_sets/{conditionSetId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConditionSetShowResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `ConditionSets.Show6Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConditionSets.Show6Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `conditionSetId` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `ConditionSetShowExpandItems[]` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConditionSetShowExpandItems` | `conditionSetShowExpandItemsSchema` | `src/models/condition-set-show-expand-items.ts` |
| `ConditionSetShowResponse` | `conditionSetShowResponseSchema` | `src/models/condition-set-show-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

