# EmbedPresetsEssentials — operations

Accessor: `client.EmbedPresetsEssentials` · Source: `Api/EmbedPresetsEssentials.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateEmbedPresets
- **HTTP**: `POST /users/{user_id}/presets` (Default (api))
- **Notes**: This method creates an embed preset.
- **Signature**: `CreateEmbedPresets(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateEmbedPresetsAlt1
- **HTTP**: `POST /me/presets` (Default (api))
- **Notes**: This method creates an embed preset.
- **Signature**: `CreateEmbedPresetsAlt1(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEmbedPreset
- **HTTP**: `DELETE /users/{user_id}/presets/{preset_id}` (Default (api))
- **Notes**: This method deletes the specified embed preset. The authenticated user must be the owner of the preset.
- **Signature**: `DeleteEmbedPreset(double presetId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteEmbedPresetError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEmbedPresetAlt1
- **HTTP**: `DELETE /me/presets/{preset_id}` (Default (api))
- **Notes**: This method deletes the specified embed preset. The authenticated user must be the owner of the preset.
- **Signature**: `DeleteEmbedPresetAlt1(double presetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteEmbedPresetAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditEmbedPreset
- **HTTP**: `PATCH /users/{user_id}/presets/{preset_id}` (Default (api))
- **Notes**: This method edits the specified embed preset. The authenticated user must be the owner of the preset.
- **Signature**: `EditEmbedPreset(double presetId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditEmbedPresetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditEmbedPresetAlt1
- **HTTP**: `PATCH /me/presets/{preset_id}` (Default (api))
- **Notes**: This method edits the specified embed preset. The authenticated user must be the owner of the preset.
- **Signature**: `EditEmbedPresetAlt1(double presetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditEmbedPresetAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmbedPreset
- **HTTP**: `GET /users/{user_id}/presets/{preset_id}` (Default (api))
- **Notes**: This method returns a single embed preset. The authenticated user must be the owner of the preset.
- **Signature**: `GetEmbedPreset(double presetId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmbedPresetAlt1
- **HTTP**: `GET /me/presets/{preset_id}` (Default (api))
- **Notes**: This method returns a single embed preset. The authenticated user must be the owner of the preset.
- **Signature**: `GetEmbedPresetAlt1(double presetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetEmbedPresets
- **HTTP**: `GET /users/{user_id}/presets` (Default (api))
- **Notes**: This method returns every embed preset that belongs to the authenticated user.
- **Signature**: `GetEmbedPresets(double userId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetEmbedPresetsAlt1
- **HTTP**: `GET /me/presets` (Default (api))
- **Notes**: This method returns every embed preset that belongs to the authenticated user.
- **Signature**: `GetEmbedPresetsAlt1(double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
