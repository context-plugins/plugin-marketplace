<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataConversion — operations

Accessor: `client.dataConversion` · Source: `src/resources/data-conversion.ts` · 33 operations · Request and error types: namespace `DataConversion`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### ascii85Encoder

- **Signature**: `ascii85Encoder(request: DataConversion.Ascii85EncoderRequest, options?: RequestOptions): ApiPromise<V1Ascii85EncoderResponse, DataConversion.Ascii85EncoderError>`
- **Wire**: `GET /v1/ascii85encoder`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1Ascii85EncoderResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.Ascii85EncoderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.Ascii85EncoderRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `text` | `query` | `string` | yes |
| `action` | `query` | `string` | no |
| `format` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1Ascii85EncoderResponse` | `v1Ascii85EncoderResponseSchema` | `src/models/v1-ascii85-encoder-response.ts` |

### base64

- **Signature**: `base64(request: DataConversion.Base64Request, options?: RequestOptions): ApiPromise<V1Base64Response, DataConversion.Base64Error>`
- **Wire**: `GET /v1/base64`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1Base64Response`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.Base64Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.Base64Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `text` | `query` | `string` | yes |
| `action` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1Base64Response` | `v1Base64ResponseSchema` | `src/models/v1-base64-response.ts` |

### colorconverter

- **Signature**: `colorconverter(request: DataConversion.ColorconverterRequest, options?: RequestOptions): ApiPromise<V1ColorconverterResponse, DataConversion.ColorconverterError>`
- **Wire**: `GET /v1/colorconverter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ColorconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.ColorconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.ColorconverterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `hex` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ColorconverterResponse` | `v1ColorconverterResponseSchema` | `src/models/v1-colorconverter-response.ts` |

### csvtojson

- **Signature**: `csvtojson(request: DataConversion.CsvtojsonRequest, options?: RequestOptions): ApiPromise<V1CsvtojsonResponse, DataConversion.CsvtojsonError>`
- **Wire**: `POST /v1/csvtojson`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1CsvtojsonResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.CsvtojsonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.CsvtojsonRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1CsvtojsonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CsvtojsonRequest` | `v1CsvtojsonRequestSchema` | `src/models/v1-csvtojson-request.ts` |
| `V1CsvtojsonResponse` | `v1CsvtojsonResponseSchema` | `src/models/v1-csvtojson-response.ts` |

### filesizeformatter

- **Signature**: `filesizeformatter(request: DataConversion.FilesizeformatterRequest, options?: RequestOptions): ApiPromise<V1FilesizeformatterResponse, DataConversion.FilesizeformatterError>`
- **Wire**: `GET /v1/filesizeformatter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1FilesizeformatterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.FilesizeformatterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.FilesizeformatterRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bytes` | `query` | `number` | yes |
| `unit` | `query` | `string` | no |
| `precision` | `query` | `number` | no |
| `standard` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FilesizeformatterResponse` | `v1FilesizeformatterResponseSchema` | `src/models/v1-filesizeformatter-response.ts` |

### htmlentities

- **Signature**: `htmlentities(request: DataConversion.HtmlentitiesRequest, options?: RequestOptions): ApiPromise<V1HtmlentitiesResponse, DataConversion.HtmlentitiesError>`
- **Wire**: `POST /v1/htmlentities`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1HtmlentitiesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.HtmlentitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.HtmlentitiesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1HtmlentitiesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HtmlentitiesRequest` | `v1HtmlentitiesRequestSchema` | `src/models/v1-htmlentities-request.ts` |
| `V1HtmlentitiesResponse` | `v1HtmlentitiesResponseSchema` | `src/models/v1-htmlentities-response.ts` |

### htmltoimage

