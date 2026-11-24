<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManifestApi — operations

Accessor: `client.manifestApi` · Source: `src/resources/manifest-api.ts` · 1 operation · Request and error types: namespace `ManifestApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getManifest

- **Server**: `defaultContentstackEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getManifest(request: ManifestApi.GetManifestRequest, options?: RequestOptions): ApiPromise<Manifest, ManifestApi.GetManifestError>`
- **Wire**: `GET /manifest`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Manifest`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ManifestApi.GetManifestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [400] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [403] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManifestApi.GetManifestRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `xCsPersonalizeUserUid` | `header` | `x-cs-personalize-user-uid` | `string` | no |
| `xForwardedFor` | `header` | `x-forwarded-for` | `string` | no |
| `userAgent` | `header` | `user-agent` | `string` | no |
| `referer` | `header` | — | `string` | no |
| `xPageUrl` | `header` | `x-page-url` | `string` | no |
| `xLiveAttributes` | `header` | `x-live-attributes` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Manifest` | `manifestSchema` | `src/models/manifest.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

