# AdminTeamsSettings — operations

Accessor: `client.AdminTeamsSettings` · Source: `Api/AdminTeamsSettings.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdminTeamsSettingsInfo
- **HTTP**: `GET /admin.teams.settings.info` (Default (slack))
- **Notes**: Fetch information about settings in a workspace
- **Signature**: `AdminTeamsSettingsInfo(string teamId, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsInfo1
- **HTTP**: `GET /admin.teams.settings.info` (Default (slack))
- **Notes**: Fetch information about settings in a workspace
- **Signature**: `AdminTeamsSettingsInfo1(string teamId, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDefaultChannels
- **HTTP**: `POST /admin.teams.settings.setDefaultChannels` (Default (slack))
- **Notes**: Set the default channels of a workspace.
- **Signature**: `AdminTeamsSettingsSetDefaultChannels(ContentType contentType, string token, string teamId, string channelIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team_id` ← `teamId`, `channel_ids` ← `channelIds`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDefaultChannels1
- **HTTP**: `POST /admin.teams.settings.setDefaultChannels` (Default (slack))
- **Notes**: Set the default channels of a workspace.
- **Signature**: `AdminTeamsSettingsSetDefaultChannels1(ContentType contentType, string token, string teamId, string channelIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team_id` ← `teamId`, `channel_ids` ← `channelIds`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDescription
- **HTTP**: `POST /admin.teams.settings.setDescription` (Default (slack))
- **Notes**: Set the description of a given workspace.
- **Signature**: `AdminTeamsSettingsSetDescription(string token, ContentType contentType, string teamId, string description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `description` ← `description`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDescription1
- **HTTP**: `POST /admin.teams.settings.setDescription` (Default (slack))
- **Notes**: Set the description of a given workspace.
- **Signature**: `AdminTeamsSettingsSetDescription1(string token, ContentType contentType, string teamId, string description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `description` ← `description`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDiscoverability
- **HTTP**: `POST /admin.teams.settings.setDiscoverability` (Default (slack))
- **Notes**: An API method that allows admins to set the discoverability of a given workspace
- **Signature**: `AdminTeamsSettingsSetDiscoverability(string token, ContentType contentType, string teamId, string discoverability, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `discoverability` ← `discoverability`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetDiscoverability1
- **HTTP**: `POST /admin.teams.settings.setDiscoverability` (Default (slack))
- **Notes**: An API method that allows admins to set the discoverability of a given workspace
- **Signature**: `AdminTeamsSettingsSetDiscoverability1(string token, ContentType contentType, string teamId, string discoverability, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `discoverability` ← `discoverability`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetIcon
- **HTTP**: `POST /admin.teams.settings.setIcon` (Default (slack))
- **Notes**: Sets the icon of a workspace.
- **Signature**: `AdminTeamsSettingsSetIcon(ContentType contentType, string token, string imageUrl, string teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `image_url` ← `imageUrl`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetIcon1
- **HTTP**: `POST /admin.teams.settings.setIcon` (Default (slack))
- **Notes**: Sets the icon of a workspace.
- **Signature**: `AdminTeamsSettingsSetIcon1(ContentType contentType, string token, string imageUrl, string teamId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `image_url` ← `imageUrl`, `team_id` ← `teamId`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetName
- **HTTP**: `POST /admin.teams.settings.setName` (Default (slack))
- **Notes**: Set the name of a given workspace.
- **Signature**: `AdminTeamsSettingsSetName(string token, ContentType contentType, string teamId, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `name` ← `name`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsSettingsSetName1
- **HTTP**: `POST /admin.teams.settings.setName` (Default (slack))
- **Notes**: Set the name of a given workspace.
- **Signature**: `AdminTeamsSettingsSetName1(string token, ContentType contentType, string teamId, string name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_id` ← `teamId`, `name` ← `name`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
