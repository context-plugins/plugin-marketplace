<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apps — operations

Accessor: `client.apps` · Source: `src/resources/apps.ts` · 1 operation · Request and error types: namespace `Apps`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bitly`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOAuthApp

- **Signature**: `getOAuthApp(request: Apps.GetOAuthAppRequest, options?: RequestOptions): ApiPromise<OAuthApp, Apps.GetOAuthAppError>`
- **Wire**: `GET /apps/{client_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OAuthApp`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `Apps.GetOAuthAppError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Apps.GetOAuthAppRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `clientId` | `path` | `client_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthApp` | `oAuthAppSchema` | `src/models/oauth-app.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

