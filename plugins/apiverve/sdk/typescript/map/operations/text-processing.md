<!-- Generated file — do not edit; regenerated with the SDK. -->

# TextProcessing — operations

Accessor: `client.textProcessing` · Source: `src/resources/text-processing.ts` · 45 operations · Request and error types: namespace `TextProcessing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acronymexpander

- **Signature**: `acronymexpander(request: TextProcessing.AcronymexpanderRequest, options?: RequestOptions): ApiPromise<V1AcronymexpanderResponse, TextProcessing.AcronymexpanderError>`
- **Wire**: `GET /v1/acronymexpander`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AcronymexpanderResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.AcronymexpanderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.AcronymexpanderRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acronym` | `query` | `string` | yes |
| `context` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AcronymexpanderResponse` | `v1AcronymexpanderResponseSchema` | `src/models/v1-acronymexpander-response.ts` |

### anagramdetector

- **Signature**: `anagramdetector(request: TextProcessing.AnagramdetectorRequest, options?: RequestOptions): ApiPromise<V1AnagramdetectorResponse, TextProcessing.AnagramdetectorError>`
- **Wire**: `GET /v1/anagramdetector`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AnagramdetectorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.AnagramdetectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.AnagramdetectorRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `text1` | `query` | `string` | yes |
| `text2` | `query` | `string` | yes |
| `ignorecase` | `query` | `boolean` | no |
| `ignorespaces` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AnagramdetectorResponse` | `v1AnagramdetectorResponseSchema` | `src/models/v1-anagramdetector-response.ts` |

### antonym

- **Signature**: `antonym(request: TextProcessing.AntonymRequest, options?: RequestOptions): ApiPromise<V1AntonymResponse, TextProcessing.AntonymError>`
- **Wire**: `GET /v1/antonym`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AntonymResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.AntonymError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.AntonymRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | yes |
| `language` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AntonymResponse` | `v1AntonymResponseSchema` | `src/models/v1-antonym-response.ts` |

### cronparser

- **Signature**: `cronparser(request: TextProcessing.CronparserRequest, options?: RequestOptions): ApiPromise<V1CronparserResponse, TextProcessing.CronparserError>`
- **Wire**: `GET /v1/cronparser`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CronparserResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.CronparserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.CronparserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `expression` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CronparserResponse` | `v1CronparserResponseSchema` | `src/models/v1-cronparser-response.ts` |

### datamasking

- **Signature**: `datamasking(request: TextProcessing.DatamaskingRequest, options?: RequestOptions): ApiPromise<V1DatamaskingResponse, TextProcessing.DatamaskingError>`
- **Wire**: `POST /v1/datamasking`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1DatamaskingResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.DatamaskingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.DatamaskingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1DatamaskingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DatamaskingRequest` | `v1DatamaskingRequestSchema` | `src/models/v1-datamasking-request.ts` |
| `V1DatamaskingResponse` | `v1DatamaskingResponseSchema` | `src/models/v1-datamasking-response.ts` |

### didyoumean

- **Signature**: `didyoumean(request: TextProcessing.DidyoumeanRequest, options?: RequestOptions): ApiPromise<V1DidyoumeanResponse, TextProcessing.DidyoumeanError>`
- **Wire**: `GET /v1/didyoumean`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DidyoumeanResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.DidyoumeanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.DidyoumeanRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `query` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DidyoumeanResponse` | `v1DidyoumeanResponseSchema` | `src/models/v1-didyoumean-response.ts` |

### emojidecorator

- **Signature**: `emojidecorator(request: TextProcessing.EmojidecoratorRequest, options?: RequestOptions): ApiPromise<V1EmojidecoratorResponse, TextProcessing.EmojidecoratorError>`
- **Wire**: `POST /v1/emojidecorator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1EmojidecoratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.EmojidecoratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.EmojidecoratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1EmojidecoratorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1EmojidecoratorRequest` | `v1EmojidecoratorRequestSchema` | `src/models/v1-emojidecorator-request.ts` |
| `V1EmojidecoratorResponse` | `v1EmojidecoratorResponseSchema` | `src/models/v1-emojidecorator-response.ts` |

