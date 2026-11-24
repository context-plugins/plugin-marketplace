<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataGeneration — operations

Accessor: `client.dataGeneration` · Source: `src/resources/data-generation.ts` · 32 operations · Request and error types: namespace `DataGeneration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acronymgenerator

- **Signature**: `acronymgenerator(request: DataGeneration.AcronymgeneratorRequest, options?: RequestOptions): ApiPromise<V1AcronymgeneratorResponse, DataGeneration.AcronymgeneratorError>`
- **Wire**: `GET /v1/acronymgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AcronymgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.AcronymgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.AcronymgeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `text` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AcronymgeneratorResponse` | `v1AcronymgeneratorResponseSchema` | `src/models/v1-acronymgenerator-response.ts` |

### babynamegenerator

- **Signature**: `babynamegenerator(request: DataGeneration.BabynamegeneratorRequest, options?: RequestOptions): ApiPromise<V1BabynamegeneratorResponse, DataGeneration.BabynamegeneratorError>`
- **Wire**: `GET /v1/babynamegenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BabynamegeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.BabynamegeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.BabynamegeneratorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `gender` | `query` | `string` | yes |
| `count` | `query` | `number` | no |
| `includeAvatar` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BabynamegeneratorResponse` | `v1BabynamegeneratorResponseSchema` | `src/models/v1-babynamegenerator-response.ts` |

### barcodegenerator

- **Signature**: `barcodegenerator(request: DataGeneration.BarcodegeneratorRequest, options?: RequestOptions): ApiPromise<V1BarcodegeneratorResponse, DataGeneration.BarcodegeneratorError>`
- **Wire**: `POST /v1/barcodegenerator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1BarcodegeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.BarcodegeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.BarcodegeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1BarcodegeneratorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BarcodegeneratorRequest` | `v1BarcodegeneratorRequestSchema` | `src/models/v1-barcodegenerator-request.ts` |
| `V1BarcodegeneratorResponse` | `v1BarcodegeneratorResponseSchema` | `src/models/v1-barcodegenerator-response.ts` |

### bingocardgenerator

- **Signature**: `bingocardgenerator(request?: DataGeneration.BingocardgeneratorRequest, options?: RequestOptions): ApiPromise<V1BingocardgeneratorResponse, DataGeneration.BingocardgeneratorError>`
- **Wire**: `GET /v1/bingocardgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BingocardgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.BingocardgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.BingocardgeneratorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `size` | `query` | `number` | no |
| `freeSpace` | `query` | `boolean` | no |
| `image` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BingocardgeneratorResponse` | `v1BingocardgeneratorResponseSchema` | `src/models/v1-bingocardgenerator-response.ts` |

### boggleboardgenerator

- **Signature**: `boggleboardgenerator(request?: DataGeneration.BoggleboardgeneratorRequest, options?: RequestOptions): ApiPromise<V1BoggleboardgeneratorResponse, DataGeneration.BoggleboardgeneratorError>`
- **Wire**: `GET /v1/boggleboardgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BoggleboardgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.BoggleboardgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.BoggleboardgeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `size` | `query` | `number` | no |
| `image` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BoggleboardgeneratorResponse` | `v1BoggleboardgeneratorResponseSchema` | `src/models/v1-boggleboardgenerator-response.ts` |

### captchagenerator

- **Signature**: `captchagenerator(options?: RequestOptions): ApiPromise<V1CaptchageneratorResponse, DataGeneration.CaptchageneratorError>`
- **Wire**: `GET /v1/captchagenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CaptchageneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.CaptchageneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CaptchageneratorResponse` | `v1CaptchageneratorResponseSchema` | `src/models/v1-captchagenerator-response.ts` |

### cardgenerator

- **Signature**: `cardgenerator(request?: DataGeneration.CardgeneratorRequest, options?: RequestOptions): ApiPromise<V1CardgeneratorResponse, DataGeneration.CardgeneratorError>`
- **Wire**: `GET /v1/cardgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CardgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.CardgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.CardgeneratorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `brand` | `query` | `string` | no |
| `count` | `query` | `number` | no |
| `includeAvatar` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CardgeneratorResponse` | `v1CardgeneratorResponseSchema` | `src/models/v1-cardgenerator-response.ts` |

### chartgenerator

- **Signature**: `chartgenerator(request: DataGeneration.ChartgeneratorRequest, options?: RequestOptions): ApiPromise<V1ChartgeneratorResponse, DataGeneration.ChartgeneratorError>`
- **Wire**: `POST /v1/chartgenerator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ChartgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.ChartgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.ChartgeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ChartgeneratorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ChartgeneratorRequest` | `v1ChartgeneratorRequestSchema` | `src/models/v1-chartgenerator-request.ts` |
| `V1ChartgeneratorResponse` | `v1ChartgeneratorResponseSchema` | `src/models/v1-chartgenerator-response.ts` |

### colorpalette

- **Signature**: `colorpalette(request: DataGeneration.ColorpaletteRequest, options?: RequestOptions): ApiPromise<V1ColorpaletteResponse, DataGeneration.ColorpaletteError>`
- **Wire**: `GET /v1/colorpalette`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ColorpaletteResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.ColorpaletteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.ColorpaletteRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `color` | `query` | `string` | yes |
| `scheme` | `query` | `string` | no |
| `variation` | `query` | `string` | no |
| `count` | `query` | `number` | no |
| `distance` | `query` | `number` | no |
| `addComplement` | `query` | `boolean` | no |
| `webSafe` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ColorpaletteResponse` | `v1ColorpaletteResponseSchema` | `src/models/v1-colorpalette-response.ts` |

