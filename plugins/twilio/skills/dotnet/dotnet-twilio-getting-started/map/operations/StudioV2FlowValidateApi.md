<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2FlowValidateApi — operations

Accessor: `client.StudioV2FlowValidateApi` · Source: `Api/StudioV2FlowValidateApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UpdateFlowValidate

- **Server group**: `Default11`
- **Signature**: `UpdateFlowValidate(string friendlyName, FlowEnumStatus status, object definition, string? commitMessage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `commitMessage` — nullable, no default → **must pass explicitly**
- **Returns**: `StudioV2FlowValidate`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlowEnumStatus` | `Models/Enums/FlowEnumStatus.cs` |
| `StudioV2FlowValidate` | `Models/StudioV2FlowValidate.cs` |

