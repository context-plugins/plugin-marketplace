<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserAttributes — operations

Accessor: `client.userAttributes` · Source: `src/resources/user-attributes.ts` · 2 operations · Request and error types: namespace `UserAttributes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### mergeUserAttributes

- **Server**: `defaultContentstackEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `mergeUserAttributes(request: UserAttributes.MergeUserAttributesRequestParams, options?: RequestOptions): ApiPromise<undefined, UserAttributes.MergeUserAttributesError>`
- **Wire**: `POST /user-attributes/actions/merge`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `UserAttributes.MergeUserAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [400] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [403] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserAttributes.MergeUserAttributesRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `body` | `body` | — | `MergeUserAttributesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MergeUserAttributesRequest` | `mergeUserAttributesRequestSchema` | `src/models/merge-user-attributes-request.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### setUserAttributes

- **Server**: `defaultContentstackEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `setUserAttributes(request: UserAttributes.SetUserAttributesRequest, options?: RequestOptions): ApiPromise<undefined, UserAttributes.SetUserAttributesError>`
- **Wire**: `PATCH /user-attributes`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `UserAttributes.SetUserAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [400] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [403] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserAttributes.SetUserAttributesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `xCsPersonalizeUserUid` | `header` | `x-cs-personalize-user-uid` | `string` | no |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