### commentgenerator

- **Signature**: `commentgenerator(request: DataGeneration.CommentgeneratorRequest, options?: RequestOptions): ApiPromise<V1CommentgeneratorResponse, DataGeneration.CommentgeneratorError>`
- **Wire**: `GET /v1/commentgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CommentgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.CommentgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.CommentgeneratorRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `mode` | `query` | `string` | yes |
| `tone` | `query` | `string` | no |
| `count` | `query` | `number` | no |
| `emojis` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CommentgeneratorResponse` | `v1CommentgeneratorResponseSchema` | `src/models/v1-commentgenerator-response.ts` |

### companynamegenerator

- **Signature**: `companynamegenerator(request: DataGeneration.CompanynamegeneratorRequest, options?: RequestOptions): ApiPromise<V1CompanynamegeneratorResponse, DataGeneration.CompanynamegeneratorError>`
- **Wire**: `GET /v1/companynamegenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CompanynamegeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.CompanynamegeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.CompanynamegeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `keyword` | `query` | `string` | yes |
| `count` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CompanynamegeneratorResponse` | `v1CompanynamegeneratorResponseSchema` | `src/models/v1-companynamegenerator-response.ts` |

### crongenerator

- **Signature**: `crongenerator(request: DataGeneration.CrongeneratorRequest, options?: RequestOptions): ApiPromise<V1CrongeneratorResponse, DataGeneration.CrongeneratorError>`
- **Wire**: `GET /v1/crongenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CrongeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.CrongeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.CrongeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `schedule` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CrongeneratorResponse` | `v1CrongeneratorResponseSchema` | `src/models/v1-crongenerator-response.ts` |

### cuidgenerator

- **Signature**: `cuidgenerator(request?: DataGeneration.CuidgeneratorRequest, options?: RequestOptions): ApiPromise<V1CuidgeneratorResponse, DataGeneration.CuidgeneratorError>`
- **Wire**: `GET /v1/cuidgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CuidgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.CuidgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.CuidgeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `count` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CuidgeneratorResponse` | `v1CuidgeneratorResponseSchema` | `src/models/v1-cuidgenerator-response.ts` |

### guidgenerator

