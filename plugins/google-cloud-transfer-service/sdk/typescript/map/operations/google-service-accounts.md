<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleServiceAccounts — operations

Accessor: `client.googleServiceAccounts` · Source: `src/resources/google-service-accounts.ts` · 1 operation · Request and error types: namespace `GoogleServiceAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-storage-transfer-service`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### storagetransferGoogleServiceAccountsGet

- **Signature**: `storagetransferGoogleServiceAccountsGet(request: GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetRequest, options?: RequestOptions): ApiPromise<GoogleServiceAccount, GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetError>`
- **Wire**: `GET /v1/googleServiceAccounts/{projectId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleServiceAccount`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleServiceAccount` | `googleServiceAccountSchema` | `src/models/google-service-account.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

