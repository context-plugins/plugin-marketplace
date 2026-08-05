# TeamsEssentials — operations

Accessor: `client.TeamsEssentials` · Source: `Api/TeamsEssentials.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BackfillTeamCustomMetadata
- **HTTP**: `POST /teams/{user_id}/custom_metadata/backfill` (Default (api))
- **Notes**: This method applies a custom metadata value across every existing video owned by the team. Use it to populate a newly created field, fix a typo across a library, or align a large catalog after a workflow change. The backfill runs asynchronously . The response is returned as soon as the job is accepted, but the values themselves are propagated in the background and may take several minutes for large libraries. The `total_videos` count in the response is a snapshot of how many videos match the request at the moment it's accepted; videos uploaded after that point aren't included and need a separate backfill. By default, only videos that don't already have a value for the field are updated. Set `override_existing` to `true` to replace existing values as well. The value provided must match the field's data type. For example, a `date` field requires `YYYY-MM-DD`, a `select` field requires one of its allowed values, and a `multi-select` field requires a JSON-encoded array of allowed values.
- **Signature**: `BackfillTeamCustomMetadata(double userId, TeamsCustomMetadataBackfillRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<BackfillTeamCustomMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetLegacyError(out LegacyError)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTeamCustomMetadataIncompleteVideos
- **HTTP**: `GET /teams/{user_id}/custom_metadata/incomplete_videos` (Default (api))
- **Notes**: This method returns the team's videos that are missing one or more values for mandatory custom metadata fields. Use it to power dashboards that surface incomplete videos, drive curation workflows, or generate reports of catalog completeness. Each item in the response includes the video's title and identifier, a link to the video's management page, a thumbnail, the last modified timestamp, and the list of mandatory fields that still need a value (each with its `field_id` and `name`). Only fields marked `mandatory: true` (see `POST /teams/{user_id}/custom_metadata`) are considered. Teams with no mandatory fields receive an empty result set.
- **Signature**: `GetTeamCustomMetadataIncompleteVideos(double userId, double? page, double? perPage, Sort48? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetTeamCustomMetadataIncompleteVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetLegacyError(out LegacyError)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetTeamCustomMetadataSettings
- **HTTP**: `GET /teams/{user_id}/custom_metadata` (Default (api))
- **Notes**: This method returns every custom metadata field defined for the specified team. Custom metadata fields let teams attach structured, queryable information to videos (for example, a department selector, a release date, or a freeform note). Once a field is defined here, you can assign per-video values via `PUT /videos/{video_id}/custom_metadata`. The response contains the field definitions only; per-video values are returned by the video endpoints. Use this method to populate a UI that lets users fill in metadata, or to discover the field IDs you need for backfills and value updates.
- **Signature**: `GetTeamCustomMetadataSettings(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CustomMetadataSettingsConnection`
- **Error**: `SdkException<GetTeamCustomMetadataSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [401, 403] · `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCustomMetadataFieldOptions
- **HTTP**: `PATCH /teams/{user_id}/custom_metadata/options` (Default (api))
- **Notes**: This method modifies the allowed value list of a `select` or `multi-select` custom metadata field. Use it to rename an option, remove an option, or add a new option without recreating the field. Each entry in the `options` array describes one atomic change, defined by combining `old_value` and `new_value`: | `old_value` | `new_value` | Operation | | --------------- | --------------- | ------------------------------ | | string | string | Rename `old_value` to `new_value` | | string | `null` / omitted | Delete `old_value` from the field | | `null` / omitted | string | Add `new_value` to the field | Renames are propagated to every existing video that uses the option, so the change is visible across the team's library. Deletes also remove the option from every video that had it set. Propagation runs in the background; the field's option list itself is updated synchronously and returned in the response. A few rules to be aware of: - The field must be of type `select` or `multi-select`. Other types reject the request. - Cascading renames (renaming `A` to `B`, then `B` to `C` in the same call) are not allowed; submit them as separate requests if you need that effect. - The resulting option list must not contain duplicates.
- **Signature**: `UpdateCustomMetadataFieldOptions(double userId, TeamsCustomMetadataOptionsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CustomMetadataSettings`
- **Error**: `SdkException<UpdateCustomMetadataFieldOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetLegacyError(out LegacyError)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpsertCustomMetadataSettings
- **HTTP**: `POST /teams/{user_id}/custom_metadata` (Default (api))
- **Notes**: This method creates, updates, or deletes custom metadata fields for a team in a single request. Each entry in the `fields` array is treated independently: - To create a new field, omit `id` and provide `name`, `type`, and `mandatory`. - To update an existing field, provide `id` along with the values you want to change. Other values are left untouched. - To delete an existing field, provide `id` and set `delete: true`. Deleting a field also removes every value assigned to it across the team's videos. Some constraints are worth knowing up front: - A team can have a maximum of 20 custom metadata fields. Requests that would exceed that limit after deletes are applied are rejected. - The `type` of an existing field can't be changed once the field is created. - A field that was created as optional can't be made `mandatory` later. - All operations in the request are applied as a single batch; if any one fails the whole request is rejected and no changes are saved.
- **Signature**: `UpsertCustomMetadataSettings(double userId, TeamsCustomMetadataRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<CustomMetadataSettings>`
- **Error**: `SdkException<UpsertCustomMetadataSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetLegacyError(out LegacyError)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