### gibberishdetector

- **Signature**: `gibberishdetector(request: TextProcessing.GibberishdetectorRequest, options?: RequestOptions): ApiPromise<V1GibberishdetectorResponse, TextProcessing.GibberishdetectorError>`
- **Wire**: `POST /v1/gibberishdetector`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1GibberishdetectorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.GibberishdetectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.GibberishdetectorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1GibberishdetectorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1GibberishdetectorRequest` | `v1GibberishdetectorRequestSchema` | `src/models/v1-gibberishdetector-request.ts` |
| `V1GibberishdetectorResponse` | `v1GibberishdetectorResponseSchema` | `src/models/v1-gibberishdetector-response.ts` |

### grammarcheck

- **Signature**: `grammarcheck(request: TextProcessing.GrammarcheckRequest, options?: RequestOptions): ApiPromise<V1GrammarcheckResponse, TextProcessing.GrammarcheckError>`
- **Wire**: `POST /v1/grammarcheck`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1GrammarcheckResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.GrammarcheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.GrammarcheckRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1GrammarcheckRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1GrammarcheckRequest` | `v1GrammarcheckRequestSchema` | `src/models/v1-grammarcheck-request.ts` |
| `V1GrammarcheckResponse` | `v1GrammarcheckResponseSchema` | `src/models/v1-grammarcheck-response.ts` |

### isbnvalidator

- **Signature**: `isbnvalidator(request: TextProcessing.IsbnvalidatorRequest, options?: RequestOptions): ApiPromise<V1IsbnvalidatorResponse, TextProcessing.IsbnvalidatorError>`
- **Wire**: `GET /v1/isbnvalidator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1IsbnvalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.IsbnvalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.IsbnvalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `isbn` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1IsbnvalidatorResponse` | `v1IsbnvalidatorResponseSchema` | `src/models/v1-isbnvalidator-response.ts` |

### jsonschemavalidator

- **Signature**: `jsonschemavalidator(request: TextProcessing.JsonschemavalidatorRequest, options?: RequestOptions): ApiPromise<V1JsonschemavalidatorResponse, TextProcessing.JsonschemavalidatorError>`
- **Wire**: `POST /v1/jsonschemavalidator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1JsonschemavalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.JsonschemavalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.JsonschemavalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1JsonschemavalidatorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1JsonschemavalidatorRequest` | `v1JsonschemavalidatorRequestSchema` | `src/models/v1-jsonschemavalidator-request.ts` |
| `V1JsonschemavalidatorResponse` | `v1JsonschemavalidatorResponseSchema` | `src/models/v1-jsonschemavalidator-response.ts` |

### keywordextractor

- **Signature**: `keywordextractor(request: TextProcessing.KeywordextractorRequest, options?: RequestOptions): ApiPromise<V1KeywordextractorResponse, TextProcessing.KeywordextractorError>`
- **Wire**: `POST /v1/keywordextractor`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1KeywordextractorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.KeywordextractorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.KeywordextractorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1KeywordextractorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1KeywordextractorRequest` | `v1KeywordextractorRequestSchema` | `src/models/v1-keywordextractor-request.ts` |
| `V1KeywordextractorResponse` | `v1KeywordextractorResponseSchema` | `src/models/v1-keywordextractor-response.ts` |

### leetspeak

- **Signature**: `leetspeak(request: TextProcessing.LeetspeakRequest, options?: RequestOptions): ApiPromise<V1LeetspeakResponse, TextProcessing.LeetspeakError>`
- **Wire**: `POST /v1/leetspeak`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1LeetspeakResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.LeetspeakError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.LeetspeakRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1LeetspeakRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LeetspeakRequest` | `v1LeetspeakRequestSchema` | `src/models/v1-leetspeak-request.ts` |
| `V1LeetspeakResponse` | `v1LeetspeakResponseSchema` | `src/models/v1-leetspeak-response.ts` |

