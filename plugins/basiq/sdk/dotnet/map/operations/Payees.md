<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payees — operations

Accessor: `client.Payees` · Source: `src/Basiq/Api/Payees.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPayeeDetails

- **Auth**: `options.ServicesToken`
- **Signature**: `GetPayeeDetails(GetPayeeDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `PayeeId`
- **Returns**: `PayeeDetailsResponse`
- **Error**: `ApiException<GetPayeeDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorSchema([NotNullWhen(true)] out BadRequestErrorSchema? value)` [400] · `TryGetUnauthorizedErrorSchema([NotNullWhen(true)] out UnauthorizedErrorSchema? value)` [401] · `TryGetForbiddenAccessError1([NotNullWhen(true)] out ForbiddenAccessError1? value)` [403] · `TryGetNotFoundErrorSchema([NotNullWhen(true)] out NotFoundErrorSchema? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPayeeDetailsRequest` | `src/Basiq/Requests/Payees/GetPayeeDetailsRequest.cs` |
| `PayeeDetailsResponse` | `src/Basiq/Models/PayeeDetailsResponse.cs` |
| `GetPayeeDetailsError` | `src/Basiq/Errors/GetPayeeDetailsError.cs` |
| `BadRequestErrorSchema` | `src/Basiq/Models/BadRequestErrorSchema.cs` |
| `UnauthorizedErrorSchema` | `src/Basiq/Models/UnauthorizedErrorSchema.cs` |
| `ForbiddenAccessError1` | `src/Basiq/Models/ForbiddenAccessError1.cs` |
| `NotFoundErrorSchema` | `src/Basiq/Models/NotFoundErrorSchema.cs` |

### GetPayees

- **Auth**: `options.ServicesToken`
- **Signature**: `GetPayees(GetPayeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `filter` ← `Filter`
- **Returns**: `PayeesListResponse`
- **Error**: `ApiException<GetPayeesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorSchema([NotNullWhen(true)] out BadRequestErrorSchema? value)` [400] · `TryGetUnauthorizedErrorSchema([NotNullWhen(true)] out UnauthorizedErrorSchema? value)` [401] · `TryGetForbiddenAccessError1([NotNullWhen(true)] out ForbiddenAccessError1? value)` [403] · `TryGetNotFoundErrorSchema([NotNullWhen(true)] out NotFoundErrorSchema? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPayeesRequest` | `src/Basiq/Requests/Payees/GetPayeesRequest.cs` |
| `PayeesListResponse` | `src/Basiq/Models/PayeesListResponse.cs` |
| `GetPayeesError` | `src/Basiq/Errors/GetPayeesError.cs` |
| `BadRequestErrorSchema` | `src/Basiq/Models/BadRequestErrorSchema.cs` |
| `UnauthorizedErrorSchema` | `src/Basiq/Models/UnauthorizedErrorSchema.cs` |
| `ForbiddenAccessError1` | `src/Basiq/Models/ForbiddenAccessError1.cs` |
| `NotFoundErrorSchema` | `src/Basiq/Models/NotFoundErrorSchema.cs` |

