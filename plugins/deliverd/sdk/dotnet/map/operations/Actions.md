<!-- Generated file — do not edit; regenerated with the SDK. -->

# Actions — operations

Accessor: `client.Actions` · Source: `src/Deliverd/Api/Actions.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Actions

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Actions(GetApiV1ActionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1ActionsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ActionsRequest` | `src/Deliverd/Requests/Actions/GetApiV1ActionsRequest.cs` |
| `ApiV1ActionsResponse1` | `src/Deliverd/Models/ApiV1ActionsResponse1.cs` |

### PostApiV1Actions

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Actions(PostApiV1ActionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ActionsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1ActionsRequest` | `src/Deliverd/Requests/Actions/PostApiV1ActionsRequest.cs` |
| `ApiV1ActionsRequest` | `src/Deliverd/Models/ApiV1ActionsRequest.cs` |
| `ApiV1ActionsResponse` | `src/Deliverd/Models/ApiV1ActionsResponse.cs` |