### lemmatizer

- **Signature**: `lemmatizer(request: TextProcessing.LemmatizerRequest, options?: RequestOptions): ApiPromise<V1LemmatizerResponse, TextProcessing.LemmatizerError>`
- **Wire**: `POST /v1/lemmatizer`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1LemmatizerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.LemmatizerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.LemmatizerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1LemmatizerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LemmatizerRequest` | `v1LemmatizerRequestSchema` | `src/models/v1-lemmatizer-request.ts` |
| `V1LemmatizerResponse` | `v1LemmatizerResponseSchema` | `src/models/v1-lemmatizer-response.ts` |

### levenshteindistance

- **Signature**: `levenshteindistance(request: TextProcessing.LevenshteindistanceRequest, options?: RequestOptions): ApiPromise<V1LevenshteindistanceResponse, TextProcessing.LevenshteindistanceError>`
- **Wire**: `POST /v1/levenshteindistance`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1LevenshteindistanceResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.LevenshteindistanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.LevenshteindistanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1LevenshteindistanceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LevenshteindistanceRequest` | `v1LevenshteindistanceRequestSchema` | `src/models/v1-levenshteindistance-request.ts` |
| `V1LevenshteindistanceResponse` | `v1LevenshteindistanceResponseSchema` | `src/models/v1-levenshteindistance-response.ts` |

### lexicon

- **Signature**: `lexicon(request: TextProcessing.LexiconRequest, options?: RequestOptions): ApiPromise<V1LexiconResponse, TextProcessing.LexiconError>`
- **Wire**: `GET /v1/lexicon`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1LexiconResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.LexiconError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.LexiconRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LexiconResponse` | `v1LexiconResponseSchema` | `src/models/v1-lexicon-response.ts` |

### linesorter

- **Signature**: `linesorter(request: TextProcessing.LinesorterRequest, options?: RequestOptions): ApiPromise<V1LinesorterResponse, TextProcessing.LinesorterError>`
- **Wire**: `POST /v1/linesorter`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1LinesorterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.LinesorterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.LinesorterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1LinesorterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LinesorterRequest` | `v1LinesorterRequestSchema` | `src/models/v1-linesorter-request.ts` |
| `V1LinesorterResponse` | `v1LinesorterResponseSchema` | `src/models/v1-linesorter-response.ts` |

### markdownlinkextractor

- **Signature**: `markdownlinkextractor(request: TextProcessing.MarkdownlinkextractorRequest, options?: RequestOptions): ApiPromise<V1MarkdownlinkextractorResponse, TextProcessing.MarkdownlinkextractorError>`
- **Wire**: `POST /v1/markdownlinkextractor`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1MarkdownlinkextractorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.MarkdownlinkextractorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.MarkdownlinkextractorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MarkdownlinkextractorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MarkdownlinkextractorRequest` | `v1MarkdownlinkextractorRequestSchema` | `src/models/v1-markdownlinkextractor-request.ts` |
| `V1MarkdownlinkextractorResponse` | `v1MarkdownlinkextractorResponseSchema` | `src/models/v1-markdownlinkextractor-response.ts` |

### palindromechecker

- **Signature**: `palindromechecker(request: TextProcessing.PalindromecheckerRequest, options?: RequestOptions): ApiPromise<V1PalindromecheckerResponse, TextProcessing.PalindromecheckerError>`
- **Wire**: `GET /v1/palindromechecker`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PalindromecheckerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.PalindromecheckerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.PalindromecheckerRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `text` | `query` | `string` | yes |
| `ignorecase` | `query` | `boolean` | no |
| `ignorespaces` | `query` | `boolean` | no |
| `ignorepunctuation` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PalindromecheckerResponse` | `v1PalindromecheckerResponseSchema` | `src/models/v1-palindromechecker-response.ts` |

