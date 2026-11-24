<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entertainment — operations

Accessor: `client.entertainment` · Source: `api_verve/apis/entertainment.py` · 24 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.entertainment.advice

- **Route**: `GET /v1/advice`
- **Auth**: `api_key`
- **Signature**: `def advice(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1AdviceResponse`
- **Returns (raw)**: `ApiResult[V1AdviceResponse, AdviceErrorBody]`
- **Error**: `AdviceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AdviceResponse` | `api_verve/models/v1_advice_response.py` |
| `AdviceErrorBody` | `api_verve/errors/advice_error.py` |

### client.entertainment.bucketlist

- **Route**: `GET /v1/bucketlist`
- **Auth**: `api_key`
- **Signature**: `def bucketlist(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1BucketlistResponse`
- **Returns (raw)**: `ApiResult[V1BucketlistResponse, BucketlistErrorBody]`
- **Error**: `BucketlistErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BucketlistResponse` | `api_verve/models/v1_bucketlist_response.py` |
| `BucketlistErrorBody` | `api_verve/errors/bucketlist_error.py` |

### client.entertainment.charades

- **Route**: `GET /v1/charades`
- **Auth**: `api_key`
- **Signature**: `def charades(*, category: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `category` — query
- **Returns (parsed)**: `V1CharadesResponse`
- **Returns (raw)**: `ApiResult[V1CharadesResponse, CharadesErrorBody]`
- **Error**: `CharadesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CharadesResponse` | `api_verve/models/v1_charades_response.py` |
| `CharadesErrorBody` | `api_verve/errors/charades_error.py` |

### client.entertainment.chessmovevalidator

- **Route**: `GET /v1/chessmovevalidator`
- **Auth**: `api_key`
- **Signature**: `def chessmovevalidator(move: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `move`
- **Params**: `move` — query
- **Returns (parsed)**: `V1ChessmovevalidatorResponse`
- **Returns (raw)**: `ApiResult[V1ChessmovevalidatorResponse, ChessmovevalidatorErrorBody]`
- **Error**: `ChessmovevalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ChessmovevalidatorResponse` | `api_verve/models/v1_chessmovevalidator_response.py` |
| `ChessmovevalidatorErrorBody` | `api_verve/errors/chessmovevalidator_error.py` |

### client.entertainment.chucknorris

- **Route**: `GET /v1/chucknorris`
- **Auth**: `api_key`
- **Signature**: `def chucknorris(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1ChucknorrisResponse`
- **Returns (raw)**: `ApiResult[V1ChucknorrisResponse, ChucknorrisErrorBody]`
- **Error**: `ChucknorrisErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ChucknorrisResponse` | `api_verve/models/v1_chucknorris_response.py` |
| `ChucknorrisErrorBody` | `api_verve/errors/chucknorris_error.py` |

### client.entertainment.compliments

- **Route**: `GET /v1/compliments`
- **Auth**: `api_key`
- **Signature**: `def compliments(*, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `adult` — query
- **Returns (parsed)**: `V1ComplimentsResponse`
- **Returns (raw)**: `ApiResult[V1ComplimentsResponse, ComplimentsErrorBody]`
- **Error**: `ComplimentsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ComplimentsResponse` | `api_verve/models/v1_compliments_response.py` |
| `ComplimentsErrorBody` | `api_verve/errors/compliments_error.py` |

### client.entertainment.dadjokes

- **Route**: `GET /v1/dadjokes`
- **Auth**: `api_key`
- **Signature**: `def dadjokes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1DadjokesResponse`
- **Returns (raw)**: `ApiResult[V1DadjokesResponse, DadjokesErrorBody]`
- **Error**: `DadjokesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DadjokesResponse` | `api_verve/models/v1_dadjokes_response.py` |
| `DadjokesErrorBody` | `api_verve/errors/dadjokes_error.py` |

### client.entertainment.dndgenerator

- **Route**: `GET /v1/dndgenerator`
- **Auth**: `api_key`
- **Signature**: `def dndgenerator(*, type_: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `type_` — query `type` · `count` — query
- **Returns (parsed)**: `V1DndgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1DndgeneratorResponse, DndgeneratorErrorBody]`
- **Error**: `DndgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DndgeneratorResponse` | `api_verve/models/v1_dndgenerator_response.py` |
| `DndgeneratorErrorBody` | `api_verve/errors/dndgenerator_error.py` |

### client.entertainment.fortuneteller

- **Route**: `GET /v1/fortuneteller`
- **Auth**: `api_key`
- **Signature**: `def fortuneteller(*, category: str | None = None, question: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `category` — query · `question` — query
- **Returns (parsed)**: `V1FortunetellerResponse`
- **Returns (raw)**: `ApiResult[V1FortunetellerResponse, FortunetellerErrorBody]`
- **Error**: `FortunetellerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1FortunetellerResponse` | `api_verve/models/v1_fortuneteller_response.py` |
| `FortunetellerErrorBody` | `api_verve/errors/fortuneteller_error.py` |

### client.entertainment.historicalevents

- **Route**: `GET /v1/historicalevents`
- **Auth**: `api_key`
- **Signature**: `def historicalevents(text: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `text`
- **Params**: `text` — query
- **Returns (parsed)**: `V1HistoricaleventsResponse`
- **Returns (raw)**: `ApiResult[V1HistoricaleventsResponse, HistoricaleventsErrorBody]`
- **Error**: `HistoricaleventsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HistoricaleventsResponse` | `api_verve/models/v1_historicalevents_response.py` |
| `HistoricaleventsErrorBody` | `api_verve/errors/historicalevents_error.py` |

### client.entertainment.lovecalculator

- **Route**: `GET /v1/lovecalculator`
- **Auth**: `api_key`
- **Signature**: `def lovecalculator(name1: str, name2: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name1`, `name2`
- **Params**: `name1` — query · `name2` — query
- **Returns (parsed)**: `V1LovecalculatorResponse`
- **Returns (raw)**: `ApiResult[V1LovecalculatorResponse, LovecalculatorErrorBody]`
- **Error**: `LovecalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LovecalculatorResponse` | `api_verve/models/v1_lovecalculator_response.py` |
| `LovecalculatorErrorBody` | `api_verve/errors/lovecalculator_error.py` |

### client.entertainment.magic8ball

- **Route**: `GET /v1/magic8ball`
- **Auth**: `api_key`
- **Signature**: `def magic8ball(*, question: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `question` — query
- **Returns (parsed)**: `V1Magic8BallResponse`
- **Returns (raw)**: `ApiResult[V1Magic8BallResponse, Magic8BallErrorBody]`
- **Error**: `Magic8BallErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1Magic8BallResponse` | `api_verve/models/v1_magic8_ball_response.py` |
| `Magic8BallErrorBody` | `api_verve/errors/magic8_ball_error.py` |

### client.entertainment.musicnotegenerator

- **Route**: `GET /v1/musicnotegenerator`
- **Auth**: `api_key`
- **Signature**: `def musicnotegenerator(note: str, *, octave: int | None = None, duration: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `note`
- **Params**: `note` — query · `octave` — query · `duration` — query
- **Returns (parsed)**: `V1MusicnotegeneratorResponse`
- **Returns (raw)**: `ApiResult[V1MusicnotegeneratorResponse, MusicnotegeneratorErrorBody]`
- **Error**: `MusicnotegeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MusicnotegeneratorResponse` | `api_verve/models/v1_musicnotegenerator_response.py` |
| `MusicnotegeneratorErrorBody` | `api_verve/errors/musicnotegenerator_error.py` |

### client.entertainment.neverhaveiever

- **Route**: `GET /v1/neverhaveiever`
- **Auth**: `api_key`
- **Signature**: `def neverhaveiever(*, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `adult` — query
- **Returns (parsed)**: `V1NeverhaveieverResponse`
- **Returns (raw)**: `ApiResult[V1NeverhaveieverResponse, NeverhaveieverErrorBody]`
- **Error**: `NeverhaveieverErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1NeverhaveieverResponse` | `api_verve/models/v1_neverhaveiever_response.py` |
| `NeverhaveieverErrorBody` | `api_verve/errors/neverhaveiever_error.py` |

### client.entertainment.pictionary

- **Route**: `GET /v1/pictionary`
- **Auth**: `api_key`
- **Signature**: `def pictionary(*, difficulty: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `difficulty` — query · `count` — query
- **Returns (parsed)**: `V1PictionaryResponse`
- **Returns (raw)**: `ApiResult[V1PictionaryResponse, PictionaryErrorBody]`
- **Error**: `PictionaryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PictionaryResponse` | `api_verve/models/v1_pictionary_response.py` |
| `PictionaryErrorBody` | `api_verve/errors/pictionary_error.py` |

### client.entertainment.randomfacts

- **Route**: `GET /v1/randomfacts`
- **Auth**: `api_key`
- **Signature**: `def randomfacts(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1RandomfactsResponse`
- **Returns (raw)**: `ApiResult[V1RandomfactsResponse, RandomfactsErrorBody]`
- **Error**: `RandomfactsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RandomfactsResponse` | `api_verve/models/v1_randomfacts_response.py` |
| `RandomfactsErrorBody` | `api_verve/errors/randomfacts_error.py` |

### client.entertainment.randomjoke

- **Route**: `GET /v1/randomjoke`
- **Auth**: `api_key`
- **Signature**: `def randomjoke(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1RandomjokeResponse`
- **Returns (raw)**: `ApiResult[V1RandomjokeResponse, RandomjokeErrorBody]`
- **Error**: `RandomjokeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RandomjokeResponse` | `api_verve/models/v1_randomjoke_response.py` |
| `RandomjokeErrorBody` | `api_verve/errors/randomjoke_error.py` |

### client.entertainment.randompun

- **Route**: `GET /v1/randompun`
- **Auth**: `api_key`
- **Signature**: `def randompun(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1RandompunResponse`
- **Returns (raw)**: `ApiResult[V1RandompunResponse, RandompunErrorBody]`
- **Error**: `RandompunErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RandompunResponse` | `api_verve/models/v1_randompun_response.py` |
| `RandompunErrorBody` | `api_verve/errors/randompun_error.py` |

### client.entertainment.randomquote

- **Route**: `GET /v1/randomquote`
- **Auth**: `api_key`
- **Signature**: `def randomquote(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1RandomquoteResponse`
- **Returns (raw)**: `ApiResult[V1RandomquoteResponse, RandomquoteErrorBody]`
- **Error**: `RandomquoteErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RandomquoteResponse` | `api_verve/models/v1_randomquote_response.py` |
| `RandomquoteErrorBody` | `api_verve/errors/randomquote_error.py` |

### client.entertainment.scrabblescorer

- **Route**: `GET /v1/scrabblescorer`
- **Auth**: `api_key`
- **Signature**: `def scrabblescorer(word: str, *, language: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `word`
- **Params**: `word` — query · `language` — query
- **Returns (parsed)**: `V1ScrabblescorerResponse`
- **Returns (raw)**: `ApiResult[V1ScrabblescorerResponse, ScrabblescorerErrorBody]`
- **Error**: `ScrabblescorerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ScrabblescorerResponse` | `api_verve/models/v1_scrabblescorer_response.py` |
| `ScrabblescorerErrorBody` | `api_verve/errors/scrabblescorer_error.py` |

### client.entertainment.sudoku

- **Route**: `GET /v1/sudoku`
- **Auth**: `api_key`
- **Signature**: `def sudoku(*, difficulty: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `difficulty` — query
- **Returns (parsed)**: `V1SudokuResponse`
- **Returns (raw)**: `ApiResult[V1SudokuResponse, SudokuErrorBody]`
- **Error**: `SudokuErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SudokuResponse` | `api_verve/models/v1_sudoku_response.py` |
| `SudokuErrorBody` | `api_verve/errors/sudoku_error.py` |

### client.entertainment.trivia

- **Route**: `GET /v1/trivia`
- **Auth**: `api_key`
- **Signature**: `def trivia(*, category: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `category` — query
- **Returns (parsed)**: `V1TriviaResponse`
- **Returns (raw)**: `ApiResult[V1TriviaResponse, TriviaErrorBody]`
- **Error**: `TriviaErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TriviaResponse` | `api_verve/models/v1_trivia_response.py` |
| `TriviaErrorBody` | `api_verve/errors/trivia_error.py` |

### client.entertainment.truthordare

- **Route**: `GET /v1/truthordare`
- **Auth**: `api_key`
- **Signature**: `def truthordare(*, type_: str | None = None, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `type_` — query `type` · `adult` — query
- **Returns (parsed)**: `V1TruthordareResponse`
- **Returns (raw)**: `ApiResult[V1TruthordareResponse, TruthordareErrorBody]`
- **Error**: `TruthordareErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TruthordareResponse` | `api_verve/models/v1_truthordare_response.py` |
| `TruthordareErrorBody` | `api_verve/errors/truthordare_error.py` |

### client.entertainment.wordlehelper

- **Route**: `GET /v1/wordlehelper`
- **Auth**: `api_key`
- **Signature**: `def wordlehelper(*, green: str | None = None, yellow: str | None = None, gray: str | None = None, pattern: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `green` — query · `yellow` — query · `gray` — query · `pattern` — query · `limit` — query
- **Returns (parsed)**: `V1WordlehelperResponse`
- **Returns (raw)**: `ApiResult[V1WordlehelperResponse, WordlehelperErrorBody]`
- **Error**: `WordlehelperErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WordlehelperResponse` | `api_verve/models/v1_wordlehelper_response.py` |
| `WordlehelperErrorBody` | `api_verve/errors/wordlehelper_error.py` |

