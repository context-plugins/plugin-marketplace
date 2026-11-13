<!-- Generated file — do not edit; regenerated with the SDK. -->

# Filters — operations

Accessor: `client.filters` · Source: `src/resources/filters.ts` · 1 operation · Request and error types: namespace `Filters`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteFilterApiV1FiltersFilterIdDelete

- **Signature**: `deleteFilterApiV1FiltersFilterIdDelete(request: Filters.DeleteFilterApiV1FiltersFilterIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Filters.DeleteFilterApiV1FiltersFilterIdDeleteError>`
- **Wire**: `DELETE /api/v1/filters/{filter_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Filters.DeleteFilterApiV1FiltersFilterIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Filters.DeleteFilterApiV1FiltersFilterIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filterId` | `path` | `filter_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

