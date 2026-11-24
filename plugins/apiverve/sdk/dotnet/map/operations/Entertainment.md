<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entertainment — operations

Accessor: `client.Entertainment` · Source: `src/ApiVerve/Api/Entertainment.cs` · 24 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Advice

- **Auth**: `options.ApiKey`
- **Signature**: `Advice(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1AdviceResponse`
- **Error**: `ApiException<AdviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1AdviceResponse` | `src/ApiVerve/Models/V1AdviceResponse.cs` |
| `AdviceError` | `src/ApiVerve/Errors/AdviceError.cs` |

### Bucketlist

- **Auth**: `options.ApiKey`
- **Signature**: `Bucketlist(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1BucketlistResponse`
- **Error**: `ApiException<BucketlistError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1BucketlistResponse` | `src/ApiVerve/Models/V1BucketlistResponse.cs` |
| `BucketlistError` | `src/ApiVerve/Errors/BucketlistError.cs` |

### Charades

- **Auth**: `options.ApiKey`
- **Signature**: `Charades(CharadesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `category` ← `Category`
- **Returns**: `V1CharadesResponse`
- **Error**: `ApiException<CharadesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CharadesRequest` | `src/ApiVerve/Requests/Entertainment/CharadesRequest.cs` |
| `V1CharadesResponse` | `src/ApiVerve/Models/V1CharadesResponse.cs` |
| `CharadesError` | `src/ApiVerve/Errors/CharadesError.cs` |

### Chessmovevalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Chessmovevalidator(ChessmovevalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Move`
- **Query params (wire ← C#)**: `move` ← `Move`
- **Returns**: `V1ChessmovevalidatorResponse`
- **Error**: `ApiException<ChessmovevalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChessmovevalidatorRequest` | `src/ApiVerve/Requests/Entertainment/ChessmovevalidatorRequest.cs` |
| `V1ChessmovevalidatorResponse` | `src/ApiVerve/Models/V1ChessmovevalidatorResponse.cs` |
| `ChessmovevalidatorError` | `src/ApiVerve/Errors/ChessmovevalidatorError.cs` |

### Chucknorris

- **Auth**: `options.ApiKey`
- **Signature**: `Chucknorris(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1ChucknorrisResponse`
- **Error**: `ApiException<ChucknorrisError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1ChucknorrisResponse` | `src/ApiVerve/Models/V1ChucknorrisResponse.cs` |
| `ChucknorrisError` | `src/ApiVerve/Errors/ChucknorrisError.cs` |

### Compliments

- **Auth**: `options.ApiKey`
- **Signature**: `Compliments(ComplimentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `adult` ← `Adult`
- **Returns**: `V1ComplimentsResponse`
- **Error**: `ApiException<ComplimentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ComplimentsRequest` | `src/ApiVerve/Requests/Entertainment/ComplimentsRequest.cs` |
| `V1ComplimentsResponse` | `src/ApiVerve/Models/V1ComplimentsResponse.cs` |
| `ComplimentsError` | `src/ApiVerve/Errors/ComplimentsError.cs` |

### Dadjokes

- **Auth**: `options.ApiKey`
- **Signature**: `Dadjokes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1DadjokesResponse`
- **Error**: `ApiException<DadjokesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1DadjokesResponse` | `src/ApiVerve/Models/V1DadjokesResponse.cs` |
| `DadjokesError` | `src/ApiVerve/Errors/DadjokesError.cs` |

### Dndgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Dndgenerator(DndgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `type` ← `Type`, `count` ← `Count`
- **Returns**: `V1DndgeneratorResponse`
- **Error**: `ApiException<DndgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DndgeneratorRequest` | `src/ApiVerve/Requests/Entertainment/DndgeneratorRequest.cs` |
| `V1DndgeneratorResponse` | `src/ApiVerve/Models/V1DndgeneratorResponse.cs` |
| `DndgeneratorError` | `src/ApiVerve/Errors/DndgeneratorError.cs` |

### Fortuneteller

- **Auth**: `options.ApiKey`
- **Signature**: `Fortuneteller(FortunetellerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `category` ← `Category`, `question` ← `Question`
- **Returns**: `V1FortunetellerResponse`
- **Error**: `ApiException<FortunetellerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FortunetellerRequest` | `src/ApiVerve/Requests/Entertainment/FortunetellerRequest.cs` |
| `V1FortunetellerResponse` | `src/ApiVerve/Models/V1FortunetellerResponse.cs` |
| `FortunetellerError` | `src/ApiVerve/Errors/FortunetellerError.cs` |

### Historicalevents

- **Auth**: `options.ApiKey`
- **Signature**: `Historicalevents(HistoricaleventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Text`
- **Query params (wire ← C#)**: `text` ← `Text`
- **Returns**: `V1HistoricaleventsResponse`
- **Error**: `ApiException<HistoricaleventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HistoricaleventsRequest` | `src/ApiVerve/Requests/Entertainment/HistoricaleventsRequest.cs` |
| `V1HistoricaleventsResponse` | `src/ApiVerve/Models/V1HistoricaleventsResponse.cs` |
| `HistoricaleventsError` | `src/ApiVerve/Errors/HistoricaleventsError.cs` |

### Lovecalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Lovecalculator(LovecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name1`, `Name2`
- **Query params (wire ← C#)**: `name1` ← `Name1`, `name2` ← `Name2`
- **Returns**: `V1LovecalculatorResponse`
- **Error**: `ApiException<LovecalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LovecalculatorRequest` | `src/ApiVerve/Requests/Entertainment/LovecalculatorRequest.cs` |
| `V1LovecalculatorResponse` | `src/ApiVerve/Models/V1LovecalculatorResponse.cs` |
| `LovecalculatorError` | `src/ApiVerve/Errors/LovecalculatorError.cs` |

### Magic8Ball

- **Auth**: `options.ApiKey`
- **Signature**: `Magic8Ball(Magic8BallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `question` ← `Question`
- **Returns**: `V1Magic8BallResponse`
- **Error**: `ApiException<Magic8BallError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Magic8BallRequest` | `src/ApiVerve/Requests/Entertainment/Magic8BallRequest.cs` |
| `V1Magic8BallResponse` | `src/ApiVerve/Models/V1Magic8BallResponse.cs` |
| `Magic8BallError` | `src/ApiVerve/Errors/Magic8BallError.cs` |

### Musicnotegenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Musicnotegenerator(MusicnotegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Note`
- **Query params (wire ← C#)**: `note` ← `Note`, `octave` ← `Octave`, `duration` ← `Duration`
- **Returns**: `V1MusicnotegeneratorResponse`
- **Error**: `ApiException<MusicnotegeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MusicnotegeneratorRequest` | `src/ApiVerve/Requests/Entertainment/MusicnotegeneratorRequest.cs` |
| `V1MusicnotegeneratorResponse` | `src/ApiVerve/Models/V1MusicnotegeneratorResponse.cs` |
| `MusicnotegeneratorError` | `src/ApiVerve/Errors/MusicnotegeneratorError.cs` |

### Neverhaveiever

- **Auth**: `options.ApiKey`
- **Signature**: `Neverhaveiever(NeverhaveieverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `adult` ← `Adult`
- **Returns**: `V1NeverhaveieverResponse`
- **Error**: `ApiException<NeverhaveieverError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NeverhaveieverRequest` | `src/ApiVerve/Requests/Entertainment/NeverhaveieverRequest.cs` |
| `V1NeverhaveieverResponse` | `src/ApiVerve/Models/V1NeverhaveieverResponse.cs` |
| `NeverhaveieverError` | `src/ApiVerve/Errors/NeverhaveieverError.cs` |

### Pictionary

- **Auth**: `options.ApiKey`
- **Signature**: `Pictionary(PictionaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `difficulty` ← `Difficulty`, `count` ← `Count`
- **Returns**: `V1PictionaryResponse`
- **Error**: `ApiException<PictionaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PictionaryRequest` | `src/ApiVerve/Requests/Entertainment/PictionaryRequest.cs` |
| `V1PictionaryResponse` | `src/ApiVerve/Models/V1PictionaryResponse.cs` |
| `PictionaryError` | `src/ApiVerve/Errors/PictionaryError.cs` |

### Randomfacts

- **Auth**: `options.ApiKey`
- **Signature**: `Randomfacts(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1RandomfactsResponse`
- **Error**: `ApiException<RandomfactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1RandomfactsResponse` | `src/ApiVerve/Models/V1RandomfactsResponse.cs` |
| `RandomfactsError` | `src/ApiVerve/Errors/RandomfactsError.cs` |

### Randomjoke

- **Auth**: `options.ApiKey`
- **Signature**: `Randomjoke(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1RandomjokeResponse`
- **Error**: `ApiException<RandomjokeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1RandomjokeResponse` | `src/ApiVerve/Models/V1RandomjokeResponse.cs` |
| `RandomjokeError` | `src/ApiVerve/Errors/RandomjokeError.cs` |

### Randompun

- **Auth**: `options.ApiKey`
- **Signature**: `Randompun(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1RandompunResponse`
- **Error**: `ApiException<RandompunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1RandompunResponse` | `src/ApiVerve/Models/V1RandompunResponse.cs` |
| `RandompunError` | `src/ApiVerve/Errors/RandompunError.cs` |

### Randomquote

- **Auth**: `options.ApiKey`
- **Signature**: `Randomquote(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1RandomquoteResponse`
- **Error**: `ApiException<RandomquoteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1RandomquoteResponse` | `src/ApiVerve/Models/V1RandomquoteResponse.cs` |
| `RandomquoteError` | `src/ApiVerve/Errors/RandomquoteError.cs` |

### Scrabblescorer

- **Auth**: `options.ApiKey`
- **Signature**: `Scrabblescorer(ScrabblescorerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Word`
- **Query params (wire ← C#)**: `word` ← `Word`, `language` ← `Language`
- **Returns**: `V1ScrabblescorerResponse`
- **Error**: `ApiException<ScrabblescorerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ScrabblescorerRequest` | `src/ApiVerve/Requests/Entertainment/ScrabblescorerRequest.cs` |
| `V1ScrabblescorerResponse` | `src/ApiVerve/Models/V1ScrabblescorerResponse.cs` |
| `ScrabblescorerError` | `src/ApiVerve/Errors/ScrabblescorerError.cs` |

### Sudoku

- **Auth**: `options.ApiKey`
- **Signature**: `Sudoku(SudokuRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `difficulty` ← `Difficulty`
- **Returns**: `V1SudokuResponse`
- **Error**: `ApiException<SudokuError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SudokuRequest` | `src/ApiVerve/Requests/Entertainment/SudokuRequest.cs` |
| `V1SudokuResponse` | `src/ApiVerve/Models/V1SudokuResponse.cs` |
| `SudokuError` | `src/ApiVerve/Errors/SudokuError.cs` |

### Trivia

- **Auth**: `options.ApiKey`
- **Signature**: `Trivia(TriviaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `category` ← `Category`
- **Returns**: `V1TriviaResponse`
- **Error**: `ApiException<TriviaError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriviaRequest` | `src/ApiVerve/Requests/Entertainment/TriviaRequest.cs` |
| `V1TriviaResponse` | `src/ApiVerve/Models/V1TriviaResponse.cs` |
| `TriviaError` | `src/ApiVerve/Errors/TriviaError.cs` |

### Truthordare

- **Auth**: `options.ApiKey`
- **Signature**: `Truthordare(TruthordareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `type` ← `Type`, `adult` ← `Adult`
- **Returns**: `V1TruthordareResponse`
- **Error**: `ApiException<TruthordareError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TruthordareRequest` | `src/ApiVerve/Requests/Entertainment/TruthordareRequest.cs` |
| `V1TruthordareResponse` | `src/ApiVerve/Models/V1TruthordareResponse.cs` |
| `TruthordareError` | `src/ApiVerve/Errors/TruthordareError.cs` |

### Wordlehelper

- **Auth**: `options.ApiKey`
- **Signature**: `Wordlehelper(WordlehelperRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `green` ← `Green`, `yellow` ← `Yellow`, `gray` ← `Gray`, `pattern` ← `Pattern`, `limit` ← `Limit`
- **Returns**: `V1WordlehelperResponse`
- **Error**: `ApiException<WordlehelperError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WordlehelperRequest` | `src/ApiVerve/Requests/Entertainment/WordlehelperRequest.cs` |
| `V1WordlehelperResponse` | `src/ApiVerve/Models/V1WordlehelperResponse.cs` |
| `WordlehelperError` | `src/ApiVerve/Errors/WordlehelperError.cs` |