### partsofspeech

- **Signature**: `partsofspeech(request: TextProcessing.PartsofspeechRequest, options?: RequestOptions): ApiPromise<V1PartsofspeechResponse, TextProcessing.PartsofspeechError>`
- **Wire**: `POST /v1/partsofspeech`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1PartsofspeechResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.PartsofspeechError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.PartsofspeechRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1PartsofspeechRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PartsofspeechRequest` | `v1PartsofspeechRequestSchema` | `src/models/v1-partsofspeech-request.ts` |
| `V1PartsofspeechResponse` | `v1PartsofspeechResponseSchema` | `src/models/v1-partsofspeech-response.ts` |

### phonetic

- **Signature**: `phonetic(request: TextProcessing.PhoneticRequest, options?: RequestOptions): ApiPromise<V1PhoneticResponse, TextProcessing.PhoneticError>`
- **Wire**: `GET /v1/phonetic`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PhoneticResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.PhoneticError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.PhoneticRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | yes |
| `algorithm` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PhoneticResponse` | `v1PhoneticResponseSchema` | `src/models/v1-phonetic-response.ts` |

### piglatin

- **Signature**: `piglatin(request: TextProcessing.PiglatinRequest, options?: RequestOptions): ApiPromise<V1PiglatinResponse, TextProcessing.PiglatinError>`
- **Wire**: `POST /v1/piglatin`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1PiglatinResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.PiglatinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.PiglatinRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1PiglatinRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PiglatinRequest` | `v1PiglatinRequestSchema` | `src/models/v1-piglatin-request.ts` |
| `V1PiglatinResponse` | `v1PiglatinResponseSchema` | `src/models/v1-piglatin-response.ts` |

### profanityfilter

- **Signature**: `profanityfilter(request: TextProcessing.ProfanityfilterRequest, options?: RequestOptions): ApiPromise<V1ProfanityfilterResponse, TextProcessing.ProfanityfilterError>`
- **Wire**: `POST /v1/profanityfilter`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ProfanityfilterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.ProfanityfilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.ProfanityfilterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ProfanityfilterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ProfanityfilterRequest` | `v1ProfanityfilterRequestSchema` | `src/models/v1-profanityfilter-request.ts` |
| `V1ProfanityfilterResponse` | `v1ProfanityfilterResponseSchema` | `src/models/v1-profanityfilter-response.ts` |

### readabilityscore

- **Signature**: `readabilityscore(request: TextProcessing.ReadabilityscoreRequest, options?: RequestOptions): ApiPromise<V1ReadabilityscoreResponse, TextProcessing.ReadabilityscoreError>`
- **Wire**: `POST /v1/readabilityscore`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ReadabilityscoreResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.ReadabilityscoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.ReadabilityscoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ReadabilityscoreRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ReadabilityscoreRequest` | `v1ReadabilityscoreRequestSchema` | `src/models/v1-readabilityscore-request.ts` |
| `V1ReadabilityscoreResponse` | `v1ReadabilityscoreResponseSchema` | `src/models/v1-readabilityscore-response.ts` |

### readingtime

- **Signature**: `readingtime(request: TextProcessing.ReadingtimeRequest, options?: RequestOptions): ApiPromise<V1ReadingtimeResponse, TextProcessing.ReadingtimeError>`
- **Wire**: `POST /v1/readingtime`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ReadingtimeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.ReadingtimeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.ReadingtimeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ReadingtimeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ReadingtimeRequest` | `v1ReadingtimeRequestSchema` | `src/models/v1-readingtime-request.ts` |
| `V1ReadingtimeResponse` | `v1ReadingtimeResponseSchema` | `src/models/v1-readingtime-response.ts` |

### regextester