- **Signature**: `htmltoimage(request: DataConversion.HtmltoimageRequest, options?: RequestOptions): ApiPromise<V1HtmltoimageResponse, DataConversion.HtmltoimageError>`
- **Wire**: `POST /v1/htmltoimage`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1HtmltoimageResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.HtmltoimageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.HtmltoimageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1HtmltoimageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HtmltoimageRequest` | `v1HtmltoimageRequestSchema` | `src/models/v1-htmltoimage-request.ts` |
| `V1HtmltoimageResponse` | `v1HtmltoimageResponseSchema` | `src/models/v1-htmltoimage-response.ts` |

### jsontocsv

- **Signature**: `jsontocsv(request: DataConversion.JsontocsvRequest, options?: RequestOptions): ApiPromise<V1JsontocsvResponse, DataConversion.JsontocsvError>`
- **Wire**: `POST /v1/jsontocsv`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1JsontocsvResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.JsontocsvError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.JsontocsvRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1JsontocsvRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1JsontocsvRequest` | `v1JsontocsvRequestSchema` | `src/models/v1-jsontocsv-request.ts` |
| `V1JsontocsvResponse` | `v1JsontocsvResponseSchema` | `src/models/v1-jsontocsv-response.ts` |

### jsontojsonp

- **Signature**: `jsontojsonp(request: DataConversion.JsontojsonpRequest, options?: RequestOptions): ApiPromise<V1JsontojsonpResponse, DataConversion.JsontojsonpError>`
- **Wire**: `POST /v1/jsontojsonp`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1JsontojsonpResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.JsontojsonpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.JsontojsonpRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1JsontojsonpRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1JsontojsonpRequest` | `v1JsontojsonpRequestSchema` | `src/models/v1-jsontojsonp-request.ts` |
| `V1JsontojsonpResponse` | `v1JsontojsonpResponseSchema` | `src/models/v1-jsontojsonp-response.ts` |

### jwtdecoder

- **Signature**: `jwtdecoder(request: DataConversion.JwtdecoderRequest, options?: RequestOptions): ApiPromise<V1JwtdecoderResponse, DataConversion.JwtdecoderError>`
- **Wire**: `POST /v1/jwtdecoder`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1JwtdecoderResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.JwtdecoderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.JwtdecoderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1JwtdecoderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1JwtdecoderRequest` | `v1JwtdecoderRequestSchema` | `src/models/v1-jwtdecoder-request.ts` |
| `V1JwtdecoderResponse` | `v1JwtdecoderResponseSchema` | `src/models/v1-jwtdecoder-response.ts` |

### markdowntable

- **Signature**: `markdowntable(request: DataConversion.MarkdowntableRequest, options?: RequestOptions): ApiPromise<V1MarkdowntableResponse, DataConversion.MarkdowntableError>`
- **Wire**: `POST /v1/markdowntable`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1MarkdowntableResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.MarkdowntableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.MarkdowntableRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MarkdowntableRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MarkdowntableRequest` | `v1MarkdowntableRequestSchema` | `src/models/v1-markdowntable-request.ts` |
| `V1MarkdowntableResponse` | `v1MarkdowntableResponseSchema` | `src/models/v1-markdowntable-response.ts` |

### markdowntohtml

- **Signature**: `markdowntohtml(request: DataConversion.MarkdowntohtmlRequest, options?: RequestOptions): ApiPromise<V1MarkdowntohtmlResponse, DataConversion.MarkdowntohtmlError>`
- **Wire**: `POST /v1/markdowntohtml`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1MarkdowntohtmlResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.MarkdowntohtmlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.MarkdowntohtmlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MarkdowntohtmlRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MarkdowntohtmlRequest` | `v1MarkdowntohtmlRequestSchema` | `src/models/v1-markdowntohtml-request.ts` |
| `V1MarkdowntohtmlResponse` | `v1MarkdowntohtmlResponseSchema` | `src/models/v1-markdowntohtml-response.ts` |

### markdowntoimage

