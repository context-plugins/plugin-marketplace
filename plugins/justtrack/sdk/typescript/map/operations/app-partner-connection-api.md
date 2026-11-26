<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppPartnerConnectionApi — operations

Accessor: `client.appPartnerConnectionApi` · Source: `src/resources/app-partner-connection-api.ts` · 2 operations · Request and error types: namespace `AppPartnerConnectionApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `justtrack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getManagementV1AppByAppIdConnectionByPartnerId

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getManagementV1AppByAppIdConnectionByPartnerId(request: AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdRequest, options?: RequestOptions): ApiPromise<AppPartnerConnection, AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdError>`
- **Wire**: `GET /management/v1/app/{appId}/connection/{partnerId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppPartnerConnection`
- **Error**: `JusttrackError` with `kind: "api"`, an instance of `AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"error404"` [404] no body · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `appId` | `path` | `number` | yes |
| `partnerId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppPartnerConnection` | `appPartnerConnectionSchema` | `src/models/app-partner-connection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### putManagementV1AppByAppIdConnectionByPartnerId

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putManagementV1AppByAppIdConnectionByPartnerId(request: AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdRequest, options?: RequestOptions): ApiPromise<AppPartnerConnection, AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdError>`
- **Wire**: `PUT /management/v1/app/{appId}/connection/{partnerId}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AppPartnerConnection`
- **Error**: `JusttrackError` with `kind: "api"`, an instance of `AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `appId` | `path` | `number` | yes |
| `partnerId` | `path` | `number` | yes |
| `body` | `body` | `AppPartnerConnection` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppPartnerConnection` | `appPartnerConnectionSchema` | `src/models/app-partner-connection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