- **Signature**: `regextester(request: TextProcessing.RegextesterRequest, options?: RequestOptions): ApiPromise<V1RegextesterResponse, TextProcessing.RegextesterError>`
- **Wire**: `POST /v1/regextester`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1RegextesterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.RegextesterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.RegextesterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1RegextesterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RegextesterRequest` | `v1RegextesterRequestSchema` | `src/models/v1-regextester-request.ts` |
| `V1RegextesterResponse` | `v1RegextesterResponseSchema` | `src/models/v1-regextester-response.ts` |

### removepunctuation

- **Signature**: `removepunctuation(request: TextProcessing.RemovepunctuationRequest, options?: RequestOptions): ApiPromise<V1RemovepunctuationResponse, TextProcessing.RemovepunctuationError>`
- **Wire**: `POST /v1/removepunctuation`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1RemovepunctuationResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.RemovepunctuationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.RemovepunctuationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1RemovepunctuationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RemovepunctuationRequest` | `v1RemovepunctuationRequestSchema` | `src/models/v1-removepunctuation-request.ts` |
| `V1RemovepunctuationResponse` | `v1RemovepunctuationResponseSchema` | `src/models/v1-removepunctuation-response.ts` |

### reversetext

- **Signature**: `reversetext(request: TextProcessing.ReversetextRequest, options?: RequestOptions): ApiPromise<V1ReversetextResponse, TextProcessing.ReversetextError>`
- **Wire**: `POST /v1/reversetext`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ReversetextResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.ReversetextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.ReversetextRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ReversetextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ReversetextRequest` | `v1ReversetextRequestSchema` | `src/models/v1-reversetext-request.ts` |
| `V1ReversetextResponse` | `v1ReversetextResponseSchema` | `src/models/v1-reversetext-response.ts` |

### slugify

- **Signature**: `slugify(request: TextProcessing.SlugifyRequest, options?: RequestOptions): ApiPromise<V1SlugifyResponse, TextProcessing.SlugifyError>`
- **Wire**: `POST /v1/slugify`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SlugifyResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.SlugifyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.SlugifyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SlugifyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SlugifyRequest` | `v1SlugifyRequestSchema` | `src/models/v1-slugify-request.ts` |
| `V1SlugifyResponse` | `v1SlugifyResponseSchema` | `src/models/v1-slugify-response.ts` |

### spellchecker

- **Signature**: `spellchecker(request: TextProcessing.SpellcheckerRequest, options?: RequestOptions): ApiPromise<V1SpellcheckerResponse, TextProcessing.SpellcheckerError>`
- **Wire**: `POST /v1/spellchecker`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SpellcheckerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.SpellcheckerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.SpellcheckerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SpellcheckerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SpellcheckerRequest` | `v1SpellcheckerRequestSchema` | `src/models/v1-spellchecker-request.ts` |
| `V1SpellcheckerResponse` | `v1SpellcheckerResponseSchema` | `src/models/v1-spellchecker-response.ts` |

### syllablecounter

- **Signature**: `syllablecounter(request: TextProcessing.SyllablecounterRequest, options?: RequestOptions): ApiPromise<V1SyllablecounterResponse, TextProcessing.SyllablecounterError>`
- **Wire**: `POST /v1/syllablecounter`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SyllablecounterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.SyllablecounterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.SyllablecounterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SyllablecounterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SyllablecounterRequest` | `v1SyllablecounterRequestSchema` | `src/models/v1-syllablecounter-request.ts` |
| `V1SyllablecounterResponse` | `v1SyllablecounterResponseSchema` | `src/models/v1-syllablecounter-response.ts` |

### taxidvalidator

- **Signature**: `taxidvalidator(request: TextProcessing.TaxidvalidatorRequest, options?: RequestOptions): ApiPromise<V1TaxidvalidatorResponse, TextProcessing.TaxidvalidatorError>`
- **Wire**: `GET /v1/taxidvalidator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TaxidvalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.TaxidvalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.TaxidvalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `taxid` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TaxidvalidatorResponse` | `v1TaxidvalidatorResponseSchema` | `src/models/v1-taxidvalidator-response.ts` |

