<!-- Generated file — do not edit; regenerated with the SDK. -->

# TextProcessing — operations

Accessor: `client.TextProcessing` · Source: `src/ApiVerve/Api/TextProcessing.cs` · 45 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Acronymexpander

- **Auth**: `options.ApiKey`
- **Signature**: `Acronymexpander(AcronymexpanderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Acronym`
- **Query params (wire ← C#)**: `acronym` ← `Acronym`, `context` ← `Context`
- **Returns**: `V1AcronymexpanderResponse`
- **Error**: `ApiException<AcronymexpanderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AcronymexpanderRequest` | `src/ApiVerve/Requests/TextProcessing/AcronymexpanderRequest.cs` |
| `V1AcronymexpanderResponse` | `src/ApiVerve/Models/V1AcronymexpanderResponse.cs` |
| `AcronymexpanderError` | `src/ApiVerve/Errors/AcronymexpanderError.cs` |

### Anagramdetector

- **Auth**: `options.ApiKey`
- **Signature**: `Anagramdetector(AnagramdetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Text1`, `Text2`
- **Query params (wire ← C#)**: `text1` ← `Text1`, `text2` ← `Text2`, `ignorecase` ← `Ignorecase`, `ignorespaces` ← `Ignorespaces`
- **Returns**: `V1AnagramdetectorResponse`
- **Error**: `ApiException<AnagramdetectorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnagramdetectorRequest` | `src/ApiVerve/Requests/TextProcessing/AnagramdetectorRequest.cs` |
| `V1AnagramdetectorResponse` | `src/ApiVerve/Models/V1AnagramdetectorResponse.cs` |
| `AnagramdetectorError` | `src/ApiVerve/Errors/AnagramdetectorError.cs` |

### Antonym

- **Auth**: `options.ApiKey`
- **Signature**: `Antonym(AntonymRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Word`
- **Query params (wire ← C#)**: `word` ← `Word`, `language` ← `Language`
- **Returns**: `V1AntonymResponse`
- **Error**: `ApiException<AntonymError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AntonymRequest` | `src/ApiVerve/Requests/TextProcessing/AntonymRequest.cs` |
| `V1AntonymResponse` | `src/ApiVerve/Models/V1AntonymResponse.cs` |
| `AntonymError` | `src/ApiVerve/Errors/AntonymError.cs` |

### Cronparser

- **Auth**: `options.ApiKey`
- **Signature**: `Cronparser(CronparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Expression`
- **Query params (wire ← C#)**: `expression` ← `Expression`
- **Returns**: `V1CronparserResponse`
- **Error**: `ApiException<CronparserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CronparserRequest` | `src/ApiVerve/Requests/TextProcessing/CronparserRequest.cs` |
| `V1CronparserResponse` | `src/ApiVerve/Models/V1CronparserResponse.cs` |
| `CronparserError` | `src/ApiVerve/Errors/CronparserError.cs` |

### Datamasking

- **Auth**: `options.ApiKey`
- **Signature**: `Datamasking(DatamaskingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1DatamaskingResponse`
- **Error**: `ApiException<DatamaskingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DatamaskingRequest` | `src/ApiVerve/Requests/TextProcessing/DatamaskingRequest.cs` |
| `V1DatamaskingRequest` | `src/ApiVerve/Models/V1DatamaskingRequest.cs` |
| `V1DatamaskingResponse` | `src/ApiVerve/Models/V1DatamaskingResponse.cs` |
| `DatamaskingError` | `src/ApiVerve/Errors/DatamaskingError.cs` |

### Didyoumean

- **Auth**: `options.ApiKey`
- **Signature**: `Didyoumean(DidyoumeanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Query`
- **Query params (wire ← C#)**: `query` ← `Query`
- **Returns**: `V1DidyoumeanResponse`
- **Error**: `ApiException<DidyoumeanError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DidyoumeanRequest` | `src/ApiVerve/Requests/TextProcessing/DidyoumeanRequest.cs` |
| `V1DidyoumeanResponse` | `src/ApiVerve/Models/V1DidyoumeanResponse.cs` |
| `DidyoumeanError` | `src/ApiVerve/Errors/DidyoumeanError.cs` |

### Emojidecorator

- **Auth**: `options.ApiKey`
- **Signature**: `Emojidecorator(EmojidecoratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1EmojidecoratorResponse`
- **Error**: `ApiException<EmojidecoratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EmojidecoratorRequest` | `src/ApiVerve/Requests/TextProcessing/EmojidecoratorRequest.cs` |
| `V1EmojidecoratorRequest` | `src/ApiVerve/Models/V1EmojidecoratorRequest.cs` |
| `V1EmojidecoratorResponse` | `src/ApiVerve/Models/V1EmojidecoratorResponse.cs` |
| `EmojidecoratorError` | `src/ApiVerve/Errors/EmojidecoratorError.cs` |

### Gibberishdetector

- **Auth**: `options.ApiKey`
- **Signature**: `Gibberishdetector(GibberishdetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1GibberishdetectorResponse`
- **Error**: `ApiException<GibberishdetectorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GibberishdetectorRequest` | `src/ApiVerve/Requests/TextProcessing/GibberishdetectorRequest.cs` |
| `V1GibberishdetectorRequest` | `src/ApiVerve/Models/V1GibberishdetectorRequest.cs` |
| `V1GibberishdetectorResponse` | `src/ApiVerve/Models/V1GibberishdetectorResponse.cs` |
| `GibberishdetectorError` | `src/ApiVerve/Errors/GibberishdetectorError.cs` |

### Grammarcheck

- **Auth**: `options.ApiKey`
- **Signature**: `Grammarcheck(GrammarcheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1GrammarcheckResponse`
- **Error**: `ApiException<GrammarcheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GrammarcheckRequest` | `src/ApiVerve/Requests/TextProcessing/GrammarcheckRequest.cs` |
| `V1GrammarcheckRequest` | `src/ApiVerve/Models/V1GrammarcheckRequest.cs` |
| `V1GrammarcheckResponse` | `src/ApiVerve/Models/V1GrammarcheckResponse.cs` |
| `GrammarcheckError` | `src/ApiVerve/Errors/GrammarcheckError.cs` |

### Isbnvalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Isbnvalidator(IsbnvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Isbn`
- **Query params (wire ← C#)**: `isbn` ← `Isbn`
- **Returns**: `V1IsbnvalidatorResponse`
- **Error**: `ApiException<IsbnvalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IsbnvalidatorRequest` | `src/ApiVerve/Requests/TextProcessing/IsbnvalidatorRequest.cs` |
| `V1IsbnvalidatorResponse` | `src/ApiVerve/Models/V1IsbnvalidatorResponse.cs` |
| `IsbnvalidatorError` | `src/ApiVerve/Errors/IsbnvalidatorError.cs` |

### Jsonschemavalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Jsonschemavalidator(JsonschemavalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1JsonschemavalidatorResponse`
- **Error**: `ApiException<JsonschemavalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JsonschemavalidatorRequest` | `src/ApiVerve/Requests/TextProcessing/JsonschemavalidatorRequest.cs` |
| `V1JsonschemavalidatorRequest` | `src/ApiVerve/Models/V1JsonschemavalidatorRequest.cs` |
| `V1JsonschemavalidatorResponse` | `src/ApiVerve/Models/V1JsonschemavalidatorResponse.cs` |
| `JsonschemavalidatorError` | `src/ApiVerve/Errors/JsonschemavalidatorError.cs` |

### Keywordextractor

- **Auth**: `options.ApiKey`
- **Signature**: `Keywordextractor(KeywordextractorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1KeywordextractorResponse`
- **Error**: `ApiException<KeywordextractorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `KeywordextractorRequest` | `src/ApiVerve/Requests/TextProcessing/KeywordextractorRequest.cs` |
| `V1KeywordextractorRequest` | `src/ApiVerve/Models/V1KeywordextractorRequest.cs` |
| `V1KeywordextractorResponse` | `src/ApiVerve/Models/V1KeywordextractorResponse.cs` |
| `KeywordextractorError` | `src/ApiVerve/Errors/KeywordextractorError.cs` |

### Leetspeak

- **Auth**: `options.ApiKey`
- **Signature**: `Leetspeak(LeetspeakRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1LeetspeakResponse`
- **Error**: `ApiException<LeetspeakError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LeetspeakRequest` | `src/ApiVerve/Requests/TextProcessing/LeetspeakRequest.cs` |
| `V1LeetspeakRequest` | `src/ApiVerve/Models/V1LeetspeakRequest.cs` |
| `V1LeetspeakResponse` | `src/ApiVerve/Models/V1LeetspeakResponse.cs` |
| `LeetspeakError` | `src/ApiVerve/Errors/LeetspeakError.cs` |

### Lemmatizer

- **Auth**: `options.ApiKey`
- **Signature**: `Lemmatizer(LemmatizerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1LemmatizerResponse`
- **Error**: `ApiException<LemmatizerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LemmatizerRequest` | `src/ApiVerve/Requests/TextProcessing/LemmatizerRequest.cs` |
| `V1LemmatizerRequest` | `src/ApiVerve/Models/V1LemmatizerRequest.cs` |
| `V1LemmatizerResponse` | `src/ApiVerve/Models/V1LemmatizerResponse.cs` |
| `LemmatizerError` | `src/ApiVerve/Errors/LemmatizerError.cs` |

### Levenshteindistance

- **Auth**: `options.ApiKey`
- **Signature**: `Levenshteindistance(LevenshteindistanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1LevenshteindistanceResponse`
- **Error**: `ApiException<LevenshteindistanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LevenshteindistanceRequest` | `src/ApiVerve/Requests/TextProcessing/LevenshteindistanceRequest.cs` |
| `V1LevenshteindistanceRequest` | `src/ApiVerve/Models/V1LevenshteindistanceRequest.cs` |
| `V1LevenshteindistanceResponse` | `src/ApiVerve/Models/V1LevenshteindistanceResponse.cs` |
| `LevenshteindistanceError` | `src/ApiVerve/Errors/LevenshteindistanceError.cs` |

### Lexicon

- **Auth**: `options.ApiKey`
- **Signature**: `Lexicon(LexiconRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Word`
- **Query params (wire ← C#)**: `word` ← `Word`
- **Returns**: `V1LexiconResponse`
- **Error**: `ApiException<LexiconError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LexiconRequest` | `src/ApiVerve/Requests/TextProcessing/LexiconRequest.cs` |
| `V1LexiconResponse` | `src/ApiVerve/Models/V1LexiconResponse.cs` |
| `LexiconError` | `src/ApiVerve/Errors/LexiconError.cs` |

### Linesorter

- **Auth**: `options.ApiKey`
- **Signature**: `Linesorter(LinesorterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1LinesorterResponse`
- **Error**: `ApiException<LinesorterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LinesorterRequest` | `src/ApiVerve/Requests/TextProcessing/LinesorterRequest.cs` |
| `V1LinesorterRequest` | `src/ApiVerve/Models/V1LinesorterRequest.cs` |
| `V1LinesorterResponse` | `src/ApiVerve/Models/V1LinesorterResponse.cs` |
| `LinesorterError` | `src/ApiVerve/Errors/LinesorterError.cs` |

### Markdownlinkextractor

- **Auth**: `options.ApiKey`
- **Signature**: `Markdownlinkextractor(MarkdownlinkextractorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1MarkdownlinkextractorResponse`
- **Error**: `ApiException<MarkdownlinkextractorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MarkdownlinkextractorRequest` | `src/ApiVerve/Requests/TextProcessing/MarkdownlinkextractorRequest.cs` |
| `V1MarkdownlinkextractorRequest` | `src/ApiVerve/Models/V1MarkdownlinkextractorRequest.cs` |
| `V1MarkdownlinkextractorResponse` | `src/ApiVerve/Models/V1MarkdownlinkextractorResponse.cs` |
| `MarkdownlinkextractorError` | `src/ApiVerve/Errors/MarkdownlinkextractorError.cs` |

### Palindromechecker

- **Auth**: `options.ApiKey`
- **Signature**: `Palindromechecker(PalindromecheckerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Text`
- **Query params (wire ← C#)**: `text` ← `Text`, `ignorecase` ← `Ignorecase`, `ignorespaces` ← `Ignorespaces`, `ignorepunctuation` ← `Ignorepunctuation`
- **Returns**: `V1PalindromecheckerResponse`
- **Error**: `ApiException<PalindromecheckerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PalindromecheckerRequest` | `src/ApiVerve/Requests/TextProcessing/PalindromecheckerRequest.cs` |
| `V1PalindromecheckerResponse` | `src/ApiVerve/Models/V1PalindromecheckerResponse.cs` |
| `PalindromecheckerError` | `src/ApiVerve/Errors/PalindromecheckerError.cs` |

### Partsofspeech

- **Auth**: `options.ApiKey`
- **Signature**: `Partsofspeech(PartsofspeechRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1PartsofspeechResponse`
- **Error**: `ApiException<PartsofspeechError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PartsofspeechRequest` | `src/ApiVerve/Requests/TextProcessing/PartsofspeechRequest.cs` |
| `V1PartsofspeechRequest` | `src/ApiVerve/Models/V1PartsofspeechRequest.cs` |
| `V1PartsofspeechResponse` | `src/ApiVerve/Models/V1PartsofspeechResponse.cs` |
| `PartsofspeechError` | `src/ApiVerve/Errors/PartsofspeechError.cs` |

### Phonetic

- **Auth**: `options.ApiKey`
- **Signature**: `Phonetic(PhoneticRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Word`
- **Query params (wire ← C#)**: `word` ← `Word`, `algorithm` ← `Algorithm`
- **Returns**: `V1PhoneticResponse`
- **Error**: `ApiException<PhoneticError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PhoneticRequest` | `src/ApiVerve/Requests/TextProcessing/PhoneticRequest.cs` |
| `V1PhoneticResponse` | `src/ApiVerve/Models/V1PhoneticResponse.cs` |
| `PhoneticError` | `src/ApiVerve/Errors/PhoneticError.cs` |

### Piglatin

- **Auth**: `options.ApiKey`
- **Signature**: `Piglatin(PiglatinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1PiglatinResponse`
- **Error**: `ApiException<PiglatinError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PiglatinRequest` | `src/ApiVerve/Requests/TextProcessing/PiglatinRequest.cs` |
| `V1PiglatinRequest` | `src/ApiVerve/Models/V1PiglatinRequest.cs` |
| `V1PiglatinResponse` | `src/ApiVerve/Models/V1PiglatinResponse.cs` |
| `PiglatinError` | `src/ApiVerve/Errors/PiglatinError.cs` |

### Profanityfilter

- **Auth**: `options.ApiKey`
- **Signature**: `Profanityfilter(ProfanityfilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1ProfanityfilterResponse`
- **Error**: `ApiException<ProfanityfilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProfanityfilterRequest` | `src/ApiVerve/Requests/TextProcessing/ProfanityfilterRequest.cs` |
| `V1ProfanityfilterRequest` | `src/ApiVerve/Models/V1ProfanityfilterRequest.cs` |
| `V1ProfanityfilterResponse` | `src/ApiVerve/Models/V1ProfanityfilterResponse.cs` |
| `ProfanityfilterError` | `src/ApiVerve/Errors/ProfanityfilterError.cs` |

### Readabilityscore

- **Auth**: `options.ApiKey`
- **Signature**: `Readabilityscore(ReadabilityscoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1ReadabilityscoreResponse`
- **Error**: `ApiException<ReadabilityscoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReadabilityscoreRequest` | `src/ApiVerve/Requests/TextProcessing/ReadabilityscoreRequest.cs` |
| `V1ReadabilityscoreRequest` | `src/ApiVerve/Models/V1ReadabilityscoreRequest.cs` |
| `V1ReadabilityscoreResponse` | `src/ApiVerve/Models/V1ReadabilityscoreResponse.cs` |
| `ReadabilityscoreError` | `src/ApiVerve/Errors/ReadabilityscoreError.cs` |

### Readingtime

- **Auth**: `options.ApiKey`
- **Signature**: `Readingtime(ReadingtimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1ReadingtimeResponse`
- **Error**: `ApiException<ReadingtimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReadingtimeRequest` | `src/ApiVerve/Requests/TextProcessing/ReadingtimeRequest.cs` |
| `V1ReadingtimeRequest` | `src/ApiVerve/Models/V1ReadingtimeRequest.cs` |
| `V1ReadingtimeResponse` | `src/ApiVerve/Models/V1ReadingtimeResponse.cs` |
| `ReadingtimeError` | `src/ApiVerve/Errors/ReadingtimeError.cs` |

### Regextester

- **Auth**: `options.ApiKey`
- **Signature**: `Regextester(RegextesterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1RegextesterResponse`
- **Error**: `ApiException<RegextesterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RegextesterRequest` | `src/ApiVerve/Requests/TextProcessing/RegextesterRequest.cs` |
| `V1RegextesterRequest` | `src/ApiVerve/Models/V1RegextesterRequest.cs` |
| `V1RegextesterResponse` | `src/ApiVerve/Models/V1RegextesterResponse.cs` |
| `RegextesterError` | `src/ApiVerve/Errors/RegextesterError.cs` |

### Removepunctuation

- **Auth**: `options.ApiKey`
- **Signature**: `Removepunctuation(RemovepunctuationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1RemovepunctuationResponse`
- **Error**: `ApiException<RemovepunctuationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemovepunctuationRequest` | `src/ApiVerve/Requests/TextProcessing/RemovepunctuationRequest.cs` |
| `V1RemovepunctuationRequest` | `src/ApiVerve/Models/V1RemovepunctuationRequest.cs` |
| `V1RemovepunctuationResponse` | `src/ApiVerve/Models/V1RemovepunctuationResponse.cs` |
| `RemovepunctuationError` | `src/ApiVerve/Errors/RemovepunctuationError.cs` |

### Reversetext

- **Auth**: `options.ApiKey`
- **Signature**: `Reversetext(ReversetextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1ReversetextResponse`
- **Error**: `ApiException<ReversetextError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReversetextRequest` | `src/ApiVerve/Requests/TextProcessing/ReversetextRequest.cs` |
| `V1ReversetextRequest` | `src/ApiVerve/Models/V1ReversetextRequest.cs` |
| `V1ReversetextResponse` | `src/ApiVerve/Models/V1ReversetextResponse.cs` |
| `ReversetextError` | `src/ApiVerve/Errors/ReversetextError.cs` |

### Slugify

- **Auth**: `options.ApiKey`
- **Signature**: `Slugify(SlugifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SlugifyResponse`
- **Error**: `ApiException<SlugifyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SlugifyRequest` | `src/ApiVerve/Requests/TextProcessing/SlugifyRequest.cs` |
| `V1SlugifyRequest` | `src/ApiVerve/Models/V1SlugifyRequest.cs` |
| `V1SlugifyResponse` | `src/ApiVerve/Models/V1SlugifyResponse.cs` |
| `SlugifyError` | `src/ApiVerve/Errors/SlugifyError.cs` |

### Spellchecker

- **Auth**: `options.ApiKey`
- **Signature**: `Spellchecker(SpellcheckerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SpellcheckerResponse`
- **Error**: `ApiException<SpellcheckerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpellcheckerRequest` | `src/ApiVerve/Requests/TextProcessing/SpellcheckerRequest.cs` |
| `V1SpellcheckerRequest` | `src/ApiVerve/Models/V1SpellcheckerRequest.cs` |
| `V1SpellcheckerResponse` | `src/ApiVerve/Models/V1SpellcheckerResponse.cs` |
| `SpellcheckerError` | `src/ApiVerve/Errors/SpellcheckerError.cs` |

### Syllablecounter

- **Auth**: `options.ApiKey`
- **Signature**: `Syllablecounter(SyllablecounterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SyllablecounterResponse`
- **Error**: `ApiException<SyllablecounterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SyllablecounterRequest` | `src/ApiVerve/Requests/TextProcessing/SyllablecounterRequest.cs` |
| `V1SyllablecounterRequest` | `src/ApiVerve/Models/V1SyllablecounterRequest.cs` |
| `V1SyllablecounterResponse` | `src/ApiVerve/Models/V1SyllablecounterResponse.cs` |
| `SyllablecounterError` | `src/ApiVerve/Errors/SyllablecounterError.cs` |

### Taxidvalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Taxidvalidator(TaxidvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Taxid`
- **Query params (wire ← C#)**: `taxid` ← `Taxid`
- **Returns**: `V1TaxidvalidatorResponse`
- **Error**: `ApiException<TaxidvalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TaxidvalidatorRequest` | `src/ApiVerve/Requests/TextProcessing/TaxidvalidatorRequest.cs` |
| `V1TaxidvalidatorResponse` | `src/ApiVerve/Models/V1TaxidvalidatorResponse.cs` |
| `TaxidvalidatorError` | `src/ApiVerve/Errors/TaxidvalidatorError.cs` |

### Tenseconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Tenseconverter(TenseconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1TenseconverterResponse`
- **Error**: `ApiException<TenseconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TenseconverterRequest` | `src/ApiVerve/Requests/TextProcessing/TenseconverterRequest.cs` |
| `V1TenseconverterRequest` | `src/ApiVerve/Models/V1TenseconverterRequest.cs` |
| `V1TenseconverterResponse` | `src/ApiVerve/Models/V1TenseconverterResponse.cs` |
| `TenseconverterError` | `src/ApiVerve/Errors/TenseconverterError.cs` |

### Textlanguage

- **Auth**: `options.ApiKey`
- **Signature**: `Textlanguage(TextlanguageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1TextlanguageResponse`
- **Error**: `ApiException<TextlanguageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TextlanguageRequest` | `src/ApiVerve/Requests/TextProcessing/TextlanguageRequest.cs` |
| `V1TextlanguageRequest` | `src/ApiVerve/Models/V1TextlanguageRequest.cs` |
| `V1TextlanguageResponse` | `src/ApiVerve/Models/V1TextlanguageResponse.cs` |
| `TextlanguageError` | `src/ApiVerve/Errors/TextlanguageError.cs` |

### Textsimilarity

- **Auth**: `options.ApiKey`
- **Signature**: `Textsimilarity(TextsimilarityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1TextsimilarityResponse`
- **Error**: `ApiException<TextsimilarityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TextsimilarityRequest` | `src/ApiVerve/Requests/TextProcessing/TextsimilarityRequest.cs` |
| `V1TextsimilarityRequest` | `src/ApiVerve/Models/V1TextsimilarityRequest.cs` |
| `V1TextsimilarityResponse` | `src/ApiVerve/Models/V1TextsimilarityResponse.cs` |
| `TextsimilarityError` | `src/ApiVerve/Errors/TextsimilarityError.cs` |

### Textstyler

- **Auth**: `options.ApiKey`
- **Signature**: `Textstyler(TextstylerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1TextstylerResponse`
- **Error**: `ApiException<TextstylerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TextstylerRequest` | `src/ApiVerve/Requests/TextProcessing/TextstylerRequest.cs` |
| `V1TextstylerRequest` | `src/ApiVerve/Models/V1TextstylerRequest.cs` |
| `V1TextstylerResponse` | `src/ApiVerve/Models/V1TextstylerResponse.cs` |
| `TextstylerError` | `src/ApiVerve/Errors/TextstylerError.cs` |

### Textsummarizer

- **Auth**: `options.ApiKey`
- **Signature**: `Textsummarizer(TextsummarizerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1TextsummarizerResponse`
- **Error**: `ApiException<TextsummarizerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TextsummarizerRequest` | `src/ApiVerve/Requests/TextProcessing/TextsummarizerRequest.cs` |
| `V1TextsummarizerRequest` | `src/ApiVerve/Models/V1TextsummarizerRequest.cs` |
| `V1TextsummarizerResponse` | `src/ApiVerve/Models/V1TextsummarizerResponse.cs` |
| `TextsummarizerError` | `src/ApiVerve/Errors/TextsummarizerError.cs` |

### Texttoemoji

- **Auth**: `options.ApiKey`
- **Signature**: `Texttoemoji(TexttoemojiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1TexttoemojiResponse`
- **Error**: `ApiException<TexttoemojiError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TexttoemojiRequest` | `src/ApiVerve/Requests/TextProcessing/TexttoemojiRequest.cs` |
| `V1TexttoemojiRequest` | `src/ApiVerve/Models/V1TexttoemojiRequest.cs` |
| `V1TexttoemojiResponse` | `src/ApiVerve/Models/V1TexttoemojiResponse.cs` |
| `TexttoemojiError` | `src/ApiVerve/Errors/TexttoemojiError.cs` |

### Titlecapitalization

- **Auth**: `options.ApiKey`
- **Signature**: `Titlecapitalization(TitlecapitalizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1TitlecapitalizationResponse`
- **Error**: `ApiException<TitlecapitalizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TitlecapitalizationRequest` | `src/ApiVerve/Requests/TextProcessing/TitlecapitalizationRequest.cs` |
| `V1TitlecapitalizationRequest` | `src/ApiVerve/Models/V1TitlecapitalizationRequest.cs` |
| `V1TitlecapitalizationResponse` | `src/ApiVerve/Models/V1TitlecapitalizationResponse.cs` |
| `TitlecapitalizationError` | `src/ApiVerve/Errors/TitlecapitalizationError.cs` |

### Translator

- **Auth**: `options.ApiKey`
- **Signature**: `Translator(TranslatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1TranslatorResponse`
- **Error**: `ApiException<TranslatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslatorRequest` | `src/ApiVerve/Requests/TextProcessing/TranslatorRequest.cs` |
| `V1TranslatorRequest` | `src/ApiVerve/Models/V1TranslatorRequest.cs` |
| `V1TranslatorResponse` | `src/ApiVerve/Models/V1TranslatorResponse.cs` |
| `TranslatorError` | `src/ApiVerve/Errors/TranslatorError.cs` |

### Vowelcounter

- **Auth**: `options.ApiKey`
- **Signature**: `Vowelcounter(VowelcounterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1VowelcounterResponse`
- **Error**: `ApiException<VowelcounterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VowelcounterRequest` | `src/ApiVerve/Requests/TextProcessing/VowelcounterRequest.cs` |
| `V1VowelcounterRequest` | `src/ApiVerve/Models/V1VowelcounterRequest.cs` |
| `V1VowelcounterResponse` | `src/ApiVerve/Models/V1VowelcounterResponse.cs` |
| `VowelcounterError` | `src/ApiVerve/Errors/VowelcounterError.cs` |

### Websitereadability

- **Auth**: `options.ApiKey`
- **Signature**: `Websitereadability(WebsitereadabilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1WebsitereadabilityResponse`
- **Error**: `ApiException<WebsitereadabilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebsitereadabilityRequest` | `src/ApiVerve/Requests/TextProcessing/WebsitereadabilityRequest.cs` |
| `V1WebsitereadabilityRequest` | `src/ApiVerve/Models/V1WebsitereadabilityRequest.cs` |
| `V1WebsitereadabilityResponse` | `src/ApiVerve/Models/V1WebsitereadabilityResponse.cs` |
| `WebsitereadabilityError` | `src/ApiVerve/Errors/WebsitereadabilityError.cs` |

### Wordopposite

- **Auth**: `options.ApiKey`
- **Signature**: `Wordopposite(WordoppositeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Word`
- **Query params (wire ← C#)**: `word` ← `Word`
- **Returns**: `V1WordoppositeResponse`
- **Error**: `ApiException<WordoppositeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WordoppositeRequest` | `src/ApiVerve/Requests/TextProcessing/WordoppositeRequest.cs` |
| `V1WordoppositeResponse` | `src/ApiVerve/Models/V1WordoppositeResponse.cs` |
| `WordoppositeError` | `src/ApiVerve/Errors/WordoppositeError.cs` |

### Wordpronunciation

- **Auth**: `options.ApiKey`
- **Signature**: `Wordpronunciation(WordpronunciationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Word`
- **Query params (wire ← C#)**: `word` ← `Word`
- **Returns**: `V1WordpronunciationResponse`
- **Error**: `ApiException<WordpronunciationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WordpronunciationRequest` | `src/ApiVerve/Requests/TextProcessing/WordpronunciationRequest.cs` |
| `V1WordpronunciationResponse` | `src/ApiVerve/Models/V1WordpronunciationResponse.cs` |
| `WordpronunciationError` | `src/ApiVerve/Errors/WordpronunciationError.cs` |

### Wordrhymes

- **Auth**: `options.ApiKey`
- **Signature**: `Wordrhymes(WordrhymesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Word`
- **Query params (wire ← C#)**: `word` ← `Word`, `limit` ← `Limit`
- **Returns**: `V1WordrhymesResponse`
- **Error**: `ApiException<WordrhymesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WordrhymesRequest` | `src/ApiVerve/Requests/TextProcessing/WordrhymesRequest.cs` |
| `V1WordrhymesResponse` | `src/ApiVerve/Models/V1WordrhymesResponse.cs` |
| `WordrhymesError` | `src/ApiVerve/Errors/WordrhymesError.cs` |

