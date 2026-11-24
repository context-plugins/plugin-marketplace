<!-- Generated file — do not edit; regenerated with the SDK. -->

# Members — operations

Accessor: `client.Members` · Source: `src/Shortcut/Api/Members.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMember

- **Auth**: `options.ApiToken`
- **Signature**: `GetMember(GetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MemberPublicId`
- **Query params (wire ← C#)**: `org-public-id` ← `OrgPublicId`
- **Returns**: `Member`
- **Error**: `ApiException<GetMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMemberRequest` | `src/Shortcut/Requests/Members/GetMemberRequest.cs` |
| `Member` | `src/Shortcut/Models/Member.cs` |
| `GetMemberError` | `src/Shortcut/Errors/GetMemberError.cs` |

### ListMembers

- **Auth**: `options.ApiToken`
- **Signature**: `ListMembers(ListMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `org-public-id` ← `OrgPublicId`, `disabled` ← `Disabled`
- **Returns**: `IReadOnlyList<Member>`
- **Error**: `ApiException<ListMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMembersRequest` | `src/Shortcut/Requests/Members/ListMembersRequest.cs` |
| `Member` | `src/Shortcut/Models/Member.cs` |
| `ListMembersError` | `src/Shortcut/Errors/ListMembersError.cs` |