- **Signature**: `guidgenerator(request?: DataGeneration.GuidgeneratorRequest, options?: RequestOptions): ApiPromise<V1GuidgeneratorResponse, DataGeneration.GuidgeneratorError>`
- **Wire**: `GET /v1/guidgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1GuidgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.GuidgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.GuidgeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `count` | `query` | `number` | no |
| `format` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1GuidgeneratorResponse` | `v1GuidgeneratorResponseSchema` | `src/models/v1-guidgenerator-response.ts` |

### hashtaggenerator

- **Signature**: `hashtaggenerator(request: DataGeneration.HashtaggeneratorRequest, options?: RequestOptions): ApiPromise<V1HashtaggeneratorResponse, DataGeneration.HashtaggeneratorError>`
- **Wire**: `POST /v1/hashtaggenerator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1HashtaggeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.HashtaggeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.HashtaggeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1HashtaggeneratorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HashtaggeneratorRequest` | `v1HashtaggeneratorRequestSchema` | `src/models/v1-hashtaggenerator-request.ts` |
| `V1HashtaggeneratorResponse` | `v1HashtaggeneratorResponseSchema` | `src/models/v1-hashtaggenerator-response.ts` |

### imeigenerator

- **Signature**: `imeigenerator(request?: DataGeneration.ImeigeneratorRequest, options?: RequestOptions): ApiPromise<V1ImeigeneratorResponse, DataGeneration.ImeigeneratorError>`
- **Wire**: `GET /v1/imeigenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ImeigeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.ImeigeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.ImeigeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `brand` | `query` | `string` | no |
| `count` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ImeigeneratorResponse` | `v1ImeigeneratorResponseSchema` | `src/models/v1-imeigenerator-response.ts` |

### initialismgenerator

- **Signature**: `initialismgenerator(request: DataGeneration.InitialismgeneratorRequest, options?: RequestOptions): ApiPromise<V1InitialismgeneratorResponse, DataGeneration.InitialismgeneratorError>`
- **Wire**: `POST /v1/initialismgenerator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1InitialismgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.InitialismgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.InitialismgeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1InitialismgeneratorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1InitialismgeneratorRequest` | `v1InitialismgeneratorRequestSchema` | `src/models/v1-initialismgenerator-request.ts` |
| `V1InitialismgeneratorResponse` | `v1InitialismgeneratorResponseSchema` | `src/models/v1-initialismgenerator-response.ts` |

### jsonschemagenerator

- **Signature**: `jsonschemagenerator(request: DataGeneration.JsonschemageneratorRequest, options?: RequestOptions): ApiPromise<V1JsonschemageneratorResponse, DataGeneration.JsonschemageneratorError>`
- **Wire**: `POST /v1/jsonschemagenerator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1JsonschemageneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.JsonschemageneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.JsonschemageneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1JsonschemageneratorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1JsonschemageneratorRequest` | `v1JsonschemageneratorRequestSchema` | `src/models/v1-jsonschemagenerator-request.ts` |
| `V1JsonschemageneratorResponse` | `v1JsonschemageneratorResponseSchema` | `src/models/v1-jsonschemagenerator-response.ts` |

### loremipsumgenerator

