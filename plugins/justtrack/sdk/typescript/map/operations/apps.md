<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apps — operations

Accessor: `client.apps` · Source: `src/resources/apps.ts` · 2 operations · Request and error types: namespace `Apps`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `justtrack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postManagementV1App

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postManagementV1App(request?: Apps.PostManagementV1AppRequest, options?: RequestOptions): ApiPromise<AppOutput, Apps.PostManagementV1AppError>`
- **Wire**: `POST /management/v1/app`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AppOutput`
- **Error**: `JusttrackError` with `kind: "api"`, an instance of `Apps.PostManagementV1AppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apps.PostManagementV1AppRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateAppRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAppRequest` | `createAppRequestSchema` | `src/models/create-app-request.ts` |
| `AppOutput` | `appOutputSchema` | `src/models/app-output.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postManagementV1Apps

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postManagementV1Apps(request?: Apps.PostManagementV1AppsRequest, options?: RequestOptions): ApiPromise<ListAppsResponse, Apps.PostManagementV1AppsError>`
- **Wire**: `POST /management/v1/apps`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListAppsResponse`
- **Error**: `JusttrackError` with `kind: "api"`, an instance of `Apps.PostManagementV1AppsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apps.PostManagementV1AppsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListAppsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAppsRequest` | `listAppsRequestSchema` | `src/models/list-apps-request.ts` |
| `ListAppsResponse` | `listAppsResponseSchema` | `src/models/list-apps-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

