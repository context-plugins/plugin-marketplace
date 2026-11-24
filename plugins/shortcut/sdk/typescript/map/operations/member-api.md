<!-- Generated file — do not edit; regenerated with the SDK. -->

# MemberApi — operations

Accessor: `client.memberApi` · Source: `src/resources/member-api.ts` · 1 operation · Request and error types: namespace `MemberApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCurrentMemberInfo

- **Signature**: `getCurrentMemberInfo(options?: RequestOptions): ApiPromise<MemberInfo, MemberApi.GetCurrentMemberInfoError>`
- **Wire**: `GET /api/v3/member`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MemberInfo`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `MemberApi.GetCurrentMemberInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `MemberInfo` | `memberInfoSchema` | `src/models/member-info.ts` |