- **Signature**: `markdowntoimage(request: DataConversion.MarkdowntoimageRequest, options?: RequestOptions): ApiPromise<V1MarkdowntoimageResponse, DataConversion.MarkdowntoimageError>`
- **Wire**: `POST /v1/markdowntoimage`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1MarkdowntoimageResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.MarkdowntoimageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.MarkdowntoimageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MarkdowntoimageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MarkdowntoimageRequest` | `v1MarkdowntoimageRequestSchema` | `src/models/v1-markdowntoimage-request.ts` |
| `V1MarkdowntoimageResponse` | `v1MarkdowntoimageResponseSchema` | `src/models/v1-markdowntoimage-response.ts` |

### markdowntopdf

- **Signature**: `markdowntopdf(request: DataConversion.MarkdowntopdfRequest, options?: RequestOptions): ApiPromise<V1MarkdowntopdfResponse, DataConversion.MarkdowntopdfError>`
- **Wire**: `POST /v1/markdowntopdf`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1MarkdowntopdfResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.MarkdowntopdfError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.MarkdowntopdfRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MarkdowntopdfRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MarkdowntopdfRequest` | `v1MarkdowntopdfRequestSchema` | `src/models/v1-markdowntopdf-request.ts` |
| `V1MarkdowntopdfResponse` | `v1MarkdowntopdfResponseSchema` | `src/models/v1-markdowntopdf-response.ts` |

### math

- **Signature**: `math(request: DataConversion.MathRequest, options?: RequestOptions): ApiPromise<V1MathResponse, DataConversion.MathError>`
- **Wire**: `POST /v1/math`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1MathResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.MathError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.MathRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MathRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MathRequest` | `v1MathRequestSchema` | `src/models/v1-math-request.ts` |
| `V1MathResponse` | `v1MathResponseSchema` | `src/models/v1-math-response.ts` |

### meetingtimeconverter

- **Signature**: `meetingtimeconverter(request: DataConversion.MeetingtimeconverterRequest, options?: RequestOptions): ApiPromise<V1MeetingtimeconverterResponse, DataConversion.MeetingtimeconverterError>`
- **Wire**: `GET /v1/meetingtimeconverter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MeetingtimeconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.MeetingtimeconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.MeetingtimeconverterRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `time` | `query` | `string` | yes |
| `fromTimezone` | `query` | `string` | yes |
| `toTimezone` | `query` | `string` | yes |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MeetingtimeconverterResponse` | `v1MeetingtimeconverterResponseSchema` | `src/models/v1-meetingtimeconverter-response.ts` |

### numberbaseconverter

- **Signature**: `numberbaseconverter(request: DataConversion.NumberbaseconverterRequest, options?: RequestOptions): ApiPromise<V1NumberbaseconverterResponse, DataConversion.NumberbaseconverterError>`
- **Wire**: `GET /v1/numberbaseconverter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1NumberbaseconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.NumberbaseconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.NumberbaseconverterRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `value` | `query` | `string` | yes |
| `from` | `query` | `number` | no |
| `to` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1NumberbaseconverterResponse` | `v1NumberbaseconverterResponseSchema` | `src/models/v1-numberbaseconverter-response.ts` |

### numbertowords

- **Signature**: `numbertowords(request: DataConversion.NumbertowordsRequest, options?: RequestOptions): ApiPromise<V1NumbertowordsResponse, DataConversion.NumbertowordsError>`
- **Wire**: `GET /v1/numbertowords`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1NumbertowordsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.NumbertowordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.NumbertowordsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `number` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1NumbertowordsResponse` | `v1NumbertowordsResponseSchema` | `src/models/v1-numbertowords-response.ts` |

### placeholdertext

- **Signature**: `placeholdertext(request?: DataConversion.PlaceholdertextRequest, options?: RequestOptions): ApiPromise<V1PlaceholdertextResponse, DataConversion.PlaceholdertextError>`
- **Wire**: `GET /v1/placeholdertext`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PlaceholdertextResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.PlaceholdertextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.PlaceholdertextRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `style` | `query` | `string` | no |
| `paragraphs` | `query` | `number` | no |
| `sentences` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PlaceholdertextResponse` | `v1PlaceholdertextResponseSchema` | `src/models/v1-placeholdertext-response.ts` |

### punycode

- **Signature**: `punycode(request: DataConversion.PunycodeRequest, options?: RequestOptions): ApiPromise<V1PunycodeResponse, DataConversion.PunycodeError>`
- **Wire**: `GET /v1/punycode`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PunycodeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.PunycodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.PunycodeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `text` | `query` | `string` | yes |
| `mode` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PunycodeResponse` | `v1PunycodeResponseSchema` | `src/models/v1-punycode-response.ts` |