### tenseconverter

- **Signature**: `tenseconverter(request: TextProcessing.TenseconverterRequest, options?: RequestOptions): ApiPromise<V1TenseconverterResponse, TextProcessing.TenseconverterError>`
- **Wire**: `POST /v1/tenseconverter`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TenseconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.TenseconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.TenseconverterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1TenseconverterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TenseconverterRequest` | `v1TenseconverterRequestSchema` | `src/models/v1-tenseconverter-request.ts` |
| `V1TenseconverterResponse` | `v1TenseconverterResponseSchema` | `src/models/v1-tenseconverter-response.ts` |

### textlanguage

- **Signature**: `textlanguage(request: TextProcessing.TextlanguageRequest, options?: RequestOptions): ApiPromise<V1TextlanguageResponse, TextProcessing.TextlanguageError>`
- **Wire**: `POST /v1/textlanguage`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TextlanguageResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.TextlanguageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.TextlanguageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1TextlanguageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TextlanguageRequest` | `v1TextlanguageRequestSchema` | `src/models/v1-textlanguage-request.ts` |
| `V1TextlanguageResponse` | `v1TextlanguageResponseSchema` | `src/models/v1-textlanguage-response.ts` |

### textsimilarity

- **Signature**: `textsimilarity(request: TextProcessing.TextsimilarityRequest, options?: RequestOptions): ApiPromise<V1TextsimilarityResponse, TextProcessing.TextsimilarityError>`
- **Wire**: `POST /v1/textsimilarity`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TextsimilarityResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.TextsimilarityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.TextsimilarityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1TextsimilarityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TextsimilarityRequest` | `v1TextsimilarityRequestSchema` | `src/models/v1-textsimilarity-request.ts` |
| `V1TextsimilarityResponse` | `v1TextsimilarityResponseSchema` | `src/models/v1-textsimilarity-response.ts` |

### textstyler

- **Signature**: `textstyler(request: TextProcessing.TextstylerRequest, options?: RequestOptions): ApiPromise<V1TextstylerResponse, TextProcessing.TextstylerError>`
- **Wire**: `POST /v1/textstyler`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TextstylerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.TextstylerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.TextstylerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1TextstylerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TextstylerRequest` | `v1TextstylerRequestSchema` | `src/models/v1-textstyler-request.ts` |
| `V1TextstylerResponse` | `v1TextstylerResponseSchema` | `src/models/v1-textstyler-response.ts` |

### textsummarizer

- **Signature**: `textsummarizer(request: TextProcessing.TextsummarizerRequest, options?: RequestOptions): ApiPromise<V1TextsummarizerResponse, TextProcessing.TextsummarizerError>`
- **Wire**: `POST /v1/textsummarizer`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TextsummarizerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.TextsummarizerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.TextsummarizerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1TextsummarizerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TextsummarizerRequest` | `v1TextsummarizerRequestSchema` | `src/models/v1-textsummarizer-request.ts` |
| `V1TextsummarizerResponse` | `v1TextsummarizerResponseSchema` | `src/models/v1-textsummarizer-response.ts` |

### texttoemoji

- **Signature**: `texttoemoji(request: TextProcessing.TexttoemojiRequest, options?: RequestOptions): ApiPromise<V1TexttoemojiResponse, TextProcessing.TexttoemojiError>`
- **Wire**: `POST /v1/texttoemoji`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TexttoemojiResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.TexttoemojiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.TexttoemojiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1TexttoemojiRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TexttoemojiRequest` | `v1TexttoemojiRequestSchema` | `src/models/v1-texttoemoji-request.ts` |
| `V1TexttoemojiResponse` | `v1TexttoemojiResponseSchema` | `src/models/v1-texttoemoji-response.ts` |

### titlecapitalization

