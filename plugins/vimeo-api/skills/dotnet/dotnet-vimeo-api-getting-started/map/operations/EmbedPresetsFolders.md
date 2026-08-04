# EmbedPresetsFolders — operations

Accessor: `client.EmbedPresetsFolders` · Source: `Api/EmbedPresetsFolders.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteFolderEmbedPreset
- **HTTP**: `DELETE /users/{user_id}/projects/{project_id}/presets/{preset_id}` (Default (api))
- **Notes**: This method removes the specified embed preset from a folder. The authenticated user must be either the owner of the folder or a team user with the contributor or admin role.
- **Signature**: `DeleteFolderEmbedPreset(double presetId, double projectId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteFolderEmbedPresetError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
