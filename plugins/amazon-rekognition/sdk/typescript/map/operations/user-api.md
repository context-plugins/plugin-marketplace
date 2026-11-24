<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserApi — operations

Accessor: `client.userApi` · Source: `src/resources/user-api.ts` · 5 operations · Request and error types: namespace `UserApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createUser

- **Signature**: `createUser(request: UserApi.CreateUserRequestParams, options?: RequestOptions): ApiPromise<undefined, UserApi.CreateUserError>`
- **Wire**: `POST /#CreateUser`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `UserApi.CreateUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserApi.CreateUserRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionUserApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionUserApi` | `xAmzTargetAmazonRekognitionUserApiSchema` | `src/models/xamz-target-amazon-rekognition-user-api.ts` |

### deleteUser

- **Signature**: `deleteUser(request: UserApi.DeleteUserRequestParams, options?: RequestOptions): ApiPromise<undefined, UserApi.DeleteUserError>`
- **Wire**: `POST /#DeleteUser`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `UserApi.DeleteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserApi.DeleteUserRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionUserApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionUserApi` | `xAmzTarget1AmazonRekognitionUserApiSchema` | `src/models/xamz-target1-amazon-rekognition-user-api.ts` |

### listUsers

- **Signature**: `listUsers(request: UserApi.ListUsersRequestParams, options?: RequestOptions): ApiPromise<undefined, UserApi.ListUsersError>`
- **Wire**: `POST /#ListUsers`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `UserApi.ListUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserApi.ListUsersRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionUserApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionUserApi` | `xAmzTarget2AmazonRekognitionUserApiSchema` | `src/models/xamz-target2-amazon-rekognition-user-api.ts` |

### searchUsers

- **Signature**: `searchUsers(request: UserApi.SearchUsersRequestParams, options?: RequestOptions): ApiPromise<undefined, UserApi.SearchUsersError>`
- **Wire**: `POST /#SearchUsers`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `UserApi.SearchUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserApi.SearchUsersRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonRekognitionUserApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonRekognitionUserApi` | `xAmzTarget3AmazonRekognitionUserApiSchema` | `src/models/xamz-target3-amazon-rekognition-user-api.ts` |

### searchUsersByImage

- **Signature**: `searchUsersByImage(request: UserApi.SearchUsersByImageRequestParams, options?: RequestOptions): ApiPromise<undefined, UserApi.SearchUsersByImageError>`
- **Wire**: `POST /#SearchUsersByImage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `UserApi.SearchUsersByImageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserApi.SearchUsersByImageRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AmazonRekognitionUserApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AmazonRekognitionUserApi` | `xAmzTarget4AmazonRekognitionUserApiSchema` | `src/models/xamz-target4-amazon-rekognition-user-api.ts` |

