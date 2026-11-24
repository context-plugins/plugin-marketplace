<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `src/resources/accounts.ts` · 8 operations · Request and error types: namespace `Accounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-analytics`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### analyticsadminAccountsDelete

- **Signature**: `analyticsadminAccountsDelete(request: Accounts.AnalyticsadminAccountsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Accounts.AnalyticsadminAccountsDeleteError>`
- **Wire**: `DELETE /v1beta/accounts/{accountsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Accounts.AnalyticsadminAccountsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.AnalyticsadminAccountsDeleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminAccountsGet

- **Signature**: `analyticsadminAccountsGet(request: Accounts.AnalyticsadminAccountsGetRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaAccount, Accounts.AnalyticsadminAccountsGetError>`
- **Wire**: `GET /v1beta/accounts/{accountsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaAccount`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Accounts.AnalyticsadminAccountsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.AnalyticsadminAccountsGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaAccount` | `googleAnalyticsAdminV1BetaAccountSchema` | `src/models/google-analytics-admin-v1-beta-account.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminAccountsGetDataSharingSettings

- **Signature**: `analyticsadminAccountsGetDataSharingSettings(request: Accounts.AnalyticsadminAccountsGetDataSharingSettingsRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaDataSharingSettings, Accounts.AnalyticsadminAccountsGetDataSharingSettingsError>`
- **Wire**: `GET /v1beta/accounts/{accountsId}/dataSharingSettings`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaDataSharingSettings`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Accounts.AnalyticsadminAccountsGetDataSharingSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.AnalyticsadminAccountsGetDataSharingSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaDataSharingSettings` | `googleAnalyticsAdminV1BetaDataSharingSettingsSchema` | `src/models/google-analytics-admin-v1-beta-data-sharing-settings.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminAccountsList

- **Signature**: `analyticsadminAccountsList(request?: Accounts.AnalyticsadminAccountsListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListAccountsResponse, Accounts.AnalyticsadminAccountsListError>`
- **Wire**: `GET /v1beta/accounts`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListAccountsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Accounts.AnalyticsadminAccountsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.AnalyticsadminAccountsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `showDeleted` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListAccountsResponse` | `googleAnalyticsAdminV1BetaListAccountsResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-accounts-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminAccountsPatch

- **Signature**: `analyticsadminAccountsPatch(request: Accounts.AnalyticsadminAccountsPatchRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaAccount, Accounts.AnalyticsadminAccountsPatchError>`
- **Wire**: `PATCH /v1beta/accounts/{accountsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaAccount`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Accounts.AnalyticsadminAccountsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.AnalyticsadminAccountsPatchRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaAccount` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaAccount` | `googleAnalyticsAdminV1BetaAccountSchema` | `src/models/google-analytics-admin-v1-beta-account.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminAccountsProvisionAccountTicket

- **Signature**: `analyticsadminAccountsProvisionAccountTicket(request: Accounts.AnalyticsadminAccountsProvisionAccountTicketRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse, Accounts.AnalyticsadminAccountsProvisionAccountTicketError>`
- **Wire**: `POST /v1beta/accounts:provisionAccountTicket`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Accounts.AnalyticsadminAccountsProvisionAccountTicketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.AnalyticsadminAccountsProvisionAccountTicketRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest` | `googleAnalyticsAdminV1BetaProvisionAccountTicketRequestSchema` | `src/models/google-analytics-admin-v1-beta-provision-account-ticket-request.ts` |
| `GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse` | `googleAnalyticsAdminV1BetaProvisionAccountTicketResponseSchema` | `src/models/google-analytics-admin-v1-beta-provision-account-ticket-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminAccountsRunAccessReport

- **Signature**: `analyticsadminAccountsRunAccessReport(request: Accounts.AnalyticsadminAccountsRunAccessReportRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaRunAccessReportResponse, Accounts.AnalyticsadminAccountsRunAccessReportError>`
- **Wire**: `POST /v1beta/accounts/{accountsId}:runAccessReport`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaRunAccessReportResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Accounts.AnalyticsadminAccountsRunAccessReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.AnalyticsadminAccountsRunAccessReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaRunAccessReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaRunAccessReportRequest` | `googleAnalyticsAdminV1BetaRunAccessReportRequestSchema` | `src/models/google-analytics-admin-v1-beta-run-access-report-request.ts` |
| `GoogleAnalyticsAdminV1BetaRunAccessReportResponse` | `googleAnalyticsAdminV1BetaRunAccessReportResponseSchema` | `src/models/google-analytics-admin-v1-beta-run-access-report-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### analyticsadminAccountsSearchChangeHistoryEvents

- **Signature**: `analyticsadminAccountsSearchChangeHistoryEvents(request: Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse, Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsError>`
- **Wire**: `POST /v1beta/accounts/{accountsId}:searchChangeHistoryEvents`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest` | `googleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestSchema` | `src/models/google-analytics-admin-v1-beta-search-change-history-events-request.ts` |
| `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse` | `googleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponseSchema` | `src/models/google-analytics-admin-v1-beta-search-change-history-events-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

