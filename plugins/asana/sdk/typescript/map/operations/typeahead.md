<!-- Generated file — do not edit; regenerated with the SDK. -->

# Typeahead — operations

Accessor: `client.typeahead` · Source: `src/resources/typeahead.ts` · 1 operation · Request and error types: namespace `Typeahead`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### typeaheadForWorkspace

- **Signature**: `typeaheadForWorkspace(request: Typeahead.TypeaheadForWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesTypeaheadResponse, Typeahead.TypeaheadForWorkspaceError>`
- **Wire**: `GET /workspaces/{workspace_gid}/typeahead`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesTypeaheadResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Typeahead.TypeaheadForWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Typeahead.TypeaheadForWorkspaceRequest` (7):

| Field | Channel | Wire | Type | Req | Default | Style |
| --- | --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — | — |
| `resourceType` | `query` | `resource_type` | `ResourceType` | no | `ResourceType.User` | — |
| `type` | `query` | — | `TypeAsanaTypeaheadApi` | no | `TypeAsanaTypeaheadApi.User` | — |
| `query` | `query` | — | `string` | no | — | — |
| `count` | `query` | — | `number` | no | — | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | — | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `TypeAsanaTypeaheadApi` | `typeAsanaTypeaheadApiSchema` | `src/models/type-asana-typeahead-api.ts` |
| `WorkspacesTypeaheadResponse` | `workspacesTypeaheadResponseSchema` | `src/models/workspaces-typeahead-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

