<!-- Generated file — do not edit; regenerated with the SDK. -->

# SsoAccounts — operations

Accessor: `client.SsoAccounts` · Source: `src/Givebutter/Api/SsoAccounts.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SsoAccount

- **Auth**: `options.Http`
- **Signature**: `SsoAccount(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SsoAccountResource`
- **Error**: `ApiException<SsoAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthenticationException1([NotNullWhen(true)] out AuthenticationException1? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SsoAccountResource` | `src/Givebutter/Models/SsoAccountResource.cs` |
| `SsoAccountError` | `src/Givebutter/Errors/SsoAccountError.cs` |
| `AuthenticationException1` | `src/Givebutter/Models/AuthenticationException1.cs` |

