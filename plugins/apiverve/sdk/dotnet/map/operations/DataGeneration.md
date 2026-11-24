<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataGeneration — operations

Accessor: `client.DataGeneration` · Source: `src/ApiVerve/Api/DataGeneration.cs` · 32 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Acronymgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Acronymgenerator(AcronymgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Text`
- **Query params (wire ← C#)**: `text` ← `Text`
- **Returns**: `V1AcronymgeneratorResponse`
- **Error**: `ApiException<AcronymgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AcronymgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/AcronymgeneratorRequest.cs` |
| `V1AcronymgeneratorResponse` | `src/ApiVerve/Models/V1AcronymgeneratorResponse.cs` |
| `AcronymgeneratorError` | `src/ApiVerve/Errors/AcronymgeneratorError.cs` |

### Babynamegenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Babynamegenerator(BabynamegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Gender`
- **Query params (wire ← C#)**: `gender` ← `Gender`, `count` ← `Count`, `includeAvatar` ← `IncludeAvatar`
- **Returns**: `V1BabynamegeneratorResponse`
- **Error**: `ApiException<BabynamegeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BabynamegeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/BabynamegeneratorRequest.cs` |
| `V1BabynamegeneratorResponse` | `src/ApiVerve/Models/V1BabynamegeneratorResponse.cs` |
| `BabynamegeneratorError` | `src/ApiVerve/Errors/BabynamegeneratorError.cs` |

### Barcodegenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Barcodegenerator(BarcodegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1BarcodegeneratorResponse`
- **Error**: `ApiException<BarcodegeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BarcodegeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/BarcodegeneratorRequest.cs` |
| `V1BarcodegeneratorRequest` | `src/ApiVerve/Models/V1BarcodegeneratorRequest.cs` |
| `V1BarcodegeneratorResponse` | `src/ApiVerve/Models/V1BarcodegeneratorResponse.cs` |
| `BarcodegeneratorError` | `src/ApiVerve/Errors/BarcodegeneratorError.cs` |

### Bingocardgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Bingocardgenerator(BingocardgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `size` ← `Size`, `freeSpace` ← `FreeSpace`, `image` ← `Image`
- **Returns**: `V1BingocardgeneratorResponse`
- **Error**: `ApiException<BingocardgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BingocardgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/BingocardgeneratorRequest.cs` |
| `V1BingocardgeneratorResponse` | `src/ApiVerve/Models/V1BingocardgeneratorResponse.cs` |
| `BingocardgeneratorError` | `src/ApiVerve/Errors/BingocardgeneratorError.cs` |

### Boggleboardgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Boggleboardgenerator(BoggleboardgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `size` ← `Size`, `image` ← `Image`
- **Returns**: `V1BoggleboardgeneratorResponse`
- **Error**: `ApiException<BoggleboardgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BoggleboardgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/BoggleboardgeneratorRequest.cs` |
| `V1BoggleboardgeneratorResponse` | `src/ApiVerve/Models/V1BoggleboardgeneratorResponse.cs` |
| `BoggleboardgeneratorError` | `src/ApiVerve/Errors/BoggleboardgeneratorError.cs` |

### Captchagenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Captchagenerator(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1CaptchageneratorResponse`
- **Error**: `ApiException<CaptchageneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1CaptchageneratorResponse` | `src/ApiVerve/Models/V1CaptchageneratorResponse.cs` |
| `CaptchageneratorError` | `src/ApiVerve/Errors/CaptchageneratorError.cs` |

### Cardgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Cardgenerator(CardgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `brand` ← `Brand`, `count` ← `Count`, `includeAvatar` ← `IncludeAvatar`
- **Returns**: `V1CardgeneratorResponse`
- **Error**: `ApiException<CardgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CardgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/CardgeneratorRequest.cs` |
| `V1CardgeneratorResponse` | `src/ApiVerve/Models/V1CardgeneratorResponse.cs` |
| `CardgeneratorError` | `src/ApiVerve/Errors/CardgeneratorError.cs` |

### Chartgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Chartgenerator(ChartgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1ChartgeneratorResponse`
- **Error**: `ApiException<ChartgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChartgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/ChartgeneratorRequest.cs` |
| `V1ChartgeneratorRequest` | `src/ApiVerve/Models/V1ChartgeneratorRequest.cs` |
| `V1ChartgeneratorResponse` | `src/ApiVerve/Models/V1ChartgeneratorResponse.cs` |
| `ChartgeneratorError` | `src/ApiVerve/Errors/ChartgeneratorError.cs` |

### Colorpalette

- **Auth**: `options.ApiKey`
- **Signature**: `Colorpalette(ColorpaletteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Color`
- **Query params (wire ← C#)**: `color` ← `Color`, `scheme` ← `Scheme`, `variation` ← `Variation`, `count` ← `Count`, `distance` ← `Distance`, `addComplement` ← `AddComplement`, `webSafe` ← `WebSafe`
- **Returns**: `V1ColorpaletteResponse`
- **Error**: `ApiException<ColorpaletteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ColorpaletteRequest` | `src/ApiVerve/Requests/DataGeneration/ColorpaletteRequest.cs` |
| `V1ColorpaletteResponse` | `src/ApiVerve/Models/V1ColorpaletteResponse.cs` |
| `ColorpaletteError` | `src/ApiVerve/Errors/ColorpaletteError.cs` |

### Commentgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Commentgenerator(CommentgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Mode`
- **Query params (wire ← C#)**: `mode` ← `Mode`, `tone` ← `Tone`, `count` ← `Count`, `emojis` ← `Emojis`
- **Returns**: `V1CommentgeneratorResponse`
- **Error**: `ApiException<CommentgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/CommentgeneratorRequest.cs` |
| `V1CommentgeneratorResponse` | `src/ApiVerve/Models/V1CommentgeneratorResponse.cs` |
| `CommentgeneratorError` | `src/ApiVerve/Errors/CommentgeneratorError.cs` |

### Companynamegenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Companynamegenerator(CompanynamegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `count` ← `Count`
- **Returns**: `V1CompanynamegeneratorResponse`
- **Error**: `ApiException<CompanynamegeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CompanynamegeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/CompanynamegeneratorRequest.cs` |
| `V1CompanynamegeneratorResponse` | `src/ApiVerve/Models/V1CompanynamegeneratorResponse.cs` |
| `CompanynamegeneratorError` | `src/ApiVerve/Errors/CompanynamegeneratorError.cs` |

### Crongenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Crongenerator(CrongeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Schedule`
- **Query params (wire ← C#)**: `schedule` ← `Schedule`
- **Returns**: `V1CrongeneratorResponse`
- **Error**: `ApiException<CrongeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CrongeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/CrongeneratorRequest.cs` |
| `V1CrongeneratorResponse` | `src/ApiVerve/Models/V1CrongeneratorResponse.cs` |
| `CrongeneratorError` | `src/ApiVerve/Errors/CrongeneratorError.cs` |

### Cuidgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Cuidgenerator(CuidgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`
- **Returns**: `V1CuidgeneratorResponse`
- **Error**: `ApiException<CuidgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CuidgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/CuidgeneratorRequest.cs` |
| `V1CuidgeneratorResponse` | `src/ApiVerve/Models/V1CuidgeneratorResponse.cs` |
| `CuidgeneratorError` | `src/ApiVerve/Errors/CuidgeneratorError.cs` |

### Guidgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Guidgenerator(GuidgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `format` ← `Format`
- **Returns**: `V1GuidgeneratorResponse`
- **Error**: `ApiException<GuidgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GuidgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/GuidgeneratorRequest.cs` |
| `V1GuidgeneratorResponse` | `src/ApiVerve/Models/V1GuidgeneratorResponse.cs` |
| `GuidgeneratorError` | `src/ApiVerve/Errors/GuidgeneratorError.cs` |

### Hashtaggenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Hashtaggenerator(HashtaggeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1HashtaggeneratorResponse`
- **Error**: `ApiException<HashtaggeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HashtaggeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/HashtaggeneratorRequest.cs` |
| `V1HashtaggeneratorRequest` | `src/ApiVerve/Models/V1HashtaggeneratorRequest.cs` |
| `V1HashtaggeneratorResponse` | `src/ApiVerve/Models/V1HashtaggeneratorResponse.cs` |
| `HashtaggeneratorError` | `src/ApiVerve/Errors/HashtaggeneratorError.cs` |

### Imeigenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Imeigenerator(ImeigeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `brand` ← `Brand`, `count` ← `Count`
- **Returns**: `V1ImeigeneratorResponse`
- **Error**: `ApiException<ImeigeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImeigeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/ImeigeneratorRequest.cs` |
| `V1ImeigeneratorResponse` | `src/ApiVerve/Models/V1ImeigeneratorResponse.cs` |
| `ImeigeneratorError` | `src/ApiVerve/Errors/ImeigeneratorError.cs` |

### Initialismgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Initialismgenerator(InitialismgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1InitialismgeneratorResponse`
- **Error**: `ApiException<InitialismgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InitialismgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/InitialismgeneratorRequest.cs` |
| `V1InitialismgeneratorRequest` | `src/ApiVerve/Models/V1InitialismgeneratorRequest.cs` |
| `V1InitialismgeneratorResponse` | `src/ApiVerve/Models/V1InitialismgeneratorResponse.cs` |
| `InitialismgeneratorError` | `src/ApiVerve/Errors/InitialismgeneratorError.cs` |

### Jsonschemagenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Jsonschemagenerator(JsonschemageneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1JsonschemageneratorResponse`
- **Error**: `ApiException<JsonschemageneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JsonschemageneratorRequest` | `src/ApiVerve/Requests/DataGeneration/JsonschemageneratorRequest.cs` |
| `V1JsonschemageneratorRequest` | `src/ApiVerve/Models/V1JsonschemageneratorRequest.cs` |
| `V1JsonschemageneratorResponse` | `src/ApiVerve/Models/V1JsonschemageneratorResponse.cs` |
| `JsonschemageneratorError` | `src/ApiVerve/Errors/JsonschemageneratorError.cs` |

### Loremipsumgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Loremipsumgenerator(LoremipsumgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `paragraphs` ← `Paragraphs`, `startwithlorem` ← `Startwithlorem`, `maxlength` ← `Maxlength`
- **Returns**: `V1LoremipsumgeneratorResponse`
- **Error**: `ApiException<LoremipsumgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LoremipsumgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/LoremipsumgeneratorRequest.cs` |
| `V1LoremipsumgeneratorResponse` | `src/ApiVerve/Models/V1LoremipsumgeneratorResponse.cs` |
| `LoremipsumgeneratorError` | `src/ApiVerve/Errors/LoremipsumgeneratorError.cs` |

### Passwordgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Passwordgenerator(PasswordgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `length` ← `Length`, `complexity` ← `Complexity`, `type` ← `Type`, `includeNumbers` ← `IncludeNumbers`, `includeSymbols` ← `IncludeSymbols`, `includeUppercase` ← `IncludeUppercase`, `includeLowercase` ← `IncludeLowercase`, `excludeSimilar` ← `ExcludeSimilar`, `excludeAmbiguous` ← `ExcludeAmbiguous`, `mixedCase` ← `MixedCase`, `strict` ← `Strict`, `wordCount` ← `WordCount`, `separator` ← `Separator`, `capitalize` ← `Capitalize`, `analyze` ← `Analyze`
- **Returns**: `V1PasswordgeneratorResponse`
- **Error**: `ApiException<PasswordgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PasswordgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/PasswordgeneratorRequest.cs` |
| `V1PasswordgeneratorResponse` | `src/ApiVerve/Models/V1PasswordgeneratorResponse.cs` |
| `PasswordgeneratorError` | `src/ApiVerve/Errors/PasswordgeneratorError.cs` |

### Qrcodegenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Qrcodegenerator(QrcodegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1QrcodegeneratorResponse`
- **Error**: `ApiException<QrcodegeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QrcodegeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/QrcodegeneratorRequest.cs` |
| `V1QrcodegeneratorRequest` | `src/ApiVerve/Models/V1QrcodegeneratorRequest.cs` |
| `V1QrcodegeneratorResponse` | `src/ApiVerve/Models/V1QrcodegeneratorResponse.cs` |
| `QrcodegeneratorError` | `src/ApiVerve/Errors/QrcodegeneratorError.cs` |

### Randomgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Randomgenerator(RandomgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `type` ← `Type`, `count` ← `Count`, `includeAvatar` ← `IncludeAvatar`
- **Returns**: `V1RandomgeneratorResponse`
- **Error**: `ApiException<RandomgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RandomgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/RandomgeneratorRequest.cs` |
| `V1RandomgeneratorResponse` | `src/ApiVerve/Models/V1RandomgeneratorResponse.cs` |
| `RandomgeneratorError` | `src/ApiVerve/Errors/RandomgeneratorError.cs` |

### Randomidentitygenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Randomidentitygenerator(RandomidentitygeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `includeAvatar` ← `IncludeAvatar`
- **Returns**: `V1RandomidentitygeneratorResponse`
- **Error**: `ApiException<RandomidentitygeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RandomidentitygeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/RandomidentitygeneratorRequest.cs` |
| `V1RandomidentitygeneratorResponse` | `src/ApiVerve/Models/V1RandomidentitygeneratorResponse.cs` |
| `RandomidentitygeneratorError` | `src/ApiVerve/Errors/RandomidentitygeneratorError.cs` |

### Randomusergenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Randomusergenerator(RandomusergeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `includeAvatar` ← `IncludeAvatar`
- **Returns**: `V1RandomusergeneratorResponse`
- **Error**: `ApiException<RandomusergeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RandomusergeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/RandomusergeneratorRequest.cs` |
| `V1RandomusergeneratorResponse` | `src/ApiVerve/Models/V1RandomusergeneratorResponse.cs` |
| `RandomusergeneratorError` | `src/ApiVerve/Errors/RandomusergeneratorError.cs` |

### Randomwords

- **Auth**: `options.ApiKey`
- **Signature**: `Randomwords(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1RandomwordsResponse`
- **Error**: `ApiException<RandomwordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1RandomwordsResponse` | `src/ApiVerve/Models/V1RandomwordsResponse.cs` |
| `RandomwordsError` | `src/ApiVerve/Errors/RandomwordsError.cs` |

### Shortcodegenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Shortcodegenerator(ShortcodegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `length` ← `Length`, `charset` ← `Charset`
- **Returns**: `V1ShortcodegeneratorResponse`
- **Error**: `ApiException<ShortcodegeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ShortcodegeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/ShortcodegeneratorRequest.cs` |
| `V1ShortcodegeneratorResponse` | `src/ApiVerve/Models/V1ShortcodegeneratorResponse.cs` |
| `ShortcodegeneratorError` | `src/ApiVerve/Errors/ShortcodegeneratorError.cs` |

### Sitemapgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Sitemapgenerator(SitemapgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SitemapgeneratorResponse`
- **Error**: `ApiException<SitemapgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SitemapgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/SitemapgeneratorRequest.cs` |
| `V1SitemapgeneratorRequest` | `src/ApiVerve/Models/V1SitemapgeneratorRequest.cs` |
| `V1SitemapgeneratorResponse` | `src/ApiVerve/Models/V1SitemapgeneratorResponse.cs` |
| `SitemapgeneratorError` | `src/ApiVerve/Errors/SitemapgeneratorError.cs` |

### Totpgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Totpgenerator(TotpgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1TotpgeneratorResponse`
- **Error**: `ApiException<TotpgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TotpgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/TotpgeneratorRequest.cs` |
| `V1TotpgeneratorRequest` | `src/ApiVerve/Models/V1TotpgeneratorRequest.cs` |
| `V1TotpgeneratorResponse` | `src/ApiVerve/Models/V1TotpgeneratorResponse.cs` |
| `TotpgeneratorError` | `src/ApiVerve/Errors/TotpgeneratorError.cs` |

### Ulidgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Ulidgenerator(UlidgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `timestamp` ← `Timestamp`
- **Returns**: `V1UlidgeneratorResponse`
- **Error**: `ApiException<UlidgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UlidgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/UlidgeneratorRequest.cs` |
| `V1UlidgeneratorResponse` | `src/ApiVerve/Models/V1UlidgeneratorResponse.cs` |
| `UlidgeneratorError` | `src/ApiVerve/Errors/UlidgeneratorError.cs` |

### Useragentgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Useragentgenerator(UseragentgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `device` ← `Device`
- **Returns**: `V1UseragentgeneratorResponse`
- **Error**: `ApiException<UseragentgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UseragentgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/UseragentgeneratorRequest.cs` |
| `V1UseragentgeneratorResponse` | `src/ApiVerve/Models/V1UseragentgeneratorResponse.cs` |
| `UseragentgeneratorError` | `src/ApiVerve/Errors/UseragentgeneratorError.cs` |

### Usernamegenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Usernamegenerator(UsernamegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Email`
- **Query params (wire ← C#)**: `email` ← `Email`, `count` ← `Count`
- **Returns**: `V1UsernamegeneratorResponse`
- **Error**: `ApiException<UsernamegeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UsernamegeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/UsernamegeneratorRequest.cs` |
| `V1UsernamegeneratorResponse` | `src/ApiVerve/Models/V1UsernamegeneratorResponse.cs` |
| `UsernamegeneratorError` | `src/ApiVerve/Errors/UsernamegeneratorError.cs` |

### Uuidgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Uuidgenerator(UuidgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `version` ← `Version`, `format` ← `Format`
- **Returns**: `V1UuidgeneratorResponse`
- **Error**: `ApiException<UuidgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UuidgeneratorRequest` | `src/ApiVerve/Requests/DataGeneration/UuidgeneratorRequest.cs` |
| `V1UuidgeneratorResponse` | `src/ApiVerve/Models/V1UuidgeneratorResponse.cs` |
| `UuidgeneratorError` | `src/ApiVerve/Errors/UuidgeneratorError.cs` |

