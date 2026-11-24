<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entertainment — operations

Accessor: `client.entertainment` · Source: `src/resources/entertainment.ts` · 24 operations · Request and error types: namespace `Entertainment`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### advice

- **Signature**: `advice(options?: RequestOptions): ApiPromise<V1AdviceResponse, Entertainment.AdviceError>`
- **Wire**: `GET /v1/advice`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AdviceResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.AdviceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AdviceResponse` | `v1AdviceResponseSchema` | `src/models/v1-advice-response.ts` |

### bucketlist

- **Signature**: `bucketlist(options?: RequestOptions): ApiPromise<V1BucketlistResponse, Entertainment.BucketlistError>`
- **Wire**: `GET /v1/bucketlist`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BucketlistResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.BucketlistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BucketlistResponse` | `v1BucketlistResponseSchema` | `src/models/v1-bucketlist-response.ts` |

### charades

- **Signature**: `charades(request?: Entertainment.CharadesRequest, options?: RequestOptions): ApiPromise<V1CharadesResponse, Entertainment.CharadesError>`
- **Wire**: `GET /v1/charades`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CharadesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.CharadesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.CharadesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CharadesResponse` | `v1CharadesResponseSchema` | `src/models/v1-charades-response.ts` |

### chessmovevalidator

- **Signature**: `chessmovevalidator(request: Entertainment.ChessmovevalidatorRequest, options?: RequestOptions): ApiPromise<V1ChessmovevalidatorResponse, Entertainment.ChessmovevalidatorError>`
- **Wire**: `GET /v1/chessmovevalidator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ChessmovevalidatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.ChessmovevalidatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.ChessmovevalidatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `move` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ChessmovevalidatorResponse` | `v1ChessmovevalidatorResponseSchema` | `src/models/v1-chessmovevalidator-response.ts` |

### chucknorris

- **Signature**: `chucknorris(options?: RequestOptions): ApiPromise<V1ChucknorrisResponse, Entertainment.ChucknorrisError>`
- **Wire**: `GET /v1/chucknorris`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ChucknorrisResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.ChucknorrisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ChucknorrisResponse` | `v1ChucknorrisResponseSchema` | `src/models/v1-chucknorris-response.ts` |

### compliments

- **Signature**: `compliments(request?: Entertainment.ComplimentsRequest, options?: RequestOptions): ApiPromise<V1ComplimentsResponse, Entertainment.ComplimentsError>`
- **Wire**: `GET /v1/compliments`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ComplimentsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.ComplimentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.ComplimentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `adult` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ComplimentsResponse` | `v1ComplimentsResponseSchema` | `src/models/v1-compliments-response.ts` |

### dadjokes

- **Signature**: `dadjokes(options?: RequestOptions): ApiPromise<V1DadjokesResponse, Entertainment.DadjokesError>`
- **Wire**: `GET /v1/dadjokes`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DadjokesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.DadjokesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DadjokesResponse` | `v1DadjokesResponseSchema` | `src/models/v1-dadjokes-response.ts` |

### dndgenerator

- **Signature**: `dndgenerator(request?: Entertainment.DndgeneratorRequest, options?: RequestOptions): ApiPromise<V1DndgeneratorResponse, Entertainment.DndgeneratorError>`
- **Wire**: `GET /v1/dndgenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DndgeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.DndgeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.DndgeneratorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `string` | no |
| `count` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DndgeneratorResponse` | `v1DndgeneratorResponseSchema` | `src/models/v1-dndgenerator-response.ts` |

### fortuneteller

- **Signature**: `fortuneteller(request?: Entertainment.FortunetellerRequest, options?: RequestOptions): ApiPromise<V1FortunetellerResponse, Entertainment.FortunetellerError>`
- **Wire**: `GET /v1/fortuneteller`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1FortunetellerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.FortunetellerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.FortunetellerRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `query` | `string` | no |
| `question` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FortunetellerResponse` | `v1FortunetellerResponseSchema` | `src/models/v1-fortuneteller-response.ts` |

### historicalevents

- **Signature**: `historicalevents(request: Entertainment.HistoricaleventsRequest, options?: RequestOptions): ApiPromise<V1HistoricaleventsResponse, Entertainment.HistoricaleventsError>`
- **Wire**: `GET /v1/historicalevents`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1HistoricaleventsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.HistoricaleventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.HistoricaleventsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `text` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HistoricaleventsResponse` | `v1HistoricaleventsResponseSchema` | `src/models/v1-historicalevents-response.ts` |

### lovecalculator

- **Signature**: `lovecalculator(request: Entertainment.LovecalculatorRequest, options?: RequestOptions): ApiPromise<V1LovecalculatorResponse, Entertainment.LovecalculatorError>`
- **Wire**: `GET /v1/lovecalculator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1LovecalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.LovecalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.LovecalculatorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name1` | `query` | `string` | yes |
| `name2` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LovecalculatorResponse` | `v1LovecalculatorResponseSchema` | `src/models/v1-lovecalculator-response.ts` |

### magic8Ball

- **Signature**: `magic8Ball(request?: Entertainment.Magic8BallRequest, options?: RequestOptions): ApiPromise<V1Magic8BallResponse, Entertainment.Magic8BallError>`
- **Wire**: `GET /v1/magic8ball`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1Magic8BallResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.Magic8BallError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.Magic8BallRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `question` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1Magic8BallResponse` | `v1Magic8BallResponseSchema` | `src/models/v1-magic8-ball-response.ts` |

### musicnotegenerator

