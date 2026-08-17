<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2SafelistApi — operations

Accessor: `client.VerifyV2SafelistApi` · Source: `Api/VerifyV2SafelistApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSafelist

- **Server group**: `Default3`
- **Signature**: `CreateSafelist(string phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2Safelist`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2Safelist` | `Models/VerifyV2Safelist.cs` |

### DeleteSafelist

- **Server group**: `Default3`
- **Signature**: `DeleteSafelist(string phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSafelist

- **Server group**: `Default3`
- **Signature**: `FetchSafelist(string phoneNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2Safelist`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2Safelist` | `Models/VerifyV2Safelist.cs` |

