<!-- Generated file — do not edit; regenerated with the SDK. -->

# Images — operations

Accessor: `client.images` · Source: `src/resources/images.ts` · 1 operation · Request and error types: namespace `Images`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cars-xe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVehicleImages

- **Signature**: `getVehicleImages(request: Images.GetVehicleImagesRequest, options?: RequestOptions): ApiPromise<ImagesResponse, Images.GetVehicleImagesError>`
- **Wire**: `GET /images`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImagesResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Images.GetVehicleImagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Images.GetVehicleImagesRequest` (11):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `make` | `query` | `string` | yes | — |
| `model` | `query` | `string` | yes | — |
| `year` | `query` | `string` | no | — |
| `trim` | `query` | `string` | no | — |
| `color` | `query` | `string` | no | — |
| `transparent` | `query` | `boolean` | no | — |
| `angle` | `query` | `Angle` | no | — |
| `photoType` | `query` | `PhotoType` | no | — |
| `size` | `query` | `Size` | no | — |
| `license` | `query` | `License` | no | — |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Angle` | `angleSchema` | `src/models/angle.ts` |
| `PhotoType` | `photoTypeSchema` | `src/models/photo-type.ts` |
| `Size` | `sizeSchema` | `src/models/size.ts` |
| `License` | `licenseSchema` | `src/models/license.ts` |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ImagesResponse` | `imagesResponseSchema` | `src/models/images-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

