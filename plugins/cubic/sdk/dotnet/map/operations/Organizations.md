<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.Organizations` · Source: `src/Cubic/Api/Organizations.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMember

- **Auth**: `options.AnalyticsApiKey`
- **Signature**: `GetMember(GetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `GithubUserId`
- **Returns**: `OrganizationMember`
- **Error**: `ApiException<GetMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMemberRequest` | `src/Cubic/Requests/Organizations/GetMemberRequest.cs` |
| `OrganizationMember` | `src/Cubic/Models/OrganizationMember.cs` |
| `GetMemberError` | `src/Cubic/Errors/GetMemberError.cs` |
| `Error` | `src/Cubic/Models/Error.cs` |

### ListMembers

- **Auth**: `options.AnalyticsApiKey`
- **Signature**: `ListMembers(ListMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`
- **Query params (wire ← C#)**: `search` ← `Search`, `role` ← `Role`, `seat` ← `Seat`, `cursor` ← `Cursor`, `limit` ← `Limit`
- **Returns**: `MemberList`
- **Error**: `ApiException<ListMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMembersRequest` | `src/Cubic/Requests/Organizations/ListMembersRequest.cs` |
| `Role` | `src/Cubic/Models/Enums/Role.cs` |
| `Seat` | `src/Cubic/Models/Enums/Seat.cs` |
| `MemberList` | `src/Cubic/Models/MemberList.cs` |
| `ListMembersError` | `src/Cubic/Errors/ListMembersError.cs` |
| `Error` | `src/Cubic/Models/Error.cs` |

### ListOrganizations

- **Auth**: `options.AnalyticsApiKey`
- **Signature**: `ListOrganizations(ListOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `limit` ← `Limit`
- **Returns**: `OrganizationList`
- **Error**: `ApiException<ListOrganizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListOrganizationsRequest` | `src/Cubic/Requests/Organizations/ListOrganizationsRequest.cs` |
| `OrganizationList` | `src/Cubic/Models/OrganizationList.cs` |
| `ListOrganizationsError` | `src/Cubic/Errors/ListOrganizationsError.cs` |
| `Error` | `src/Cubic/Models/Error.cs` |

### UpdateMember

- **Auth**: `options.AnalyticsApiKey`
- **Signature**: `UpdateMember(UpdateMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `GithubUserId`, `Body`
- **Returns**: `MemberUpdateResult`
- **Error**: `ApiException<UpdateMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 422, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMemberRequest` | `src/Cubic/Requests/Organizations/UpdateMemberRequest.cs` |
| `MemberUpdate` | `src/Cubic/Models/MemberUpdate.cs` |
| `MemberUpdateResult` | `src/Cubic/Models/MemberUpdateResult.cs` |
| `UpdateMemberError` | `src/Cubic/Errors/UpdateMemberError.cs` |
| `Error` | `src/Cubic/Models/Error.cs` |

