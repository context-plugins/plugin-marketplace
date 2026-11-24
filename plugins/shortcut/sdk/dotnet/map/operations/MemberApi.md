<!-- Generated file — do not edit; regenerated with the SDK. -->

# MemberApi — operations

Accessor: `client.MemberApi` · Source: `src/Shortcut/Api/MemberApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCurrentMemberInfo

- **Auth**: `options.ApiToken`
- **Signature**: `GetCurrentMemberInfo(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `MemberInfo`
- **Error**: `ApiException<GetCurrentMemberInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MemberInfo` | `src/Shortcut/Models/MemberInfo.cs` |
| `GetCurrentMemberInfoError` | `src/Shortcut/Errors/GetCurrentMemberInfoError.cs` |

