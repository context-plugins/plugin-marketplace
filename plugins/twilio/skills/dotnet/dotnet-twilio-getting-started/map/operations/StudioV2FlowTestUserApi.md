<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2FlowTestUserApi — operations

Accessor: `client.StudioV2FlowTestUserApi` · Source: `Api/StudioV2FlowTestUserApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchTestUser

- **Server group**: `Default11`
- **Signature**: `FetchTestUser(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV2FlowTestUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV2FlowTestUser` | `Models/StudioV2FlowTestUser.cs` |

### UpdateTestUser

- **Server group**: `Default11`
- **Signature**: `UpdateTestUser(string sid, IReadOnlyList<string> testUsers, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `StudioV2FlowTestUser`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StudioV2FlowTestUser` | `Models/StudioV2FlowTestUser.cs` |

