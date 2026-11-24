<!-- Generated file — do not edit; regenerated with the SDK. -->

# FederalRegister — operations

Accessor: `client.FederalRegister` · Source: `src/DynamicFeed/Api/FederalRegister.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FederalRegisterFederalRegisterGet

- **Signature**: `FederalRegisterFederalRegisterGet(FederalRegisterFederalRegisterGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `query` ← `Query`, `doc_type` ← `DocType`, `agency` ← `Agency`, `days` ← `Days`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<FederalRegisterFederalRegisterGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FederalRegisterFederalRegisterGetRequest` | `src/DynamicFeed/Requests/FederalRegister/FederalRegisterFederalRegisterGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `FederalRegisterFederalRegisterGetError` | `src/DynamicFeed/Errors/FederalRegisterFederalRegisterGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

