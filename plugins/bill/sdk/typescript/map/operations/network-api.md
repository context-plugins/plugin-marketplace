<!-- Generated file — do not edit; regenerated with the SDK. -->

# NetworkApi — operations

Accessor: `client.networkApi` · Source: `src/resources/network-api.ts` · 9 operations · Request and error types: namespace `NetworkApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acceptInvitation

- **Signature**: `acceptInvitation(request: NetworkApi.AcceptInvitationRequest, options?: RequestOptions): ApiPromise<undefined, NetworkApi.AcceptInvitationError>`
- **Wire**: `POST /v3/network/invitation/accept`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `NetworkApi.AcceptInvitationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkApi.AcceptInvitationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `AcceptInvitationRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AcceptInvitationRequestDto` | `acceptInvitationRequestDtoSchema` | `src/models/accept-invitation-request-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createCustomerInvitation

- **Signature**: `createCustomerInvitation(request: NetworkApi.CreateCustomerInvitationRequest, options?: RequestOptions): ApiPromise<undefined, NetworkApi.CreateCustomerInvitationError>`
- **Wire**: `POST /v3/network/invitation/customer/{customerId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `NetworkApi.CreateCustomerInvitationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkApi.CreateCustomerInvitationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateInvitationRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateInvitationRequestDto` | `createInvitationRequestDtoSchema` | `src/models/create-invitation-request-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createVendorInvitation

- **Signature**: `createVendorInvitation(request: NetworkApi.CreateVendorInvitationRequest, options?: RequestOptions): ApiPromise<undefined, NetworkApi.CreateVendorInvitationError>`
- **Wire**: `POST /v3/network/invitation/vendor/{vendorId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `NetworkApi.CreateVendorInvitationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkApi.CreateVendorInvitationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateInvitationRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateInvitationRequestDto` | `createInvitationRequestDtoSchema` | `src/models/create-invitation-request-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteCustomerInvitation

- **Signature**: `deleteCustomerInvitation(request: NetworkApi.DeleteCustomerInvitationRequest, options?: RequestOptions): ApiPromise<undefined, NetworkApi.DeleteCustomerInvitationError>`
- **Wire**: `DELETE /v3/network/invitation/customer/{customerId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `NetworkApi.DeleteCustomerInvitationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkApi.DeleteCustomerInvitationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteVendorInvitation

- **Signature**: `deleteVendorInvitation(request: NetworkApi.DeleteVendorInvitationRequest, options?: RequestOptions): ApiPromise<undefined, NetworkApi.DeleteVendorInvitationError>`
- **Wire**: `DELETE /v3/network/invitation/vendor/{vendorId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `NetworkApi.DeleteVendorInvitationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkApi.DeleteVendorInvitationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCustomerInvitation

- **Signature**: `getCustomerInvitation(request: NetworkApi.GetCustomerInvitationRequest, options?: RequestOptions): ApiPromise<GetInvitationResponseDto, NetworkApi.GetCustomerInvitationError>`
- **Wire**: `GET /v3/network/invitation/customer/{customerId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetInvitationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `NetworkApi.GetCustomerInvitationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkApi.GetCustomerInvitationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetInvitationResponseDto` | `getInvitationResponseDtoSchema` | `src/models/get-invitation-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getVendorInvitation

- **Signature**: `getVendorInvitation(request: NetworkApi.GetVendorInvitationRequest, options?: RequestOptions): ApiPromise<GetInvitationResponseDto, NetworkApi.GetVendorInvitationError>`
- **Wire**: `GET /v3/network/invitation/vendor/{vendorId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetInvitationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `NetworkApi.GetVendorInvitationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkApi.GetVendorInvitationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetInvitationResponseDto` | `getInvitationResponseDtoSchema` | `src/models/get-invitation-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### inviteVendorNotInBillNetwork

- **Signature**: `inviteVendorNotInBillNetwork(request: NetworkApi.InviteVendorNotInBillNetworkRequest, options?: RequestOptions): ApiPromise<undefined, NetworkApi.InviteVendorNotInBillNetworkError>`
- **Wire**: `POST /v3/network/invitation/vendor/{vendorId}/email`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `NetworkApi.InviteVendorNotInBillNetworkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkApi.InviteVendorNotInBillNetworkRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `InviteVendorNotInBillNetworkRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InviteVendorNotInBillNetworkRequestDto` | `inviteVendorNotInBillNetworkRequestDtoSchema` | `src/models/invite-vendor-not-in-bill-network-request-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### search

- **Signature**: `search(request: NetworkApi.SearchRequest, options?: RequestOptions): ApiPromise<NetworkSearchResponseDto, NetworkApi.SearchError>`
- **Wire**: `GET /v3/network`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NetworkSearchResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `NetworkApi.SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkApi.SearchRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | yes |
| `scope` | `query` | `ScopeType` | no |
| `zipOrPostalCode` | `query` | `string` | no |
| `accountNumber` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScopeType` | `scopeTypeSchema` | `src/models/scope-type.ts` |
| `NetworkSearchResponseDto` | `networkSearchResponseDtoSchema` | `src/models/network-search-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