- **Signature**: `loremipsumgenerator(request?: DataGeneration.LoremipsumgeneratorRequest, options?: RequestOptions): ApiPromise<V1LoremipsumgeneratorResponse, DataGeneration.LoremipsumgeneratorError>`
- **Wire**: `GET /v1/loremipsumgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1LoremipsumgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.LoremipsumgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.LoremipsumgeneratorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paragraphs` | `query` | `number` | no |
| `startwithlorem` | `query` | `boolean` | no |
| `maxlength` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LoremipsumgeneratorResponse` | `v1LoremipsumgeneratorResponseSchema` | `src/models/v1-loremipsumgenerator-response.ts` |

### passwordgenerator

- **Signature**: `passwordgenerator(request?: DataGeneration.PasswordgeneratorRequest, options?: RequestOptions): ApiPromise<V1PasswordgeneratorResponse, DataGeneration.PasswordgeneratorError>`
- **Wire**: `GET /v1/passwordgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PasswordgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.PasswordgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.PasswordgeneratorRequest` (16):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `count` | `query` | `number` | no |
| `length` | `query` | `number` | no |
| `complexity` | `query` | `string` | no |
| `type` | `query` | `string` | no |
| `includeNumbers` | `query` | `boolean` | no |
| `includeSymbols` | `query` | `boolean` | no |
| `includeUppercase` | `query` | `boolean` | no |
| `includeLowercase` | `query` | `boolean` | no |
| `excludeSimilar` | `query` | `boolean` | no |
| `excludeAmbiguous` | `query` | `boolean` | no |
| `mixedCase` | `query` | `boolean` | no |
| `strict` | `query` | `boolean` | no |
| `wordCount` | `query` | `number` | no |
| `separator` | `query` | `string` | no |
| `capitalize` | `query` | `boolean` | no |
| `analyze` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PasswordgeneratorResponse` | `v1PasswordgeneratorResponseSchema` | `src/models/v1-passwordgenerator-response.ts` |

### qrcodegenerator

- **Signature**: `qrcodegenerator(request: DataGeneration.QrcodegeneratorRequest, options?: RequestOptions): ApiPromise<V1QrcodegeneratorResponse, DataGeneration.QrcodegeneratorError>`
- **Wire**: `POST /v1/qrcodegenerator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1QrcodegeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.QrcodegeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.QrcodegeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1QrcodegeneratorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1QrcodegeneratorRequest` | `v1QrcodegeneratorRequestSchema` | `src/models/v1-qrcodegenerator-request.ts` |
| `V1QrcodegeneratorResponse` | `v1QrcodegeneratorResponseSchema` | `src/models/v1-qrcodegenerator-response.ts` |

### randomgenerator

- **Signature**: `randomgenerator(request?: DataGeneration.RandomgeneratorRequest, options?: RequestOptions): ApiPromise<V1RandomgeneratorResponse, DataGeneration.RandomgeneratorError>`
- **Wire**: `GET /v1/randomgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RandomgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.RandomgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.RandomgeneratorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `string` | no |
| `count` | `query` | `number` | no |
| `includeAvatar` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RandomgeneratorResponse` | `v1RandomgeneratorResponseSchema` | `src/models/v1-randomgenerator-response.ts` |

### randomidentitygenerator

- **Signature**: `randomidentitygenerator(request?: DataGeneration.RandomidentitygeneratorRequest, options?: RequestOptions): ApiPromise<V1RandomidentitygeneratorResponse, DataGeneration.RandomidentitygeneratorError>`
- **Wire**: `GET /v1/randomidentitygenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RandomidentitygeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.RandomidentitygeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.RandomidentitygeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `count` | `query` | `number` | no |
| `includeAvatar` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RandomidentitygeneratorResponse` | `v1RandomidentitygeneratorResponseSchema` | `src/models/v1-randomidentitygenerator-response.ts` |

### randomusergenerator

- **Signature**: `randomusergenerator(request?: DataGeneration.RandomusergeneratorRequest, options?: RequestOptions): ApiPromise<V1RandomusergeneratorResponse, DataGeneration.RandomusergeneratorError>`
- **Wire**: `GET /v1/randomusergenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RandomusergeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.RandomusergeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.RandomusergeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `count` | `query` | `number` | no |
| `includeAvatar` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RandomusergeneratorResponse` | `v1RandomusergeneratorResponseSchema` | `src/models/v1-randomusergenerator-response.ts` |

### randomwords

