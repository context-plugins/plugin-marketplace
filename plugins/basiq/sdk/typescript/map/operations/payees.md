<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payees — operations

Accessor: `client.payees` · Source: `src/resources/payees.ts` · 2 operations · Request and error types: namespace `Payees`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPayeeDetails

- **Signature**: `getPayeeDetails(request: Payees.GetPayeeDetailsRequest, options?: RequestOptions): ApiPromise<PayeeDetailsResponse, Payees.GetPayeeDetailsError>`
- **Wire**: `GET /users/{userId}/payees/{payeeId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayeeDetailsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Payees.GetPayeeDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorSchema"` [400] `BadRequestErrorSchema` · `"unauthorizedErrorSchema"` [401] `UnauthorizedErrorSchema` · `"forbiddenAccessError1"` [403] `ForbiddenAccessError1` · `"notFoundErrorSchema"` [404] `NotFoundErrorSchema` · `"notFoundErrorSchema2"` [500] `NotFoundErrorSchema` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payees.GetPayeeDetailsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `payeeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayeeDetailsResponse` | `payeeDetailsResponseSchema` | `src/models/payee-details-response.ts` |
| `BadRequestErrorSchema` | `badRequestErrorSchemaSchema` | `src/models/bad-request-error-schema.ts` |
| `UnauthorizedErrorSchema` | `unauthorizedErrorSchemaSchema` | `src/models/unauthorized-error-schema.ts` |
| `ForbiddenAccessError1` | `forbiddenAccessError1Schema` | `src/models/forbidden-access-error1.ts` |
| `NotFoundErrorSchema` | `notFoundErrorSchemaSchema` | `src/models/not-found-error-schema.ts` |

### getPayees

- **Signature**: `getPayees(request: Payees.GetPayeesRequest, options?: RequestOptions): ApiPromise<PayeesListResponse, Payees.GetPayeesError>`
- **Wire**: `GET /users/{userId}/payees`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayeesListResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Payees.GetPayeesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorSchema"` [400] `BadRequestErrorSchema` · `"unauthorizedErrorSchema"` [401] `UnauthorizedErrorSchema` · `"forbiddenAccessError1"` [403] `ForbiddenAccessError1` · `"notFoundErrorSchema"` [500] `NotFoundErrorSchema` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payees.GetPayeesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `string` | yes | — |
| `limit` | `query` | `number` | no | `25` |
| `filter` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayeesListResponse` | `payeesListResponseSchema` | `src/models/payees-list-response.ts` |
| `BadRequestErrorSchema` | `badRequestErrorSchemaSchema` | `src/models/bad-request-error-schema.ts` |
| `UnauthorizedErrorSchema` | `unauthorizedErrorSchemaSchema` | `src/models/unauthorized-error-schema.ts` |
| `ForbiddenAccessError1` | `forbiddenAccessError1Schema` | `src/models/forbidden-access-error1.ts` |
| `NotFoundErrorSchema` | `notFoundErrorSchemaSchema` | `src/models/not-found-error-schema.ts` |

