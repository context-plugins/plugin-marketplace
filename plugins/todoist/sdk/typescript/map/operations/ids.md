<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ids — operations

Accessor: `client.ids` · Source: `src/resources/ids.ts` · 1 operation · Request and error types: namespace `Ids`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### idMappingsApiV1IdMappingsObjNameObjIdsGet

- **Signature**: `idMappingsApiV1IdMappingsObjNameObjIdsGet(request: Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetRequest, options?: RequestOptions): ApiPromise<IdMapping[], Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetError>`
- **Wire**: `GET /api/v1/id_mappings/{obj_name}/{obj_ids}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IdMapping[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objName` | `path` | `obj_name` | `ObjName` | yes |
| `objIds` | `path` | `obj_ids` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObjName` | `objNameSchema` | `src/models/obj-name.ts` |
| `IdMapping` | `idMappingSchema` | `src/models/id-mapping.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

