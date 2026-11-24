<!-- Generated file — do not edit; regenerated with the SDK. -->

# Games — operations

Accessor: `client.games` · Source: `src/resources/games.ts` · 21 operations · Request and error types: namespace `Games`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acrostic

- **Signature**: `acrostic(request: Games.AcrosticRequest, options?: RequestOptions): ApiPromise<V1AcrosticResponse, Games.AcrosticError>`
- **Wire**: `GET /v1/acrostic`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AcrosticResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.AcrosticError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.AcrosticRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | yes |
| `theme` | `query` | `string` | no |
| `image` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AcrosticResponse` | `v1AcrosticResponseSchema` | `src/models/v1-acrostic-response.ts` |

### anagrampuzzle

- **Signature**: `anagrampuzzle(request?: Games.AnagrampuzzleRequest, options?: RequestOptions): ApiPromise<V1AnagrampuzzleResponse, Games.AnagrampuzzleError>`
- **Wire**: `GET /v1/anagrampuzzle`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AnagrampuzzleResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.AnagrampuzzleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.AnagrampuzzleRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `word` | `query` | `string` | no |
| `count` | `query` | `number` | no |
| `difficulty` | `query` | `string` | no |
| `image` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AnagrampuzzleResponse` | `v1AnagrampuzzleResponseSchema` | `src/models/v1-anagrampuzzle-response.ts` |

### carddeckshuffler

- **Signature**: `carddeckshuffler(request?: Games.CarddeckshufflerRequest, options?: RequestOptions): ApiPromise<V1CarddeckshufflerResponse, Games.CarddeckshufflerError>`
- **Wire**: `GET /v1/carddeckshuffler`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CarddeckshufflerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.CarddeckshufflerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.CarddeckshufflerRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `decks` | `query` | `number` | no |
| `jokers` | `query` | `boolean` | no |
| `method` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CarddeckshufflerResponse` | `v1CarddeckshufflerResponseSchema` | `src/models/v1-carddeckshuffler-response.ts` |

### coinflipper

- **Signature**: `coinflipper(request?: Games.CoinflipperRequest, options?: RequestOptions): ApiPromise<V1CoinflipperResponse, Games.CoinflipperError>`
- **Wire**: `GET /v1/coinflipper`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CoinflipperResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.CoinflipperError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.CoinflipperRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flips` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CoinflipperResponse` | `v1CoinflipperResponseSchema` | `src/models/v1-coinflipper-response.ts` |

### crossword

- **Signature**: `crossword(request?: Games.CrosswordRequest, options?: RequestOptions): ApiPromise<V1CrosswordResponse, Games.CrosswordError>`
- **Wire**: `GET /v1/crossword`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CrosswordResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.CrosswordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.CrosswordRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `size` | `query` | `string` | no |
| `theme` | `query` | `string` | no |
| `difficulty` | `query` | `string` | no |
| `image` | `query` | `boolean` | no |
| `solutionImage` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CrosswordResponse` | `v1CrosswordResponseSchema` | `src/models/v1-crossword-response.ts` |

### cryptogram

- **Signature**: `cryptogram(request?: Games.CryptogramRequest, options?: RequestOptions): ApiPromise<V1CryptogramResponse, Games.CryptogramError>`
- **Wire**: `GET /v1/cryptogram`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CryptogramResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.CryptogramError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.CryptogramRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `text` | `query` | `string` | no |
| `random` | `query` | `boolean` | no |
| `image` | `query` | `boolean` | no |
| `solutionImage` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CryptogramResponse` | `v1CryptogramResponseSchema` | `src/models/v1-cryptogram-response.ts` |

### diceroller

- **Signature**: `diceroller(request?: Games.DicerollerRequest, options?: RequestOptions): ApiPromise<V1DicerollerResponse, Games.DicerollerError>`
- **Wire**: `GET /v1/diceroller`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DicerollerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.DicerollerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.DicerollerRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dice` | `query` | `string` | no |
| `modifier` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DicerollerResponse` | `v1DicerollerResponseSchema` | `src/models/v1-diceroller-response.ts` |

### fillintheblanks

- **Signature**: `fillintheblanks(request?: Games.FillintheblanksRequest, options?: RequestOptions): ApiPromise<V1FillintheblanksResponse, Games.FillintheblanksError>`
- **Wire**: `GET /v1/fillintheblanks`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1FillintheblanksResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.FillintheblanksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.FillintheblanksRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `query` | `string` | no |
| `count` | `query` | `number` | no |
| `difficulty` | `query` | `string` | no |
| `image` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FillintheblanksResponse` | `v1FillintheblanksResponseSchema` | `src/models/v1-fillintheblanks-response.ts` |

### fortunecookie

- **Signature**: `fortunecookie(options?: RequestOptions): ApiPromise<V1FortunecookieResponse, Games.FortunecookieError>`
- **Wire**: `GET /v1/fortunecookie`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1FortunecookieResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.FortunecookieError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FortunecookieResponse` | `v1FortunecookieResponseSchema` | `src/models/v1-fortunecookie-response.ts` |

### gamecharacter

- **Signature**: `gamecharacter(request?: Games.GamecharacterRequest, options?: RequestOptions): ApiPromise<V1GamecharacterResponse, Games.GamecharacterError>`
- **Wire**: `GET /v1/gamecharacter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1GamecharacterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.GamecharacterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.GamecharacterRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `race` | `query` | `string` | no |
| `class` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1GamecharacterResponse` | `v1GamecharacterResponseSchema` | `src/models/v1-gamecharacter-response.ts` |

### hangmanword

- **Signature**: `hangmanword(request?: Games.HangmanwordRequest, options?: RequestOptions): ApiPromise<V1HangmanwordResponse, Games.HangmanwordError>`
- **Wire**: `GET /v1/hangmanword`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1HangmanwordResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.HangmanwordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.HangmanwordRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `query` | `string` | no |
| `difficulty` | `query` | `string` | no |
| `count` | `query` | `number` | no |
| `image` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HangmanwordResponse` | `v1HangmanwordResponseSchema` | `src/models/v1-hangmanword-response.ts` |