- **Signature**: `musicnotegenerator(request: Entertainment.MusicnotegeneratorRequest, options?: RequestOptions): ApiPromise<V1MusicnotegeneratorResponse, Entertainment.MusicnotegeneratorError>`
- **Wire**: `GET /v1/musicnotegenerator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MusicnotegeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.MusicnotegeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.MusicnotegeneratorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `note` | `query` | `string` | yes |
| `octave` | `query` | `number` | no |
| `duration` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MusicnotegeneratorResponse` | `v1MusicnotegeneratorResponseSchema` | `src/models/v1-musicnotegenerator-response.ts` |

### neverhaveiever

- **Signature**: `neverhaveiever(request?: Entertainment.NeverhaveieverRequest, options?: RequestOptions): ApiPromise<V1NeverhaveieverResponse, Entertainment.NeverhaveieverError>`
- **Wire**: `GET /v1/neverhaveiever`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1NeverhaveieverResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.NeverhaveieverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.NeverhaveieverRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `adult` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1NeverhaveieverResponse` | `v1NeverhaveieverResponseSchema` | `src/models/v1-neverhaveiever-response.ts` |

### pictionary

- **Signature**: `pictionary(request?: Entertainment.PictionaryRequest, options?: RequestOptions): ApiPromise<V1PictionaryResponse, Entertainment.PictionaryError>`
- **Wire**: `GET /v1/pictionary`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PictionaryResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.PictionaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.PictionaryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `difficulty` | `query` | `string` | no |
| `count` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PictionaryResponse` | `v1PictionaryResponseSchema` | `src/models/v1-pictionary-response.ts` |

### randomfacts

- **Signature**: `randomfacts(options?: RequestOptions): ApiPromise<V1RandomfactsResponse, Entertainment.RandomfactsError>`
- **Wire**: `GET /v1/randomfacts`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RandomfactsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.RandomfactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RandomfactsResponse` | `v1RandomfactsResponseSchema` | `src/models/v1-randomfacts-response.ts` |

### randomjoke

- **Signature**: `randomjoke(options?: RequestOptions): ApiPromise<V1RandomjokeResponse, Entertainment.RandomjokeError>`
- **Wire**: `GET /v1/randomjoke`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RandomjokeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.RandomjokeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RandomjokeResponse` | `v1RandomjokeResponseSchema` | `src/models/v1-randomjoke-response.ts` |

### randompun

- **Signature**: `randompun(options?: RequestOptions): ApiPromise<V1RandompunResponse, Entertainment.RandompunError>`
- **Wire**: `GET /v1/randompun`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RandompunResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.RandompunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RandompunResponse` | `v1RandompunResponseSchema` | `src/models/v1-randompun-response.ts` |

### randomquote

- **Signature**: `randomquote(options?: RequestOptions): ApiPromise<V1RandomquoteResponse, Entertainment.RandomquoteError>`
- **Wire**: `GET /v1/randomquote`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RandomquoteResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.RandomquoteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RandomquoteResponse` | `v1RandomquoteResponseSchema` | `src/models/v1-randomquote-response.ts` |

### scrabblescorer

- **Signature**: `scrabblescorer(request: Entertainment.ScrabblescorerRequest, options?: RequestOptions): ApiPromise<V1ScrabblescorerResponse, Entertainment.ScrabblescorerError>`
- **Wire**: `GET /v1/scrabblescorer`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ScrabblescorerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.ScrabblescorerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.ScrabblescorerRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | yes |
| `language` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ScrabblescorerResponse` | `v1ScrabblescorerResponseSchema` | `src/models/v1-scrabblescorer-response.ts` |

### sudoku

- **Signature**: `sudoku(request?: Entertainment.SudokuRequest, options?: RequestOptions): ApiPromise<V1SudokuResponse, Entertainment.SudokuError>`
- **Wire**: `GET /v1/sudoku`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SudokuResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.SudokuError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.SudokuRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `difficulty` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SudokuResponse` | `v1SudokuResponseSchema` | `src/models/v1-sudoku-response.ts` |

### trivia

- **Signature**: `trivia(request?: Entertainment.TriviaRequest, options?: RequestOptions): ApiPromise<V1TriviaResponse, Entertainment.TriviaError>`
- **Wire**: `GET /v1/trivia`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TriviaResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.TriviaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.TriviaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TriviaResponse` | `v1TriviaResponseSchema` | `src/models/v1-trivia-response.ts` |

### truthordare

- **Signature**: `truthordare(request?: Entertainment.TruthordareRequest, options?: RequestOptions): ApiPromise<V1TruthordareResponse, Entertainment.TruthordareError>`
- **Wire**: `GET /v1/truthordare`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TruthordareResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.TruthordareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.TruthordareRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `string` | no |
| `adult` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TruthordareResponse` | `v1TruthordareResponseSchema` | `src/models/v1-truthordare-response.ts` |

### wordlehelper

- **Signature**: `wordlehelper(request?: Entertainment.WordlehelperRequest, options?: RequestOptions): ApiPromise<V1WordlehelperResponse, Entertainment.WordlehelperError>`
- **Wire**: `GET /v1/wordlehelper`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WordlehelperResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Entertainment.WordlehelperError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entertainment.WordlehelperRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `green` | `query` | `string` | no |
| `yellow` | `query` | `string` | no |
| `gray` | `query` | `string` | no |
| `pattern` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WordlehelperResponse` | `v1WordlehelperResponseSchema` | `src/models/v1-wordlehelper-response.ts` |

