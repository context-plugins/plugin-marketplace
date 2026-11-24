<!-- Generated file — do not edit; regenerated with the SDK. -->

# App — operations

Accessor: `client.App` · Source: `src/BundleSocial/Api/App.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AppGetHealth

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AppGetHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1Response`
- **Error**: `ApiException<AppGetHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1400Error1([NotNullWhen(true)] out ApiV1400Error1? value)` [400] · `TryGetApiV1401Error1([NotNullWhen(true)] out ApiV1401Error1? value)` [401] · `TryGetApiV1403Error1([NotNullWhen(true)] out ApiV1403Error1? value)` [403] · `TryGetApiV1404Error1([NotNullWhen(true)] out ApiV1404Error1? value)` [404] · `TryGetApiV1429Error1([NotNullWhen(true)] out ApiV1429Error1? value)` [429] · `TryGetApiV1500Error1([NotNullWhen(true)] out ApiV1500Error1? value)` [500] · `TryGetApiV1502Error1([NotNullWhen(true)] out ApiV1502Error1? value)` [502] · `TryGetApiV1503Error1([NotNullWhen(true)] out ApiV1503Error1? value)` [503] · `TryGetApiV1504Error1([NotNullWhen(true)] out ApiV1504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1Response` | `src/BundleSocial/Models/ApiV1Response.cs` |
| `AppGetHealthError` | `src/BundleSocial/Errors/AppGetHealthError.cs` |
| `ApiV1400Error1` | `src/BundleSocial/Models/ApiV1400Error1.cs` |
| `ApiV1401Error1` | `src/BundleSocial/Models/ApiV1401Error1.cs` |
| `ApiV1403Error1` | `src/BundleSocial/Models/ApiV1403Error1.cs` |
| `ApiV1404Error1` | `src/BundleSocial/Models/ApiV1404Error1.cs` |
| `ApiV1429Error1` | `src/BundleSocial/Models/ApiV1429Error1.cs` |
| `ApiV1500Error1` | `src/BundleSocial/Models/ApiV1500Error1.cs` |
| `ApiV1502Error1` | `src/BundleSocial/Models/ApiV1502Error1.cs` |
| `ApiV1503Error1` | `src/BundleSocial/Models/ApiV1503Error1.cs` |
| `ApiV1504Error1` | `src/BundleSocial/Models/ApiV1504Error1.cs` |

