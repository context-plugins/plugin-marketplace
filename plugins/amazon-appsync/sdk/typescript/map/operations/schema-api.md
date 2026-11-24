<!-- Generated file — do not edit; regenerated with the SDK. -->

# SchemaApi — operations

Accessor: `client.schemaApi` · Source: `src/resources/schema-api.ts` · 3 operations · Request and error types: namespace `SchemaApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-app-sync`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getIntrospectionSchema

- **Signature**: `getIntrospectionSchema(request: SchemaApi.GetIntrospectionSchemaRequest, options?: RequestOptions): ApiPromise<GetIntrospectionSchemaResponse, SchemaApi.GetIntrospectionSchemaError>`
- **Wire**: `GET /v1/apis/{apiId}/schema`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetIntrospectionSchemaResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `SchemaApi.GetIntrospectionSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"graphQlSchemaException"` [400] `GraphQlSchemaException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SchemaApi.GetIntrospectionSchemaRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `format` | `query` | `Format` | yes |
| `includeDirectives` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GetIntrospectionSchemaResponse` | `getIntrospectionSchemaResponseSchema` | `src/models/get-introspection-schema-response.ts` |
| `GraphQlSchemaException` | `graphQlSchemaExceptionSchema` | `src/models/graph-ql-schema-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### getSchemaCreationStatus2

- **Signature**: `getSchemaCreationStatus2(request: SchemaApi.GetSchemaCreationStatus2Request, options?: RequestOptions): ApiPromise<GetSchemaCreationStatusResponse, SchemaApi.GetSchemaCreationStatus2Error>`
- **Wire**: `GET /v1/apis/{apiId}/schemacreation`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetSchemaCreationStatusResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `SchemaApi.GetSchemaCreationStatus2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SchemaApi.GetSchemaCreationStatus2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetSchemaCreationStatusResponse` | `getSchemaCreationStatusResponseSchema` | `src/models/get-schema-creation-status-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

### startSchemaCreation2

- **Signature**: `startSchemaCreation2(request: SchemaApi.StartSchemaCreation2Request, options?: RequestOptions): ApiPromise<StartSchemaCreationResponse, SchemaApi.StartSchemaCreation2Error>`
- **Wire**: `POST /v1/apis/{apiId}/schemacreation`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartSchemaCreationResponse`
- **Error**: `AmazonAppSyncError` with `kind: "api"`, an instance of `SchemaApi.StartSchemaCreation2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"concurrentModificationException"` [409] `ConcurrentModificationException` · `"internalFailureException"` [500] `InternalFailureException` · `"notFoundException"` [404] `NotFoundException` · `"unauthorizedException"` [401] `UnauthorizedException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SchemaApi.StartSchemaCreation2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiId` | `path` | `string` | yes |
| `body` | `body` | `V1ApisSchemacreationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ApisSchemacreationRequest` | `v1ApisSchemacreationRequestSchema` | `src/models/v1-apis-schemacreation-request.ts` |
| `StartSchemaCreationResponse` | `startSchemaCreationResponseSchema` | `src/models/start-schema-creation-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConcurrentModificationException` | `concurrentModificationExceptionSchema` | `src/models/concurrent-modification-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `NotFoundException` | `notFoundExceptionSchema` | `src/models/not-found-exception.ts` |
| `UnauthorizedException` | `unauthorizedExceptionSchema` | `src/models/unauthorized-exception.ts` |