- **Signature**: `randomwords(options?: RequestOptions): ApiPromise<V1RandomwordsResponse, DataGeneration.RandomwordsError>`
- **Wire**: `GET /v1/randomwords`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RandomwordsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.RandomwordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RandomwordsResponse` | `v1RandomwordsResponseSchema` | `src/models/v1-randomwords-response.ts` |

### shortcodegenerator

- **Signature**: `shortcodegenerator(request?: DataGeneration.ShortcodegeneratorRequest, options?: RequestOptions): ApiPromise<V1ShortcodegeneratorResponse, DataGeneration.ShortcodegeneratorError>`
- **Wire**: `GET /v1/shortcodegenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ShortcodegeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.ShortcodegeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.ShortcodegeneratorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `count` | `query` | `number` | no |
| `length` | `query` | `number` | no |
| `charset` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ShortcodegeneratorResponse` | `v1ShortcodegeneratorResponseSchema` | `src/models/v1-shortcodegenerator-response.ts` |

### sitemapgenerator

- **Signature**: `sitemapgenerator(request: DataGeneration.SitemapgeneratorRequest, options?: RequestOptions): ApiPromise<V1SitemapgeneratorResponse, DataGeneration.SitemapgeneratorError>`
- **Wire**: `POST /v1/sitemapgenerator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SitemapgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.SitemapgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.SitemapgeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SitemapgeneratorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SitemapgeneratorRequest` | `v1SitemapgeneratorRequestSchema` | `src/models/v1-sitemapgenerator-request.ts` |
| `V1SitemapgeneratorResponse` | `v1SitemapgeneratorResponseSchema` | `src/models/v1-sitemapgenerator-response.ts` |

### totpgenerator

- **Signature**: `totpgenerator(request: DataGeneration.TotpgeneratorRequest, options?: RequestOptions): ApiPromise<V1TotpgeneratorResponse, DataGeneration.TotpgeneratorError>`
- **Wire**: `POST /v1/totpgenerator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TotpgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.TotpgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.TotpgeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1TotpgeneratorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TotpgeneratorRequest` | `v1TotpgeneratorRequestSchema` | `src/models/v1-totpgenerator-request.ts` |
| `V1TotpgeneratorResponse` | `v1TotpgeneratorResponseSchema` | `src/models/v1-totpgenerator-response.ts` |

### ulidgenerator

- **Signature**: `ulidgenerator(request?: DataGeneration.UlidgeneratorRequest, options?: RequestOptions): ApiPromise<V1UlidgeneratorResponse, DataGeneration.UlidgeneratorError>`
- **Wire**: `GET /v1/ulidgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UlidgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.UlidgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.UlidgeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `count` | `query` | `number` | no |
| `timestamp` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UlidgeneratorResponse` | `v1UlidgeneratorResponseSchema` | `src/models/v1-ulidgenerator-response.ts` |

### useragentgenerator

- **Signature**: `useragentgenerator(request?: DataGeneration.UseragentgeneratorRequest, options?: RequestOptions): ApiPromise<V1UseragentgeneratorResponse, DataGeneration.UseragentgeneratorError>`
- **Wire**: `GET /v1/useragentgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UseragentgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.UseragentgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.UseragentgeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `device` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UseragentgeneratorResponse` | `v1UseragentgeneratorResponseSchema` | `src/models/v1-useragentgenerator-response.ts` |

### usernamegenerator

- **Signature**: `usernamegenerator(request: DataGeneration.UsernamegeneratorRequest, options?: RequestOptions): ApiPromise<V1UsernamegeneratorResponse, DataGeneration.UsernamegeneratorError>`
- **Wire**: `GET /v1/usernamegenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UsernamegeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.UsernamegeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.UsernamegeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |
| `count` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UsernamegeneratorResponse` | `v1UsernamegeneratorResponseSchema` | `src/models/v1-usernamegenerator-response.ts` |

### uuidgenerator

- **Signature**: `uuidgenerator(request?: DataGeneration.UuidgeneratorRequest, options?: RequestOptions): ApiPromise<V1UuidgeneratorResponse, DataGeneration.UuidgeneratorError>`
- **Wire**: `GET /v1/uuidgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UuidgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataGeneration.UuidgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataGeneration.UuidgeneratorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `count` | `query` | `number` | no |
| `version` | `query` | `number` | no |
| `format` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UuidgeneratorResponse` | `v1UuidgeneratorResponseSchema` | `src/models/v1-uuidgenerator-response.ts` |

