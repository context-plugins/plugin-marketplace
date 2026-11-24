<!-- Generated file — do not edit; regenerated with the SDK. -->

# Consents — operations

Accessor: `client.consents` · Source: `src/resources/consents.ts` · 2 operations · Request and error types: namespace `Consents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteConsent

- **Signature**: `deleteConsent(request: Consents.DeleteConsentRequest, options?: RequestOptions): ApiPromise<undefined, Consents.DeleteConsentError>`
- **Wire**: `DELETE /users/{userId}/consents/{consentId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Consents.DeleteConsentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersConsents400Error1"` [400] `UsersConsents400Error1` · `"usersConsents401Error1"` [401] `UsersConsents401Error1` · `"usersConsents403Error1"` [403] `UsersConsents403Error1` · `"usersConsents404Error1"` [404] `UsersConsents404Error1` · `"usersConsents500Error1"` [500] `UsersConsents500Error1` · `"usersConsents503Error1"` [503] `UsersConsents503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Consents.DeleteConsentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `consentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersConsents400Error1` | `usersConsents400Error1Schema` | `src/models/users-consents400-error1.ts` |
| `UsersConsents401Error1` | `usersConsents401Error1Schema` | `src/models/users-consents401-error1.ts` |
| `UsersConsents403Error1` | `usersConsents403Error1Schema` | `src/models/users-consents403-error1.ts` |
| `UsersConsents404Error1` | `usersConsents404Error1Schema` | `src/models/users-consents404-error1.ts` |
| `UsersConsents500Error1` | `usersConsents500Error1Schema` | `src/models/users-consents500-error1.ts` |
| `UsersConsents503Error1` | `usersConsents503Error1Schema` | `src/models/users-consents503-error1.ts` |

### getConsents

- **Signature**: `getConsents(request: Consents.GetConsentsRequest, options?: RequestOptions): ApiPromise<UsersConsentsResponse, Consents.GetConsentsError>`
- **Wire**: `GET /users/{userId}/consents`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersConsentsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Consents.GetConsentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersConsents400Error1"` [400] `UsersConsents400Error1` · `"usersConsents401Error1"` [401] `UsersConsents401Error1` · `"usersConsents403Error1"` [403] `UsersConsents403Error1` · `"usersConsents404Error1"` [404] `UsersConsents404Error1` · `"usersConsents500Error1"` [500] `UsersConsents500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Consents.GetConsentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersConsentsResponse` | `usersConsentsResponseSchema` | `src/models/users-consents-response.ts` |
| `UsersConsents400Error1` | `usersConsents400Error1Schema` | `src/models/users-consents400-error1.ts` |
| `UsersConsents401Error1` | `usersConsents401Error1Schema` | `src/models/users-consents401-error1.ts` |
| `UsersConsents403Error1` | `usersConsents403Error1Schema` | `src/models/users-consents403-error1.ts` |
| `UsersConsents404Error1` | `usersConsents404Error1Schema` | `src/models/users-consents404-error1.ts` |
| `UsersConsents500Error1` | `usersConsents500Error1Schema` | `src/models/users-consents500-error1.ts` |

