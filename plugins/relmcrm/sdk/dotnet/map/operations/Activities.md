<!-- Generated file — do not edit; regenerated with the SDK. -->

# Activities — operations

Accessor: `client.Activities` · Source: `src/RelmCrm/Api/Activities.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateActivity

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateActivity(CreateActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Activity`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateActivityRequest` | `src/RelmCrm/Requests/Activities/CreateActivityRequest.cs` |
| `ActivityInput` | `src/RelmCrm/Models/ActivityInput.cs` |
| `Activity` | `src/RelmCrm/Models/Activity.cs` |

### DeleteActivity

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeleteActivity(DeleteActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deleted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteActivityRequest` | `src/RelmCrm/Requests/Activities/DeleteActivityRequest.cs` |
| `Deleted` | `src/RelmCrm/Models/Deleted.cs` |

### GetActivity

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetActivity(GetActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Activity`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetActivityRequest` | `src/RelmCrm/Requests/Activities/GetActivityRequest.cs` |
| `Activity` | `src/RelmCrm/Models/Activity.cs` |

### ListActivities

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListActivities(ListActivitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `include_deleted` ← `IncludeDeleted`, `contact_id` ← `ContactId`, `deal_id` ← `DealId`, `type` ← `Type`
- **Returns**: `ActivityList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListActivitiesRequest` | `src/RelmCrm/Requests/Activities/ListActivitiesRequest.cs` |
| `ActivityList` | `src/RelmCrm/Models/ActivityList.cs` |

### RestoreActivity

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `RestoreActivity(RestoreActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Activity`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RestoreActivityRequest` | `src/RelmCrm/Requests/Activities/RestoreActivityRequest.cs` |
| `Activity` | `src/RelmCrm/Models/Activity.cs` |

### UpdateActivity

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `UpdateActivity(UpdateActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Activity`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateActivityRequest` | `src/RelmCrm/Requests/Activities/UpdateActivityRequest.cs` |
| `ActivityInput` | `src/RelmCrm/Models/ActivityInput.cs` |
| `Activity` | `src/RelmCrm/Models/Activity.cs` |

