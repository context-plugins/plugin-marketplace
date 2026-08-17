<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1ConfigurationApi — operations

Accessor: `client.FlexV1ConfigurationApi` · Source: `Api/FlexV1ConfigurationApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchConfiguration3

- **Server group**: `Default13`
- **Signature**: `FetchConfiguration3(string? uiVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `uiVersion` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `UiVersion` ← `uiVersion`
- **Returns**: `FlexV1Configuration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1Configuration` | `Models/FlexV1Configuration.cs` |

### UpdateConfiguration3

- **Server group**: `Default13`
- **Signature**: `UpdateConfiguration3(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1Configuration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1Configuration` | `Models/FlexV1Configuration.cs` |

