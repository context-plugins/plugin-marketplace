<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataLookup — operations

Accessor: `client.dataLookup` · Source: `src/resources/data-lookup.ts` · 17 operations · Request and error types: namespace `DataLookup`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### asnlookup

- **Signature**: `asnlookup(request: DataLookup.AsnlookupRequest, options?: RequestOptions): ApiPromise<V1AsnlookupResponse, DataLookup.AsnlookupError>`
- **Wire**: `GET /v1/asnlookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AsnlookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.AsnlookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.AsnlookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `asn` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AsnlookupResponse` | `v1AsnlookupResponseSchema` | `src/models/v1-asnlookup-response.ts` |

### bible

- **Signature**: `bible(request: DataLookup.BibleRequest, options?: RequestOptions): ApiPromise<V1BibleResponse, DataLookup.BibleError>`
- **Wire**: `GET /v1/bible`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BibleResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.BibleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.BibleRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `book` | `query` | `string` | yes |
| `version` | `query` | `string` | yes |
| `chapter` | `query` | `number` | yes |
| `verse` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BibleResponse` | `v1BibleResponseSchema` | `src/models/v1-bible-response.ts` |

### callingcode

- **Signature**: `callingcode(request: DataLookup.CallingcodeRequest, options?: RequestOptions): ApiPromise<V1CallingcodeResponse, DataLookup.CallingcodeError>`
- **Wire**: `GET /v1/callingcode`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CallingcodeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.CallingcodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.CallingcodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CallingcodeResponse` | `v1CallingcodeResponseSchema` | `src/models/v1-callingcode-response.ts` |

### dictionary

- **Signature**: `dictionary(request: DataLookup.DictionaryRequest, options?: RequestOptions): ApiPromise<V1DictionaryResponse, DataLookup.DictionaryError>`
- **Wire**: `GET /v1/dictionary`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DictionaryResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.DictionaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.DictionaryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DictionaryResponse` | `v1DictionaryResponseSchema` | `src/models/v1-dictionary-response.ts` |

### dogbreeds

- **Signature**: `dogbreeds(request: DataLookup.DogbreedsRequest, options?: RequestOptions): ApiPromise<V1DogbreedsResponse, DataLookup.DogbreedsError>`
- **Wire**: `GET /v1/dogbreeds`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DogbreedsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.DogbreedsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.DogbreedsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `breed` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DogbreedsResponse` | `v1DogbreedsResponseSchema` | `src/models/v1-dogbreeds-response.ts` |

### emoji

- **Signature**: `emoji(request: DataLookup.EmojiRequest, options?: RequestOptions): ApiPromise<V1EmojiResponse, DataLookup.EmojiError>`
- **Wire**: `GET /v1/emoji`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1EmojiResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.EmojiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.EmojiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `emoji` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1EmojiResponse` | `v1EmojiResponseSchema` | `src/models/v1-emoji-response.ts` |

### genderdetector

- **Signature**: `genderdetector(request: DataLookup.GenderdetectorRequest, options?: RequestOptions): ApiPromise<V1GenderdetectorResponse, DataLookup.GenderdetectorError>`
- **Wire**: `GET /v1/genderdetector`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1GenderdetectorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.GenderdetectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.GenderdetectorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | yes |
| `country` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1GenderdetectorResponse` | `v1GenderdetectorResponseSchema` | `src/models/v1-genderdetector-response.ts` |

### gravatarlookup

- **Signature**: `gravatarlookup(request: DataLookup.GravatarlookupRequest, options?: RequestOptions): ApiPromise<V1GravatarlookupResponse, DataLookup.GravatarlookupError>`
- **Wire**: `GET /v1/gravatarlookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1GravatarlookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.GravatarlookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.GravatarlookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `email` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1GravatarlookupResponse` | `v1GravatarlookupResponseSchema` | `src/models/v1-gravatarlookup-response.ts` |

### ipdemographics

