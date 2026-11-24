<!-- Generated file — do not edit; regenerated with the SDK. -->

# Migrations — operations

Accessor: `client.Migrations` · Source: `src/AmazonLex/Api/Migrations.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMigration

- **Auth**: `options.Sigv4`
- **Signature**: `GetMigration(GetMigrationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MigrationId`
- **Returns**: `GetMigrationResponse`
- **Error**: `ApiException<GetMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMigrationOperationRequest` | `src/AmazonLex/Requests/Migrations/GetMigrationOperationRequest.cs` |
| `GetMigrationResponse` | `src/AmazonLex/Models/GetMigrationResponse.cs` |
| `GetMigrationError` | `src/AmazonLex/Errors/GetMigrationError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### GetMigrations

- **Auth**: `options.Sigv4`
- **Signature**: `GetMigrations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetMigrationsResponse`
- **Error**: `ApiException<GetMigrationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMigrationsResponse` | `src/AmazonLex/Models/GetMigrationsResponse.cs` |
| `GetMigrationsError` | `src/AmazonLex/Errors/GetMigrationsError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

### StartMigration

- **Auth**: `options.Sigv4`
- **Signature**: `StartMigration(StartMigrationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StartMigrationResponse`
- **Error**: `ApiException<StartMigrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetModelsLexAccessDeniedException([NotNullWhen(true)] out ModelsLexAccessDeniedException? value)` [403] · `TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartMigrationOperationRequest` | `src/AmazonLex/Requests/Migrations/StartMigrationOperationRequest.cs` |
| `StartMigrationRequest` | `src/AmazonLex/Models/StartMigrationRequest.cs` |
| `StartMigrationResponse` | `src/AmazonLex/Models/StartMigrationResponse.cs` |
| `StartMigrationError` | `src/AmazonLex/Errors/StartMigrationError.cs` |
| `BadRequestException` | `src/AmazonLex/Models/BadRequestException.cs` |
| `ModelsLexAccessDeniedException` | `src/AmazonLex/Models/ModelsLexAccessDeniedException.cs` |
| `NotFoundException` | `src/AmazonLex/Models/NotFoundException.cs` |
| `LimitExceededException` | `src/AmazonLex/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonLex/Models/InternalFailureException.cs` |

