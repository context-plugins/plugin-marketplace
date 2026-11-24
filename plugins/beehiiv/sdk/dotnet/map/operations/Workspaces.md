<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.Workspaces` · Source: `src/Beehiiv/Api/Workspaces.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Identify2

- **Signature**: `Identify2(Identify2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `WorkspaceIdentifyResponse`
- **Error**: `ApiException<Identify2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Identify2Request` | `src/Beehiiv/Requests/Workspaces/Identify2Request.cs` |
| `WorkspaceIdentifyResponse` | `src/Beehiiv/Models/WorkspaceIdentifyResponse.cs` |
| `Identify2Error` | `src/Beehiiv/Errors/Identify2Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Permissions

- **Signature**: `Permissions(PermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `WorkspacePermissionsResponse`
- **Error**: `ApiException<PermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PermissionsRequest` | `src/Beehiiv/Requests/Workspaces/PermissionsRequest.cs` |
| `WorkspacePermissionsResponse` | `src/Beehiiv/Models/WorkspacePermissionsResponse.cs` |
| `PermissionsError` | `src/Beehiiv/Errors/PermissionsError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### PublicationsBySubscriptionEmail

- **Signature**: `PublicationsBySubscriptionEmail(PublicationsBySubscriptionEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Email`, `Authorization`
- **Query params (wire ← C#)**: `expand` ← `Expand`
- **Returns**: `IReadOnlyList<PublicationsBySubscriptionEmailResponseItem>`
- **Error**: `ApiException<PublicationsBySubscriptionEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublicationsBySubscriptionEmailRequest` | `src/Beehiiv/Requests/Workspaces/PublicationsBySubscriptionEmailRequest.cs` |
| `PublicationsBySubscriptionEmailRequestExpandItem` | `src/Beehiiv/Models/Enums/PublicationsBySubscriptionEmailRequestExpandItem.cs` |
| `PublicationsBySubscriptionEmailResponseItem` | `src/Beehiiv/Models/PublicationsBySubscriptionEmailResponseItem.cs` |
| `PublicationsBySubscriptionEmailError` | `src/Beehiiv/Errors/PublicationsBySubscriptionEmailError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

