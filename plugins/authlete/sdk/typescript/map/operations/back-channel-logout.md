<!-- Generated file — do not edit; regenerated with the SDK. -->

# BackChannelLogout — operations

Accessor: `client.backChannelLogout` · Source: `src/resources/back-channel-logout.ts` · 1 operation · Request and error types: namespace `BackChannelLogout`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### backchannelLogoutTokenApi

- **Signature**: `backchannelLogoutTokenApi(request: BackChannelLogout.BackchannelLogoutTokenApiRequest, options?: RequestOptions): ApiPromise<BackchannelLogoutTokenResponse, BackChannelLogout.BackchannelLogoutTokenApiError>`
- **Wire**: `POST /api/{serviceId}/backchannel/logout/token`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BackchannelLogoutTokenResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `BackChannelLogout.BackchannelLogoutTokenApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BackChannelLogout.BackchannelLogoutTokenApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `BackchannelLogoutTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BackchannelLogoutTokenRequest` | `backchannelLogoutTokenRequestSchema` | `src/models/backchannel-logout-token-request.ts` |
| `BackchannelLogoutTokenResponse` | `backchannelLogoutTokenResponseSchema` | `src/models/backchannel-logout-token-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

