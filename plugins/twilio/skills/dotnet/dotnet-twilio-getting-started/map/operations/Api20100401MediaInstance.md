<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401MediaInstance — operations

Accessor: `client.Api20100401MediaInstance` · Source: `Api/Api20100401MediaInstance.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteMedia

- **Signature**: `DeleteMedia(string accountSid, string messageSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchMedia

- **Signature**: `FetchMedia(string accountSid, string messageSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountMessageMedia`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountMessageMedia` | `Models/ApiV2010AccountMessageMedia.cs` |

