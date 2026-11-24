<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.Discovery` · Source: `src/RelmCrm/Api/Discovery.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSchema

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetSchema(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SchemaDoc`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SchemaDoc` | `src/RelmCrm/Models/SchemaDoc.cs` |

### GetSettings

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetSettings(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Settings`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Settings` | `src/RelmCrm/Models/Settings.cs` |

### GetUsage

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Usage`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Usage` | `src/RelmCrm/Models/Usage.cs` |

### SetSettings

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `SetSettings(SetSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Settings`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SetSettingsRequest` | `src/RelmCrm/Requests/Discovery/SetSettingsRequest.cs` |
| `SettingsRequest` | `src/RelmCrm/Models/SettingsRequest.cs` |
| `Settings` | `src/RelmCrm/Models/Settings.cs` |