### lotterypicker

- **Signature**: `lotterypicker(request?: Games.LotterypickerRequest, options?: RequestOptions): ApiPromise<V1LotterypickerResponse, Games.LotterypickerError>`
- **Wire**: `GET /v1/lotterypicker`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1LotterypickerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.LotterypickerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.LotterypickerRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `game` | `query` | `string` | no |
| `numbers` | `query` | `number` | no |
| `max` | `query` | `number` | no |
| `bonus` | `query` | `number` | no |
| `tickets` | `query` | `number` | no |
| `bonusmax` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LotterypickerResponse` | `v1LotterypickerResponseSchema` | `src/models/v1-lotterypicker-response.ts` |

### madlibs

- **Signature**: `madlibs(request?: Games.MadlibsRequest, options?: RequestOptions): ApiPromise<V1MadlibsResponse, Games.MadlibsError>`
- **Wire**: `GET /v1/madlibs`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MadlibsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.MadlibsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.MadlibsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `query` | `string` | no |
| `count` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MadlibsResponse` | `v1MadlibsResponseSchema` | `src/models/v1-madlibs-response.ts` |

### maze

- **Signature**: `maze(request?: Games.MazeRequest, options?: RequestOptions): ApiPromise<V1MazeResponse, Games.MazeError>`
- **Wire**: `GET /v1/maze`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MazeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.MazeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.MazeRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `width` | `query` | `number` | no |
| `height` | `query` | `number` | no |
| `difficulty` | `query` | `string` | no |
| `image` | `query` | `boolean` | no |
| `solutionImage` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MazeResponse` | `v1MazeResponseSchema` | `src/models/v1-maze-response.ts` |

### rockpaperscissors

- **Signature**: `rockpaperscissors(request?: Games.RockpaperscissorsRequest, options?: RequestOptions): ApiPromise<V1RockpaperscissorsResponse, Games.RockpaperscissorsError>`
- **Wire**: `GET /v1/rockpaperscissors`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RockpaperscissorsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.RockpaperscissorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.RockpaperscissorsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `choice` | `query` | `string` | no |
| `rounds` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RockpaperscissorsResponse` | `v1RockpaperscissorsResponseSchema` | `src/models/v1-rockpaperscissors-response.ts` |

### slotmachine

- **Signature**: `slotmachine(request?: Games.SlotmachineRequest, options?: RequestOptions): ApiPromise<V1SlotmachineResponse, Games.SlotmachineError>`
- **Wire**: `GET /v1/slotmachine`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SlotmachineResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.SlotmachineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.SlotmachineRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `spins` | `query` | `number` | no |
| `reels` | `query` | `number` | no |
| `bet` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SlotmachineResponse` | `v1SlotmachineResponseSchema` | `src/models/v1-slotmachine-response.ts` |

### spellingbee

- **Signature**: `spellingbee(request?: Games.SpellingbeeRequest, options?: RequestOptions): ApiPromise<V1SpellingbeeResponse, Games.SpellingbeeError>`
- **Wire**: `GET /v1/spellingbee`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SpellingbeeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.SpellingbeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.SpellingbeeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `difficulty` | `query` | `string` | no |
| `image` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SpellingbeeResponse` | `v1SpellingbeeResponseSchema` | `src/models/v1-spellingbee-response.ts` |

### superheroname

- **Signature**: `superheroname(request?: Games.SuperheronameRequest, options?: RequestOptions): ApiPromise<V1SuperheronameResponse, Games.SuperheronameError>`
- **Wire**: `GET /v1/superheroname`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SuperheronameResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.SuperheronameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.SuperheronameRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `style` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SuperheronameResponse` | `v1SuperheronameResponseSchema` | `src/models/v1-superheroname-response.ts` |

### wordladder

- **Signature**: `wordladder(request?: Games.WordladderRequest, options?: RequestOptions): ApiPromise<V1WordladderResponse, Games.WordladderError>`
- **Wire**: `GET /v1/wordladder`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WordladderResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.WordladderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.WordladderRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `start` | `query` | `string` | no |
| `end` | `query` | `string` | no |
| `difficulty` | `query` | `string` | no |
| `count` | `query` | `number` | no |
| `image` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WordladderResponse` | `v1WordladderResponseSchema` | `src/models/v1-wordladder-response.ts` |

### wordscramble

- **Signature**: `wordscramble(request?: Games.WordscrambleRequest, options?: RequestOptions): ApiPromise<V1WordscrambleResponse, Games.WordscrambleError>`
- **Wire**: `GET /v1/wordscramble`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WordscrambleResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.WordscrambleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.WordscrambleRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `difficulty` | `query` | `string` | no |
| `count` | `query` | `number` | no |
| `image` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WordscrambleResponse` | `v1WordscrambleResponseSchema` | `src/models/v1-wordscramble-response.ts` |

### wordsearch

- **Signature**: `wordsearch(request: Games.WordsearchRequest, options?: RequestOptions): ApiPromise<V1WordsearchResponse, Games.WordsearchError>`
- **Wire**: `POST /v1/wordsearch`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WordsearchResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Games.WordsearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Games.WordsearchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1WordsearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WordsearchRequest` | `v1WordsearchRequestSchema` | `src/models/v1-wordsearch-request.ts` |
| `V1WordsearchResponse` | `v1WordsearchResponseSchema` | `src/models/v1-wordsearch-response.ts` |