### querystringbuilder

- **Signature**: `querystringbuilder(request: DataConversion.QuerystringbuilderRequest, options?: RequestOptions): ApiPromise<V1QuerystringbuilderResponse, DataConversion.QuerystringbuilderError>`
- **Wire**: `POST /v1/querystringbuilder`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1QuerystringbuilderResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.QuerystringbuilderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.QuerystringbuilderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1QuerystringbuilderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1QuerystringbuilderRequest` | `v1QuerystringbuilderRequestSchema` | `src/models/v1-querystringbuilder-request.ts` |
| `V1QuerystringbuilderResponse` | `v1QuerystringbuilderResponseSchema` | `src/models/v1-querystringbuilder-response.ts` |

### relativetimeformatter

- **Signature**: `relativetimeformatter(request: DataConversion.RelativetimeformatterRequest, options?: RequestOptions): ApiPromise<V1RelativetimeformatterResponse, DataConversion.RelativetimeformatterError>`
- **Wire**: `GET /v1/relativetimeformatter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RelativetimeformatterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.RelativetimeformatterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.RelativetimeformatterRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `string` | yes |
| `reference` | `query` | `string` | no |
| `style` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RelativetimeformatterResponse` | `v1RelativetimeformatterResponseSchema` | `src/models/v1-relativetimeformatter-response.ts` |

### romanconverter

- **Signature**: `romanconverter(request: DataConversion.RomanconverterRequest, options?: RequestOptions): ApiPromise<V1RomanconverterResponse, DataConversion.RomanconverterError>`
- **Wire**: `GET /v1/romanconverter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RomanconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.RomanconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.RomanconverterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `number` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RomanconverterResponse` | `v1RomanconverterResponseSchema` | `src/models/v1-romanconverter-response.ts` |

### texttocolor

- **Signature**: `texttocolor(request: DataConversion.TexttocolorRequest, options?: RequestOptions): ApiPromise<V1TexttocolorResponse, DataConversion.TexttocolorError>`
- **Wire**: `GET /v1/texttocolor`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TexttocolorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.TexttocolorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.TexttocolorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `color` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TexttocolorResponse` | `v1TexttocolorResponseSchema` | `src/models/v1-texttocolor-response.ts` |

### unicodeescape

- **Signature**: `unicodeescape(request: DataConversion.UnicodeescapeRequest, options?: RequestOptions): ApiPromise<V1UnicodeescapeResponse, DataConversion.UnicodeescapeError>`
- **Wire**: `POST /v1/unicodeescape`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1UnicodeescapeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.UnicodeescapeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.UnicodeescapeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1UnicodeescapeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UnicodeescapeRequest` | `v1UnicodeescapeRequestSchema` | `src/models/v1-unicodeescape-request.ts` |
| `V1UnicodeescapeResponse` | `v1UnicodeescapeResponseSchema` | `src/models/v1-unicodeescape-response.ts` |

### unitconverter

- **Signature**: `unitconverter(request: DataConversion.UnitconverterRequest, options?: RequestOptions): ApiPromise<V1UnitconverterResponse, DataConversion.UnitconverterError>`
- **Wire**: `GET /v1/unitconverter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UnitconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.UnitconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.UnitconverterRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `value` | `query` | `number` | yes |
| `from` | `query` | `string` | yes |
| `to` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UnitconverterResponse` | `v1UnitconverterResponseSchema` | `src/models/v1-unitconverter-response.ts` |

### unixtimestamp

- **Signature**: `unixtimestamp(request: DataConversion.UnixtimestampRequest, options?: RequestOptions): ApiPromise<V1UnixtimestampResponse, DataConversion.UnixtimestampError>`
- **Wire**: `GET /v1/unixtimestamp`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UnixtimestampResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.UnixtimestampError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.UnixtimestampRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `timestamp` | `query` | `string` | yes |
| `format` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UnixtimestampResponse` | `v1UnixtimestampResponseSchema` | `src/models/v1-unixtimestamp-response.ts` |

