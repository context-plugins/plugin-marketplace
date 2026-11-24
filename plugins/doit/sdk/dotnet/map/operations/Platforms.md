<!-- Generated file — do not edit; regenerated with the SDK. -->

# Platforms — operations

Accessor: `client.Platforms` · Source: `src/DoiT/Api/Platforms.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListPlatforms

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListPlatforms(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SupportV1MetadataPlatformsResponse`
- **Error**: `ApiException<ListPlatformsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SupportV1MetadataPlatformsResponse` | `src/DoiT/Models/SupportV1MetadataPlatformsResponse.cs` |
| `ListPlatformsError` | `src/DoiT/Errors/ListPlatformsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