- **Signature**: `titlecapitalization(request: TextProcessing.TitlecapitalizationRequest, options?: RequestOptions): ApiPromise<V1TitlecapitalizationResponse, TextProcessing.TitlecapitalizationError>`
- **Wire**: `POST /v1/titlecapitalization`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TitlecapitalizationResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.TitlecapitalizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.TitlecapitalizationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1TitlecapitalizationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TitlecapitalizationRequest` | `v1TitlecapitalizationRequestSchema` | `src/models/v1-titlecapitalization-request.ts` |
| `V1TitlecapitalizationResponse` | `v1TitlecapitalizationResponseSchema` | `src/models/v1-titlecapitalization-response.ts` |

### translator

- **Signature**: `translator(request: TextProcessing.TranslatorRequest, options?: RequestOptions): ApiPromise<V1TranslatorResponse, TextProcessing.TranslatorError>`
- **Wire**: `POST /v1/translator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TranslatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.TranslatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.TranslatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1TranslatorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TranslatorRequest` | `v1TranslatorRequestSchema` | `src/models/v1-translator-request.ts` |
| `V1TranslatorResponse` | `v1TranslatorResponseSchema` | `src/models/v1-translator-response.ts` |

### vowelcounter

- **Signature**: `vowelcounter(request: TextProcessing.VowelcounterRequest, options?: RequestOptions): ApiPromise<V1VowelcounterResponse, TextProcessing.VowelcounterError>`
- **Wire**: `POST /v1/vowelcounter`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1VowelcounterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.VowelcounterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.VowelcounterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1VowelcounterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1VowelcounterRequest` | `v1VowelcounterRequestSchema` | `src/models/v1-vowelcounter-request.ts` |
| `V1VowelcounterResponse` | `v1VowelcounterResponseSchema` | `src/models/v1-vowelcounter-response.ts` |

### websitereadability

- **Signature**: `websitereadability(request: TextProcessing.WebsitereadabilityRequest, options?: RequestOptions): ApiPromise<V1WebsitereadabilityResponse, TextProcessing.WebsitereadabilityError>`
- **Wire**: `POST /v1/websitereadability`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WebsitereadabilityResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.WebsitereadabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.WebsitereadabilityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1WebsitereadabilityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebsitereadabilityRequest` | `v1WebsitereadabilityRequestSchema` | `src/models/v1-websitereadability-request.ts` |
| `V1WebsitereadabilityResponse` | `v1WebsitereadabilityResponseSchema` | `src/models/v1-websitereadability-response.ts` |

### wordopposite

- **Signature**: `wordopposite(request: TextProcessing.WordoppositeRequest, options?: RequestOptions): ApiPromise<V1WordoppositeResponse, TextProcessing.WordoppositeError>`
- **Wire**: `GET /v1/wordopposite`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WordoppositeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.WordoppositeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.WordoppositeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WordoppositeResponse` | `v1WordoppositeResponseSchema` | `src/models/v1-wordopposite-response.ts` |

### wordpronunciation

- **Signature**: `wordpronunciation(request: TextProcessing.WordpronunciationRequest, options?: RequestOptions): ApiPromise<V1WordpronunciationResponse, TextProcessing.WordpronunciationError>`
- **Wire**: `GET /v1/wordpronunciation`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WordpronunciationResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.WordpronunciationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.WordpronunciationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WordpronunciationResponse` | `v1WordpronunciationResponseSchema` | `src/models/v1-wordpronunciation-response.ts` |

### wordrhymes

- **Signature**: `wordrhymes(request: TextProcessing.WordrhymesRequest, options?: RequestOptions): ApiPromise<V1WordrhymesResponse, TextProcessing.WordrhymesError>`
- **Wire**: `GET /v1/wordrhymes`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WordrhymesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `TextProcessing.WordrhymesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextProcessing.WordrhymesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WordrhymesResponse` | `v1WordrhymesResponseSchema` | `src/models/v1-wordrhymes-response.ts` |

