<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReferenceData — operations

Accessor: `client.referenceData` · Source: `src/resources/reference-data.ts` · 11 operations · Request and error types: namespace `ReferenceData`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### birthstones

- **Signature**: `birthstones(request: ReferenceData.BirthstonesRequest, options?: RequestOptions): ApiPromise<V1BirthstonesResponse, ReferenceData.BirthstonesError>`
- **Wire**: `GET /v1/birthstones`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BirthstonesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.BirthstonesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.BirthstonesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `month` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BirthstonesResponse` | `v1BirthstonesResponseSchema` | `src/models/v1-birthstones-response.ts` |

### caaparser

- **Signature**: `caaparser(request: ReferenceData.CaaparserRequest, options?: RequestOptions): ApiPromise<V1CaaparserResponse, ReferenceData.CaaparserError>`
- **Wire**: `POST /v1/caaparser`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1CaaparserResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.CaaparserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.CaaparserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1CaaparserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CaaparserRequest` | `v1CaaparserRequestSchema` | `src/models/v1-caaparser-request.ts` |
| `V1CaaparserResponse` | `v1CaaparserResponseSchema` | `src/models/v1-caaparser-response.ts` |

### colorbrightness

- **Signature**: `colorbrightness(request: ReferenceData.ColorbrightnessRequest, options?: RequestOptions): ApiPromise<V1ColorbrightnessResponse, ReferenceData.ColorbrightnessError>`
- **Wire**: `GET /v1/colorbrightness`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ColorbrightnessResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.ColorbrightnessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.ColorbrightnessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `hex` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ColorbrightnessResponse` | `v1ColorbrightnessResponseSchema` | `src/models/v1-colorbrightness-response.ts` |

### colornamefinder

- **Signature**: `colornamefinder(request: ReferenceData.ColornamefinderRequest, options?: RequestOptions): ApiPromise<V1ColornamefinderResponse, ReferenceData.ColornamefinderError>`
- **Wire**: `GET /v1/colornamefinder`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ColornamefinderResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.ColornamefinderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.ColornamefinderRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `hex` | `query` | `string` | yes |
| `closest` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ColornamefinderResponse` | `v1ColornamefinderResponseSchema` | `src/models/v1-colornamefinder-response.ts` |

### httpstatuslookup

- **Signature**: `httpstatuslookup(request: ReferenceData.HttpstatuslookupRequest, options?: RequestOptions): ApiPromise<V1HttpstatuslookupResponse, ReferenceData.HttpstatuslookupError>`
- **Wire**: `GET /v1/httpstatuslookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1HttpstatuslookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.HttpstatuslookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.HttpstatuslookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `code` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HttpstatuslookupResponse` | `v1HttpstatuslookupResponseSchema` | `src/models/v1-httpstatuslookup-response.ts` |

### mayancalendar

- **Signature**: `mayancalendar(request: ReferenceData.MayancalendarRequest, options?: RequestOptions): ApiPromise<V1MayancalendarResponse, ReferenceData.MayancalendarError>`
- **Wire**: `GET /v1/mayancalendar`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MayancalendarResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.MayancalendarError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.MayancalendarRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MayancalendarResponse` | `v1MayancalendarResponseSchema` | `src/models/v1-mayancalendar-response.ts` |

### mimetypelookup

- **Signature**: `mimetypelookup(request: ReferenceData.MimetypelookupRequest, options?: RequestOptions): ApiPromise<V1MimetypelookupResponse, ReferenceData.MimetypelookupError>`
- **Wire**: `GET /v1/mimetypelookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MimetypelookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.MimetypelookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.MimetypelookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `extension` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MimetypelookupResponse` | `v1MimetypelookupResponseSchema` | `src/models/v1-mimetypelookup-response.ts` |

### portnumberlookup

- **Signature**: `portnumberlookup(request: ReferenceData.PortnumberlookupRequest, options?: RequestOptions): ApiPromise<V1PortnumberlookupResponse, ReferenceData.PortnumberlookupError>`
- **Wire**: `GET /v1/portnumberlookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PortnumberlookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.PortnumberlookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.PortnumberlookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `port` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PortnumberlookupResponse` | `v1PortnumberlookupResponseSchema` | `src/models/v1-portnumberlookup-response.ts` |

### ringsizeconverter

- **Signature**: `ringsizeconverter(request: ReferenceData.RingsizeconverterRequest, options?: RequestOptions): ApiPromise<V1RingsizeconverterResponse, ReferenceData.RingsizeconverterError>`
- **Wire**: `GET /v1/ringsizeconverter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RingsizeconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.RingsizeconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.RingsizeconverterRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `size` | `query` | `string` | yes |
| `from` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RingsizeconverterResponse` | `v1RingsizeconverterResponseSchema` | `src/models/v1-ringsizeconverter-response.ts` |

### shoesizeconverter

- **Signature**: `shoesizeconverter(request: ReferenceData.ShoesizeconverterRequest, options?: RequestOptions): ApiPromise<V1ShoesizeconverterResponse, ReferenceData.ShoesizeconverterError>`
- **Wire**: `GET /v1/shoesizeconverter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ShoesizeconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.ShoesizeconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.ShoesizeconverterRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `size` | `query` | `string` | yes |
| `from` | `query` | `string` | yes |
| `gender` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ShoesizeconverterResponse` | `v1ShoesizeconverterResponseSchema` | `src/models/v1-shoesizeconverter-response.ts` |

### srvparser

- **Signature**: `srvparser(request: ReferenceData.SrvparserRequest, options?: RequestOptions): ApiPromise<V1SrvparserResponse, ReferenceData.SrvparserError>`
- **Wire**: `POST /v1/srvparser`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SrvparserResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `ReferenceData.SrvparserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReferenceData.SrvparserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SrvparserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SrvparserRequest` | `v1SrvparserRequestSchema` | `src/models/v1-srvparser-request.ts` |
| `V1SrvparserResponse` | `v1SrvparserResponseSchema` | `src/models/v1-srvparser-response.ts` |

