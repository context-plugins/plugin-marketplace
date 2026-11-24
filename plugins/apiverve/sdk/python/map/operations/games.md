<!-- Generated file — do not edit; regenerated with the SDK. -->

# Games — operations

Accessor: `client.games` · Source: `api_verve/apis/games.py` · 21 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.games.acrostic

- **Route**: `GET /v1/acrostic`
- **Auth**: `api_key`
- **Signature**: `def acrostic(word: str, *, theme: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `word`
- **Params**: `word` — query · `theme` — query · `image` — query
- **Returns (parsed)**: `V1AcrosticResponse`
- **Returns (raw)**: `ApiResult[V1AcrosticResponse, AcrosticErrorBody]`
- **Error**: `AcrosticErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AcrosticResponse` | `api_verve/models/v1_acrostic_response.py` |
| `AcrosticErrorBody` | `api_verve/errors/acrostic_error.py` |

### client.games.anagrampuzzle

- **Route**: `GET /v1/anagrampuzzle`
- **Auth**: `api_key`
- **Signature**: `def anagrampuzzle(*, word: str | None = None, count: int | None = None, difficulty: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `word` — query · `count` — query · `difficulty` — query · `image` — query
- **Returns (parsed)**: `V1AnagrampuzzleResponse`
- **Returns (raw)**: `ApiResult[V1AnagrampuzzleResponse, AnagrampuzzleErrorBody]`
- **Error**: `AnagrampuzzleErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AnagrampuzzleResponse` | `api_verve/models/v1_anagrampuzzle_response.py` |
| `AnagrampuzzleErrorBody` | `api_verve/errors/anagrampuzzle_error.py` |

### client.games.carddeckshuffler

- **Route**: `GET /v1/carddeckshuffler`
- **Auth**: `api_key`
- **Signature**: `def carddeckshuffler(*, decks: int | None = None, jokers: bool | None = None, method: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `decks` — query · `jokers` — query · `method` — query
- **Returns (parsed)**: `V1CarddeckshufflerResponse`
- **Returns (raw)**: `ApiResult[V1CarddeckshufflerResponse, CarddeckshufflerErrorBody]`
- **Error**: `CarddeckshufflerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CarddeckshufflerResponse` | `api_verve/models/v1_carddeckshuffler_response.py` |
| `CarddeckshufflerErrorBody` | `api_verve/errors/carddeckshuffler_error.py` |

### client.games.coinflipper

- **Route**: `GET /v1/coinflipper`
- **Auth**: `api_key`
- **Signature**: `def coinflipper(*, flips: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `flips` — query
- **Returns (parsed)**: `V1CoinflipperResponse`
- **Returns (raw)**: `ApiResult[V1CoinflipperResponse, CoinflipperErrorBody]`
- **Error**: `CoinflipperErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CoinflipperResponse` | `api_verve/models/v1_coinflipper_response.py` |
| `CoinflipperErrorBody` | `api_verve/errors/coinflipper_error.py` |

### client.games.crossword

- **Route**: `GET /v1/crossword`
- **Auth**: `api_key`
- **Signature**: `def crossword(*, size: str | None = None, theme: str | None = None, difficulty: str | None = None, image: bool | None = None, solution_image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `size` — query · `theme` — query · `difficulty` — query · `image` — query · `solution_image` — query `solutionImage`
- **Returns (parsed)**: `V1CrosswordResponse`
- **Returns (raw)**: `ApiResult[V1CrosswordResponse, CrosswordErrorBody]`
- **Error**: `CrosswordErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CrosswordResponse` | `api_verve/models/v1_crossword_response.py` |
| `CrosswordErrorBody` | `api_verve/errors/crossword_error.py` |

### client.games.cryptogram

- **Route**: `GET /v1/cryptogram`
- **Auth**: `api_key`
- **Signature**: `def cryptogram(*, text: str | None = None, random: bool | None = None, image: bool | None = None, solution_image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `text` — query · `random` — query · `image` — query · `solution_image` — query `solutionImage`
- **Returns (parsed)**: `V1CryptogramResponse`
- **Returns (raw)**: `ApiResult[V1CryptogramResponse, CryptogramErrorBody]`
- **Error**: `CryptogramErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CryptogramResponse` | `api_verve/models/v1_cryptogram_response.py` |
| `CryptogramErrorBody` | `api_verve/errors/cryptogram_error.py` |

### client.games.diceroller

- **Route**: `GET /v1/diceroller`
- **Auth**: `api_key`
- **Signature**: `def diceroller(*, dice: str | None = None, modifier: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `dice` — query · `modifier` — query
- **Returns (parsed)**: `V1DicerollerResponse`
- **Returns (raw)**: `ApiResult[V1DicerollerResponse, DicerollerErrorBody]`
- **Error**: `DicerollerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DicerollerResponse` | `api_verve/models/v1_diceroller_response.py` |
| `DicerollerErrorBody` | `api_verve/errors/diceroller_error.py` |

### client.games.fillintheblanks

- **Route**: `GET /v1/fillintheblanks`
- **Auth**: `api_key`
- **Signature**: `def fillintheblanks(*, category: str | None = None, count: int | None = None, difficulty: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `category` — query · `count` — query · `difficulty` — query · `image` — query
- **Returns (parsed)**: `V1FillintheblanksResponse`
- **Returns (raw)**: `ApiResult[V1FillintheblanksResponse, FillintheblanksErrorBody]`
- **Error**: `FillintheblanksErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1FillintheblanksResponse` | `api_verve/models/v1_fillintheblanks_response.py` |
| `FillintheblanksErrorBody` | `api_verve/errors/fillintheblanks_error.py` |

### client.games.fortunecookie

- **Route**: `GET /v1/fortunecookie`
- **Auth**: `api_key`
- **Signature**: `def fortunecookie(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1FortunecookieResponse`
- **Returns (raw)**: `ApiResult[V1FortunecookieResponse, FortunecookieErrorBody]`
- **Error**: `FortunecookieErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1FortunecookieResponse` | `api_verve/models/v1_fortunecookie_response.py` |
| `FortunecookieErrorBody` | `api_verve/errors/fortunecookie_error.py` |

### client.games.gamecharacter

- **Route**: `GET /v1/gamecharacter`
- **Auth**: `api_key`
- **Signature**: `def gamecharacter(*, race: str | None = None, class_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `race` — query · `class_` — query `class`
- **Returns (parsed)**: `V1GamecharacterResponse`
- **Returns (raw)**: `ApiResult[V1GamecharacterResponse, GamecharacterErrorBody]`
- **Error**: `GamecharacterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1GamecharacterResponse` | `api_verve/models/v1_gamecharacter_response.py` |
| `GamecharacterErrorBody` | `api_verve/errors/gamecharacter_error.py` |

### client.games.hangmanword

- **Route**: `GET /v1/hangmanword`
- **Auth**: `api_key`
- **Signature**: `def hangmanword(*, category: str | None = None, difficulty: str | None = None, count: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `category` — query · `difficulty` — query · `count` — query · `image` — query
- **Returns (parsed)**: `V1HangmanwordResponse`
- **Returns (raw)**: `ApiResult[V1HangmanwordResponse, HangmanwordErrorBody]`
- **Error**: `HangmanwordErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HangmanwordResponse` | `api_verve/models/v1_hangmanword_response.py` |
| `HangmanwordErrorBody` | `api_verve/errors/hangmanword_error.py` |

### client.games.lotterypicker

- **Route**: `GET /v1/lotterypicker`
- **Auth**: `api_key`
- **Signature**: `def lotterypicker(*, game: str | None = None, numbers: int | None = None, max_: int | None = None, bonus: int | None = None, tickets: int | None = None, bonusmax: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `game` — query · `numbers` — query · `max_` — query `max` · `bonus` — query · `tickets` — query · `bonusmax` — query
- **Returns (parsed)**: `V1LotterypickerResponse`
- **Returns (raw)**: `ApiResult[V1LotterypickerResponse, LotterypickerErrorBody]`
- **Error**: `LotterypickerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LotterypickerResponse` | `api_verve/models/v1_lotterypicker_response.py` |
| `LotterypickerErrorBody` | `api_verve/errors/lotterypicker_error.py` |

### client.games.madlibs

- **Route**: `GET /v1/madlibs`
- **Auth**: `api_key`
- **Signature**: `def madlibs(*, category: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `category` — query · `count` — query
- **Returns (parsed)**: `V1MadlibsResponse`
- **Returns (raw)**: `ApiResult[V1MadlibsResponse, MadlibsErrorBody]`
- **Error**: `MadlibsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MadlibsResponse` | `api_verve/models/v1_madlibs_response.py` |
| `MadlibsErrorBody` | `api_verve/errors/madlibs_error.py` |

### client.games.maze

- **Route**: `GET /v1/maze`
- **Auth**: `api_key`
- **Signature**: `def maze(*, width: int | None = None, height: int | None = None, difficulty: str | None = None, image: bool | None = None, solution_image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `width` — query · `height` — query · `difficulty` — query · `image` — query · `solution_image` — query `solutionImage`
- **Returns (parsed)**: `V1MazeResponse`
- **Returns (raw)**: `ApiResult[V1MazeResponse, MazeErrorBody]`
- **Error**: `MazeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MazeResponse` | `api_verve/models/v1_maze_response.py` |
| `MazeErrorBody` | `api_verve/errors/maze_error.py` |

### client.games.rockpaperscissors

- **Route**: `GET /v1/rockpaperscissors`
- **Auth**: `api_key`
- **Signature**: `def rockpaperscissors(*, choice: str | None = None, rounds: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `choice` — query · `rounds` — query
- **Returns (parsed)**: `V1RockpaperscissorsResponse`
- **Returns (raw)**: `ApiResult[V1RockpaperscissorsResponse, RockpaperscissorsErrorBody]`
- **Error**: `RockpaperscissorsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RockpaperscissorsResponse` | `api_verve/models/v1_rockpaperscissors_response.py` |
| `RockpaperscissorsErrorBody` | `api_verve/errors/rockpaperscissors_error.py` |

### client.games.slotmachine

- **Route**: `GET /v1/slotmachine`
- **Auth**: `api_key`
- **Signature**: `def slotmachine(*, spins: int | None = None, reels: int | None = None, bet: float | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `spins` — query · `reels` — query · `bet` — query
- **Returns (parsed)**: `V1SlotmachineResponse`
- **Returns (raw)**: `ApiResult[V1SlotmachineResponse, SlotmachineErrorBody]`
- **Error**: `SlotmachineErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SlotmachineResponse` | `api_verve/models/v1_slotmachine_response.py` |
| `SlotmachineErrorBody` | `api_verve/errors/slotmachine_error.py` |

### client.games.spellingbee

- **Route**: `GET /v1/spellingbee`
- **Auth**: `api_key`
- **Signature**: `def spellingbee(*, difficulty: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `difficulty` — query · `image` — query
- **Returns (parsed)**: `V1SpellingbeeResponse`
- **Returns (raw)**: `ApiResult[V1SpellingbeeResponse, SpellingbeeErrorBody]`
- **Error**: `SpellingbeeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SpellingbeeResponse` | `api_verve/models/v1_spellingbee_response.py` |
| `SpellingbeeErrorBody` | `api_verve/errors/spellingbee_error.py` |

### client.games.superheroname

- **Route**: `GET /v1/superheroname`
- **Auth**: `api_key`
- **Signature**: `def superheroname(*, style: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `style` — query
- **Returns (parsed)**: `V1SuperheronameResponse`
- **Returns (raw)**: `ApiResult[V1SuperheronameResponse, SuperheronameErrorBody]`
- **Error**: `SuperheronameErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SuperheronameResponse` | `api_verve/models/v1_superheroname_response.py` |
| `SuperheronameErrorBody` | `api_verve/errors/superheroname_error.py` |

### client.games.wordladder

- **Route**: `GET /v1/wordladder`
- **Auth**: `api_key`
- **Signature**: `def wordladder(*, start: str | None = None, end: str | None = None, difficulty: str | None = None, count: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `start` — query · `end` — query · `difficulty` — query · `count` — query · `image` — query
- **Returns (parsed)**: `V1WordladderResponse`
- **Returns (raw)**: `ApiResult[V1WordladderResponse, WordladderErrorBody]`
- **Error**: `WordladderErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WordladderResponse` | `api_verve/models/v1_wordladder_response.py` |
| `WordladderErrorBody` | `api_verve/errors/wordladder_error.py` |

### client.games.wordscramble

- **Route**: `GET /v1/wordscramble`
- **Auth**: `api_key`
- **Signature**: `def wordscramble(*, difficulty: str | None = None, count: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `difficulty` — query · `count` — query · `image` — query
- **Returns (parsed)**: `V1WordscrambleResponse`
- **Returns (raw)**: `ApiResult[V1WordscrambleResponse, WordscrambleErrorBody]`
- **Error**: `WordscrambleErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WordscrambleResponse` | `api_verve/models/v1_wordscramble_response.py` |
| `WordscrambleErrorBody` | `api_verve/errors/wordscramble_error.py` |

### client.games.wordsearch

- **Route**: `POST /v1/wordsearch`
- **Auth**: `api_key`
- **Signature**: `def wordsearch(body: V1WordsearchRequest | V1WordsearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1WordsearchResponse`
- **Returns (raw)**: `ApiResult[V1WordsearchResponse, WordsearchErrorBody]`
- **Error**: `WordsearchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WordsearchRequest` | `api_verve/models/v1_wordsearch_request.py` |
| `V1WordsearchRequestDict` | `api_verve/models/v1_wordsearch_request.py` |
| `V1WordsearchResponse` | `api_verve/models/v1_wordsearch_response.py` |
| `WordsearchErrorBody` | `api_verve/errors/wordsearch_error.py` |

