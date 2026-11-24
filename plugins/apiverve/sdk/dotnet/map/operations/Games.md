<!-- Generated file — do not edit; regenerated with the SDK. -->

# Games — operations

Accessor: `client.Games` · Source: `src/ApiVerve/Api/Games.cs` · 21 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Acrostic

- **Auth**: `options.ApiKey`
- **Signature**: `Acrostic(AcrosticRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Word`
- **Query params (wire ← C#)**: `word` ← `Word`, `theme` ← `Theme`, `image` ← `Image`
- **Returns**: `V1AcrosticResponse`
- **Error**: `ApiException<AcrosticError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AcrosticRequest` | `src/ApiVerve/Requests/Games/AcrosticRequest.cs` |
| `V1AcrosticResponse` | `src/ApiVerve/Models/V1AcrosticResponse.cs` |
| `AcrosticError` | `src/ApiVerve/Errors/AcrosticError.cs` |

### Anagrampuzzle

- **Auth**: `options.ApiKey`
- **Signature**: `Anagrampuzzle(AnagrampuzzleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `word` ← `Word`, `count` ← `Count`, `difficulty` ← `Difficulty`, `image` ← `Image`
- **Returns**: `V1AnagrampuzzleResponse`
- **Error**: `ApiException<AnagrampuzzleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnagrampuzzleRequest` | `src/ApiVerve/Requests/Games/AnagrampuzzleRequest.cs` |
| `V1AnagrampuzzleResponse` | `src/ApiVerve/Models/V1AnagrampuzzleResponse.cs` |
| `AnagrampuzzleError` | `src/ApiVerve/Errors/AnagrampuzzleError.cs` |

### Carddeckshuffler

- **Auth**: `options.ApiKey`
- **Signature**: `Carddeckshuffler(CarddeckshufflerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `decks` ← `Decks`, `jokers` ← `Jokers`, `method` ← `Method`
- **Returns**: `V1CarddeckshufflerResponse`
- **Error**: `ApiException<CarddeckshufflerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CarddeckshufflerRequest` | `src/ApiVerve/Requests/Games/CarddeckshufflerRequest.cs` |
| `V1CarddeckshufflerResponse` | `src/ApiVerve/Models/V1CarddeckshufflerResponse.cs` |
| `CarddeckshufflerError` | `src/ApiVerve/Errors/CarddeckshufflerError.cs` |

### Coinflipper

- **Auth**: `options.ApiKey`
- **Signature**: `Coinflipper(CoinflipperRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `flips` ← `Flips`
- **Returns**: `V1CoinflipperResponse`
- **Error**: `ApiException<CoinflipperError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CoinflipperRequest` | `src/ApiVerve/Requests/Games/CoinflipperRequest.cs` |
| `V1CoinflipperResponse` | `src/ApiVerve/Models/V1CoinflipperResponse.cs` |
| `CoinflipperError` | `src/ApiVerve/Errors/CoinflipperError.cs` |

### Crossword

- **Auth**: `options.ApiKey`
- **Signature**: `Crossword(CrosswordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `size` ← `Size`, `theme` ← `Theme`, `difficulty` ← `Difficulty`, `image` ← `Image`, `solutionImage` ← `SolutionImage`
- **Returns**: `V1CrosswordResponse`
- **Error**: `ApiException<CrosswordError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CrosswordRequest` | `src/ApiVerve/Requests/Games/CrosswordRequest.cs` |
| `V1CrosswordResponse` | `src/ApiVerve/Models/V1CrosswordResponse.cs` |
| `CrosswordError` | `src/ApiVerve/Errors/CrosswordError.cs` |

### Cryptogram

- **Auth**: `options.ApiKey`
- **Signature**: `Cryptogram(CryptogramRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `text` ← `Text`, `random` ← `Random`, `image` ← `Image`, `solutionImage` ← `SolutionImage`
- **Returns**: `V1CryptogramResponse`
- **Error**: `ApiException<CryptogramError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CryptogramRequest` | `src/ApiVerve/Requests/Games/CryptogramRequest.cs` |
| `V1CryptogramResponse` | `src/ApiVerve/Models/V1CryptogramResponse.cs` |
| `CryptogramError` | `src/ApiVerve/Errors/CryptogramError.cs` |

### Diceroller

- **Auth**: `options.ApiKey`
- **Signature**: `Diceroller(DicerollerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `dice` ← `Dice`, `modifier` ← `Modifier`
- **Returns**: `V1DicerollerResponse`
- **Error**: `ApiException<DicerollerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DicerollerRequest` | `src/ApiVerve/Requests/Games/DicerollerRequest.cs` |
| `V1DicerollerResponse` | `src/ApiVerve/Models/V1DicerollerResponse.cs` |
| `DicerollerError` | `src/ApiVerve/Errors/DicerollerError.cs` |

### Fillintheblanks

- **Auth**: `options.ApiKey`
- **Signature**: `Fillintheblanks(FillintheblanksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `category` ← `Category`, `count` ← `Count`, `difficulty` ← `Difficulty`, `image` ← `Image`
- **Returns**: `V1FillintheblanksResponse`
- **Error**: `ApiException<FillintheblanksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FillintheblanksRequest` | `src/ApiVerve/Requests/Games/FillintheblanksRequest.cs` |
| `V1FillintheblanksResponse` | `src/ApiVerve/Models/V1FillintheblanksResponse.cs` |
| `FillintheblanksError` | `src/ApiVerve/Errors/FillintheblanksError.cs` |

### Fortunecookie

- **Auth**: `options.ApiKey`
- **Signature**: `Fortunecookie(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1FortunecookieResponse`
- **Error**: `ApiException<FortunecookieError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1FortunecookieResponse` | `src/ApiVerve/Models/V1FortunecookieResponse.cs` |
| `FortunecookieError` | `src/ApiVerve/Errors/FortunecookieError.cs` |

### Gamecharacter

- **Auth**: `options.ApiKey`
- **Signature**: `Gamecharacter(GamecharacterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `race` ← `Race`, `class` ← `Class`
- **Returns**: `V1GamecharacterResponse`
- **Error**: `ApiException<GamecharacterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GamecharacterRequest` | `src/ApiVerve/Requests/Games/GamecharacterRequest.cs` |
| `V1GamecharacterResponse` | `src/ApiVerve/Models/V1GamecharacterResponse.cs` |
| `GamecharacterError` | `src/ApiVerve/Errors/GamecharacterError.cs` |

### Hangmanword

- **Auth**: `options.ApiKey`
- **Signature**: `Hangmanword(HangmanwordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `category` ← `Category`, `difficulty` ← `Difficulty`, `count` ← `Count`, `image` ← `Image`
- **Returns**: `V1HangmanwordResponse`
- **Error**: `ApiException<HangmanwordError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HangmanwordRequest` | `src/ApiVerve/Requests/Games/HangmanwordRequest.cs` |
| `V1HangmanwordResponse` | `src/ApiVerve/Models/V1HangmanwordResponse.cs` |
| `HangmanwordError` | `src/ApiVerve/Errors/HangmanwordError.cs` |

### Lotterypicker

- **Auth**: `options.ApiKey`
- **Signature**: `Lotterypicker(LotterypickerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `game` ← `Game`, `numbers` ← `Numbers`, `max` ← `Max`, `bonus` ← `Bonus`, `tickets` ← `Tickets`, `bonusmax` ← `Bonusmax`
- **Returns**: `V1LotterypickerResponse`
- **Error**: `ApiException<LotterypickerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LotterypickerRequest` | `src/ApiVerve/Requests/Games/LotterypickerRequest.cs` |
| `V1LotterypickerResponse` | `src/ApiVerve/Models/V1LotterypickerResponse.cs` |
| `LotterypickerError` | `src/ApiVerve/Errors/LotterypickerError.cs` |

### Madlibs

- **Auth**: `options.ApiKey`
- **Signature**: `Madlibs(MadlibsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `category` ← `Category`, `count` ← `Count`
- **Returns**: `V1MadlibsResponse`
- **Error**: `ApiException<MadlibsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MadlibsRequest` | `src/ApiVerve/Requests/Games/MadlibsRequest.cs` |
| `V1MadlibsResponse` | `src/ApiVerve/Models/V1MadlibsResponse.cs` |
| `MadlibsError` | `src/ApiVerve/Errors/MadlibsError.cs` |

### Maze

- **Auth**: `options.ApiKey`
- **Signature**: `Maze(MazeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `width` ← `Width`, `height` ← `Height`, `difficulty` ← `Difficulty`, `image` ← `Image`, `solutionImage` ← `SolutionImage`
- **Returns**: `V1MazeResponse`
- **Error**: `ApiException<MazeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MazeRequest` | `src/ApiVerve/Requests/Games/MazeRequest.cs` |
| `V1MazeResponse` | `src/ApiVerve/Models/V1MazeResponse.cs` |
| `MazeError` | `src/ApiVerve/Errors/MazeError.cs` |

### Rockpaperscissors

- **Auth**: `options.ApiKey`
- **Signature**: `Rockpaperscissors(RockpaperscissorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `choice` ← `Choice`, `rounds` ← `Rounds`
- **Returns**: `V1RockpaperscissorsResponse`
- **Error**: `ApiException<RockpaperscissorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RockpaperscissorsRequest` | `src/ApiVerve/Requests/Games/RockpaperscissorsRequest.cs` |
| `V1RockpaperscissorsResponse` | `src/ApiVerve/Models/V1RockpaperscissorsResponse.cs` |
| `RockpaperscissorsError` | `src/ApiVerve/Errors/RockpaperscissorsError.cs` |

### Slotmachine

- **Auth**: `options.ApiKey`
- **Signature**: `Slotmachine(SlotmachineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `spins` ← `Spins`, `reels` ← `Reels`, `bet` ← `Bet`
- **Returns**: `V1SlotmachineResponse`
- **Error**: `ApiException<SlotmachineError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SlotmachineRequest` | `src/ApiVerve/Requests/Games/SlotmachineRequest.cs` |
| `V1SlotmachineResponse` | `src/ApiVerve/Models/V1SlotmachineResponse.cs` |
| `SlotmachineError` | `src/ApiVerve/Errors/SlotmachineError.cs` |

### Spellingbee

- **Auth**: `options.ApiKey`
- **Signature**: `Spellingbee(SpellingbeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `difficulty` ← `Difficulty`, `image` ← `Image`
- **Returns**: `V1SpellingbeeResponse`
- **Error**: `ApiException<SpellingbeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpellingbeeRequest` | `src/ApiVerve/Requests/Games/SpellingbeeRequest.cs` |
| `V1SpellingbeeResponse` | `src/ApiVerve/Models/V1SpellingbeeResponse.cs` |
| `SpellingbeeError` | `src/ApiVerve/Errors/SpellingbeeError.cs` |

### Superheroname

- **Auth**: `options.ApiKey`
- **Signature**: `Superheroname(SuperheronameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `style` ← `Style`
- **Returns**: `V1SuperheronameResponse`
- **Error**: `ApiException<SuperheronameError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SuperheronameRequest` | `src/ApiVerve/Requests/Games/SuperheronameRequest.cs` |
| `V1SuperheronameResponse` | `src/ApiVerve/Models/V1SuperheronameResponse.cs` |
| `SuperheronameError` | `src/ApiVerve/Errors/SuperheronameError.cs` |

### Wordladder

- **Auth**: `options.ApiKey`
- **Signature**: `Wordladder(WordladderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `start` ← `Start`, `end` ← `End`, `difficulty` ← `Difficulty`, `count` ← `Count`, `image` ← `Image`
- **Returns**: `V1WordladderResponse`
- **Error**: `ApiException<WordladderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WordladderRequest` | `src/ApiVerve/Requests/Games/WordladderRequest.cs` |
| `V1WordladderResponse` | `src/ApiVerve/Models/V1WordladderResponse.cs` |
| `WordladderError` | `src/ApiVerve/Errors/WordladderError.cs` |

### Wordscramble

- **Auth**: `options.ApiKey`
- **Signature**: `Wordscramble(WordscrambleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `difficulty` ← `Difficulty`, `count` ← `Count`, `image` ← `Image`
- **Returns**: `V1WordscrambleResponse`
- **Error**: `ApiException<WordscrambleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WordscrambleRequest` | `src/ApiVerve/Requests/Games/WordscrambleRequest.cs` |
| `V1WordscrambleResponse` | `src/ApiVerve/Models/V1WordscrambleResponse.cs` |
| `WordscrambleError` | `src/ApiVerve/Errors/WordscrambleError.cs` |

### Wordsearch

- **Auth**: `options.ApiKey`
- **Signature**: `Wordsearch(WordsearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1WordsearchResponse`
- **Error**: `ApiException<WordsearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WordsearchRequest` | `src/ApiVerve/Requests/Games/WordsearchRequest.cs` |
| `V1WordsearchRequest` | `src/ApiVerve/Models/V1WordsearchRequest.cs` |
| `V1WordsearchResponse` | `src/ApiVerve/Models/V1WordsearchResponse.cs` |
| `WordsearchError` | `src/ApiVerve/Errors/WordsearchError.cs` |

