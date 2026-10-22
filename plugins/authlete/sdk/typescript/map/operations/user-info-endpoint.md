<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserInfoEndpoint — operations

Accessor: `client.userInfoEndpoint` · Source: `src/resources/user-info-endpoint.ts` · 2 operations · Request and error types: namespace `UserInfoEndpoint`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authUserinfoApi

- **Signature**: `authUserinfoApi(request: UserInfoEndpoint.AuthUserinfoApiRequest, options?: RequestOptions): ApiPromise<UserinfoResponse, UserInfoEndpoint.AuthUserinfoApiError>`
- **Wire**: `POST /api/{serviceId}/auth/userinfo`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserinfoResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `UserInfoEndpoint.AuthUserinfoApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserInfoEndpoint.AuthUserinfoApiRequest` (12):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `token` | `form` | `string` | yes |
| `clientCertificate` | `form` | `string` | no |
| `dpop` | `form` | `string` | no |
| `htm` | `form` | `string` | no |
| `htu` | `form` | `string` | no |
| `uri` | `form` | `string` | no |
| `message` | `form` | `string` | no |
| `headers` | `form` | `Pair[]` | no |
| `targetUri` | `form` | `string` | no |
| `dpopNonceRequired` | `form` | `boolean` | no |
| `requestBodyContained` | `form` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pair` | `pairSchema` | `src/models/pair.ts` |
| `UserinfoResponse` | `userinfoResponseSchema` | `src/models/userinfo-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### authUserinfoIssueApi

- **Signature**: `authUserinfoIssueApi(request: UserInfoEndpoint.AuthUserinfoIssueApiRequest, options?: RequestOptions): ApiPromise<UserinfoIssueResponse, UserInfoEndpoint.AuthUserinfoIssueApiError>`
- **Wire**: `POST /api/{serviceId}/auth/userinfo/issue`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserinfoIssueResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `UserInfoEndpoint.AuthUserinfoIssueApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserInfoEndpoint.AuthUserinfoIssueApiRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `token` | `form` | `string` | yes |
| `claims` | `form` | `string` | no |
| `sub` | `form` | `string` | no |
| `claimsForTx` | `form` | `string` | no |
| `requestSignature` | `form` | `string` | no |
| `headers` | `form` | `Pair[]` | no |
| `verifiedClaimsForTx` | `form` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pair` | `pairSchema` | `src/models/pair.ts` |
| `UserinfoIssueResponse` | `userinfoIssueResponseSchema` | `src/models/userinfo-issue-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

