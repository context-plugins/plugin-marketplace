<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401ValidationRequest — operations

Accessor: `client.Api20100401ValidationRequest` · Source: `Api/Api20100401ValidationRequest.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateValidationRequest

- **Signature**: `CreateValidationRequest(string accountSid, string phoneNumber, string? friendlyName, int? callDelay, string? extension, string? statusCallback, StatusCallbackMethod15? statusCallbackMethod, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`friendlyName` … `statusCallbackMethod`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountValidationRequest`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StatusCallbackMethod15` | `Models/Enums/StatusCallbackMethod15.cs` |
| `ApiV2010AccountValidationRequest` | `Models/ApiV2010AccountValidationRequest.cs` |

