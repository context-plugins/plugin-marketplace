<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screen — operations

Accessor: `client.Screen` · Source: `src/Jid/Api/Screen.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EmailCheck

- **Signature**: `EmailCheck(EmailCheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<EmailCheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EmailCheckRequest` | `src/Jid/Requests/Screen/EmailCheckRequest.cs` |
| `V1EmailCheckRequest` | `src/Jid/Models/V1EmailCheckRequest.cs` |
| `EmailCheckError` | `src/Jid/Errors/EmailCheckError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

### ScreenGet

- **Signature**: `ScreenGet(ScreenGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `url` ← `Url`, `email` ← `Email`, `phone` ← `Phone`, `company_name` ← `CompanyName`, `name` ← `Name`, `context` ← `Context`, `policy` ← `Policy`, `amount` ← `Amount`, `country` ← `Country`, `ip_country` ← `IpCountry`, `ip_region` ← `IpRegion`, `ip_asn` ← `IpAsn`, `browser_timezone` ← `BrowserTimezone`, `stated_country` ← `StatedCountry`, `signal` ← `Signal`, `site` ← `Site`
- **Returns**: `ScreenResult`
- **Error**: `ApiException<ScreenGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ScreenGetRequest` | `src/Jid/Requests/Screen/ScreenGetRequest.cs` |
| `ScreenResult` | `src/Jid/Models/ScreenResult.cs` |
| `ScreenGetError` | `src/Jid/Errors/ScreenGetError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

### ScreenInvoke

- **Signature**: `ScreenInvoke(ScreenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ScreenResult`
- **Error**: `ApiException<ScreenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ScreenRequest` | `src/Jid/Requests/Screen/ScreenRequest.cs` |
| `V1ScreenRequest` | `src/Jid/Models/V1ScreenRequest.cs` |
| `ScreenResult` | `src/Jid/Models/ScreenResult.cs` |
| `ScreenError` | `src/Jid/Errors/ScreenError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

