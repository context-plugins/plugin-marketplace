<!-- Generated file — do not edit; regenerated with the SDK. -->

# RevocationEndpoint — operations

Accessor: `client.revocationEndpoint` · Source: `src/resources/revocation-endpoint.ts` · 1 operation · Request and error types: namespace `RevocationEndpoint`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authRevocationApi

- **Signature**: `authRevocationApi(request: RevocationEndpoint.AuthRevocationApiRequest, options?: RequestOptions): ApiPromise<RevocationResponse, RevocationEndpoint.AuthRevocationApiError>`
- **Wire**: `POST /api/{serviceId}/auth/revocation`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RevocationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `RevocationEndpoint.AuthRevocationApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RevocationEndpoint.AuthRevocationApiRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `parameters` | `form` | `string` | yes |
| `clientId` | `form` | `string` | no |
| `clientSecret` | `form` | `string` | no |
| `clientCertificate` | `form` | `string` | no |
| `clientCertificatePath` | `form` | `string[]` | no |
| `oauthClientAttestation` | `form` | `string` | no |
| `oauthClientAttestationPop` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevocationResponse` | `revocationResponseSchema` | `src/models/revocation-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