- **Signature**: `ipdemographics(request: DataLookup.IpdemographicsRequest, options?: RequestOptions): ApiPromise<V1IpdemographicsResponse, DataLookup.IpdemographicsError>`
- **Wire**: `GET /v1/ipdemographics`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1IpdemographicsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.IpdemographicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.IpdemographicsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1IpdemographicsResponse` | `v1IpdemographicsResponseSchema` | `src/models/v1-ipdemographics-response.ts` |

### lottery

- **Signature**: `lottery(request: DataLookup.LotteryRequest, options?: RequestOptions): ApiPromise<V1LotteryResponse, DataLookup.LotteryError>`
- **Wire**: `GET /v1/lottery`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1LotteryResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.LotteryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.LotteryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `numbers` | `query` | `string` | yes |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LotteryResponse` | `v1LotteryResponseSchema` | `src/models/v1-lottery-response.ts` |

### nobelprizes

- **Signature**: `nobelprizes(request?: DataLookup.NobelprizesRequest, options?: RequestOptions): ApiPromise<V1NobelprizesResponse, DataLookup.NobelprizesError>`
- **Wire**: `GET /v1/nobelprizes`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1NobelprizesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.NobelprizesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.NobelprizesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `firstname` | `query` | `string` | no |
| `lastname` | `query` | `string` | no |
| `category` | `query` | `string` | no |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1NobelprizesResponse` | `v1NobelprizesResponseSchema` | `src/models/v1-nobelprizes-response.ts` |

### openlicenses

- **Signature**: `openlicenses(request: DataLookup.OpenlicensesRequest, options?: RequestOptions): ApiPromise<V1OpenlicensesResponse, DataLookup.OpenlicensesError>`
- **Wire**: `GET /v1/openlicenses`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OpenlicensesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.OpenlicensesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.OpenlicensesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OpenlicensesResponse` | `v1OpenlicensesResponseSchema` | `src/models/v1-openlicenses-response.ts` |

### thesaurus

- **Signature**: `thesaurus(request: DataLookup.ThesaurusRequest, options?: RequestOptions): ApiPromise<V1ThesaurusResponse, DataLookup.ThesaurusError>`
- **Wire**: `GET /v1/thesaurus`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ThesaurusResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.ThesaurusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.ThesaurusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ThesaurusResponse` | `v1ThesaurusResponseSchema` | `src/models/v1-thesaurus-response.ts` |

### timezonelookup

- **Signature**: `timezonelookup(request: DataLookup.TimezonelookupRequest, options?: RequestOptions): ApiPromise<V1TimezonelookupResponse, DataLookup.TimezonelookupError>`
- **Wire**: `GET /v1/timezonelookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TimezonelookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.TimezonelookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.TimezonelookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `city` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TimezonelookupResponse` | `v1TimezonelookupResponseSchema` | `src/models/v1-timezonelookup-response.ts` |

### unicodelookup

- **Signature**: `unicodelookup(request?: DataLookup.UnicodelookupRequest, options?: RequestOptions): ApiPromise<V1UnicodelookupResponse, DataLookup.UnicodelookupError>`
- **Wire**: `GET /v1/unicodelookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UnicodelookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.UnicodelookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.UnicodelookupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `character` | `query` | `string` | no |
| `codepoint` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UnicodelookupResponse` | `v1UnicodelookupResponseSchema` | `src/models/v1-unicodelookup-response.ts` |

### worldtime

- **Signature**: `worldtime(request: DataLookup.WorldtimeRequest, options?: RequestOptions): ApiPromise<V1WorldtimeResponse, DataLookup.WorldtimeError>`
- **Wire**: `GET /v1/worldtime`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WorldtimeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.WorldtimeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.WorldtimeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `city` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WorldtimeResponse` | `v1WorldtimeResponseSchema` | `src/models/v1-worldtime-response.ts` |

### zipdemographics

- **Signature**: `zipdemographics(request: DataLookup.ZipdemographicsRequest, options?: RequestOptions): ApiPromise<V1ZipdemographicsResponse, DataLookup.ZipdemographicsError>`
- **Wire**: `GET /v1/zipdemographics`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ZipdemographicsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataLookup.ZipdemographicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataLookup.ZipdemographicsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ZipdemographicsResponse` | `v1ZipdemographicsResponseSchema` | `src/models/v1-zipdemographics-response.ts` |

