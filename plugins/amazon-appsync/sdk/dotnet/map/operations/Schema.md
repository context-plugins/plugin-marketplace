<!-- Generated file — do not edit; regenerated with the SDK. -->

# Schema — operations

Accessor: `client.Schema` · Source: `src/AmazonAppSync/Api/Schema.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetIntrospectionSchema

- **Auth**: `options.Sigv4`
- **Signature**: `GetIntrospectionSchema(GetIntrospectionSchemaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`, `Format`
- **Query params (wire ← C#)**: `format` ← `Format`, `includeDirectives` ← `IncludeDirectives`
- **Returns**: `GetIntrospectionSchemaResponse`
- **Error**: `ApiException<GetIntrospectionSchemaError>` — **Case A (typed)**
- **Error accessors**: `TryGetGraphQlSchemaException([NotNullWhen(true)] out GraphQlSchemaException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIntrospectionSchemaRequest` | `src/AmazonAppSync/Requests/Schema/GetIntrospectionSchemaRequest.cs` |
| `Format` | `src/AmazonAppSync/Models/Enums/Format.cs` |
| `GetIntrospectionSchemaResponse` | `src/AmazonAppSync/Models/GetIntrospectionSchemaResponse.cs` |
| `GetIntrospectionSchemaError` | `src/AmazonAppSync/Errors/GetIntrospectionSchemaError.cs` |
| `GraphQlSchemaException` | `src/AmazonAppSync/Models/GraphQlSchemaException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### GetSchemaCreationStatus2

- **Auth**: `options.Sigv4`
- **Signature**: `GetSchemaCreationStatus2(GetSchemaCreationStatus2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `GetSchemaCreationStatusResponse`
- **Error**: `ApiException<GetSchemaCreationStatus2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSchemaCreationStatus2Request` | `src/AmazonAppSync/Requests/Schema/GetSchemaCreationStatus2Request.cs` |
| `GetSchemaCreationStatusResponse` | `src/AmazonAppSync/Models/GetSchemaCreationStatusResponse.cs` |
| `GetSchemaCreationStatus2Error` | `src/AmazonAppSync/Errors/GetSchemaCreationStatus2Error.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

### StartSchemaCreation2

- **Auth**: `options.Sigv4`
- **Signature**: `StartSchemaCreation2(StartSchemaCreation2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiId`
- **Returns**: `StartSchemaCreationResponse`
- **Error**: `ApiException<StartSchemaCreation2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value)` [401] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetConcurrentModificationException([NotNullWhen(true)] out ConcurrentModificationException? value)` [409] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartSchemaCreation2Request` | `src/AmazonAppSync/Requests/Schema/StartSchemaCreation2Request.cs` |
| `V1ApisSchemacreationRequest` | `src/AmazonAppSync/Models/V1ApisSchemacreationRequest.cs` |
| `StartSchemaCreationResponse` | `src/AmazonAppSync/Models/StartSchemaCreationResponse.cs` |
| `StartSchemaCreation2Error` | `src/AmazonAppSync/Errors/StartSchemaCreation2Error.cs` |
| `BadRequestException` | `src/AmazonAppSync/Models/BadRequestException.cs` |
| `UnauthorizedException` | `src/AmazonAppSync/Models/UnauthorizedException.cs` |
| `NotFoundException` | `src/AmazonAppSync/Models/NotFoundException.cs` |
| `ConcurrentModificationException` | `src/AmazonAppSync/Models/ConcurrentModificationException.cs` |
| `InternalFailureException` | `src/AmazonAppSync/Models/InternalFailureException.cs` |