### urlencode

- **Signature**: `urlencode(request: DataConversion.UrlencodeRequest, options?: RequestOptions): ApiPromise<V1UrlencodeResponse, DataConversion.UrlencodeError>`
- **Wire**: `POST /v1/urlencode`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1UrlencodeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.UrlencodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.UrlencodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1UrlencodeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UrlencodeRequest` | `v1UrlencodeRequestSchema` | `src/models/v1-urlencode-request.ts` |
| `V1UrlencodeResponse` | `v1UrlencodeResponseSchema` | `src/models/v1-urlencode-response.ts` |

### urltomarkdown

- **Signature**: `urltomarkdown(request: DataConversion.UrltomarkdownRequest, options?: RequestOptions): ApiPromise<V1UrltomarkdownResponse, DataConversion.UrltomarkdownError>`
- **Wire**: `POST /v1/urltomarkdown`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1UrltomarkdownResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.UrltomarkdownError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.UrltomarkdownRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1UrltomarkdownRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UrltomarkdownRequest` | `v1UrltomarkdownRequestSchema` | `src/models/v1-urltomarkdown-request.ts` |
| `V1UrltomarkdownResponse` | `v1UrltomarkdownResponseSchema` | `src/models/v1-urltomarkdown-response.ts` |

### variablenameconverter

- **Signature**: `variablenameconverter(request: DataConversion.VariablenameconverterRequest, options?: RequestOptions): ApiPromise<V1VariablenameconverterResponse, DataConversion.VariablenameconverterError>`
- **Wire**: `POST /v1/variablenameconverter`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1VariablenameconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.VariablenameconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.VariablenameconverterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1VariablenameconverterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1VariablenameconverterRequest` | `v1VariablenameconverterRequestSchema` | `src/models/v1-variablenameconverter-request.ts` |
| `V1VariablenameconverterResponse` | `v1VariablenameconverterResponseSchema` | `src/models/v1-variablenameconverter-response.ts` |

### websitetotext

- **Signature**: `websitetotext(request: DataConversion.WebsitetotextRequest, options?: RequestOptions): ApiPromise<V1WebsitetotextResponse, DataConversion.WebsitetotextError>`
- **Wire**: `POST /v1/websitetotext`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WebsitetotextResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.WebsitetotextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.WebsitetotextRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1WebsitetotextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebsitetotextRequest` | `v1WebsitetotextRequestSchema` | `src/models/v1-websitetotext-request.ts` |
| `V1WebsitetotextResponse` | `v1WebsitetotextResponseSchema` | `src/models/v1-websitetotext-response.ts` |

### wordstonumbers

- **Signature**: `wordstonumbers(request: DataConversion.WordstonumbersRequest, options?: RequestOptions): ApiPromise<V1WordstonumbersResponse, DataConversion.WordstonumbersError>`
- **Wire**: `GET /v1/wordstonumbers`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WordstonumbersResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.WordstonumbersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.WordstonumbersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `words` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WordstonumbersResponse` | `v1WordstonumbersResponseSchema` | `src/models/v1-wordstonumbers-response.ts` |

### xmltojson

- **Signature**: `xmltojson(request: DataConversion.XmltojsonRequest, options?: RequestOptions): ApiPromise<V1XmltojsonResponse, DataConversion.XmltojsonError>`
- **Wire**: `POST /v1/xmltojson`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1XmltojsonResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataConversion.XmltojsonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataConversion.XmltojsonRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1XmltojsonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1XmltojsonRequest` | `v1XmltojsonRequestSchema` | `src/models/v1-xmltojson-request.ts` |
| `V1XmltojsonResponse` | `v1XmltojsonResponseSchema` | `src/models/v1-xmltojson-response.ts` |

