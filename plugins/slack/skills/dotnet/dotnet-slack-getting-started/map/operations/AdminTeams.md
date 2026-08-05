# AdminTeams — operations

Accessor: `client.AdminTeams` · Source: `Api/AdminTeams.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdminTeamsCreate
- **HTTP**: `POST /admin.teams.create` (Default (slack))
- **Notes**: Create an Enterprise team.
- **Signature**: `AdminTeamsCreate(string token, ContentType contentType, string teamDomain, string teamName, string? teamDescription, string? teamDiscoverability, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamDescription` — nullable, no default → **must pass explicitly**
  - `teamDiscoverability` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_domain` ← `teamDomain`, `team_name` ← `teamName`, `team_description` ← `teamDescription`, `team_discoverability` ← `teamDiscoverability`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsCreate1
- **HTTP**: `POST /admin.teams.create` (Default (slack))
- **Notes**: Create an Enterprise team.
- **Signature**: `AdminTeamsCreate1(string token, ContentType contentType, string teamDomain, string teamName, string? teamDescription, string? teamDiscoverability, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `teamDescription` — nullable, no default → **must pass explicitly**
  - `teamDiscoverability` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `team_domain` ← `teamDomain`, `team_name` ← `teamName`, `team_description` ← `teamDescription`, `team_discoverability` ← `teamDiscoverability`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsList
- **HTTP**: `GET /admin.teams.list` (Default (slack))
- **Notes**: List all teams on an Enterprise organization
- **Signature**: `AdminTeamsList(int? limit, string? cursor, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AdminTeamsList1
- **HTTP**: `GET /admin.teams.list` (Default (slack))
- **Notes**: List all teams on an Enterprise organization
- **Signature**: `AdminTeamsList1(int? limit, string? cursor, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
