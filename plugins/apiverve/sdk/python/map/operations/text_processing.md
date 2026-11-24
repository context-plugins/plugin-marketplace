<!-- Generated file — do not edit; regenerated with the SDK. -->

# TextProcessing — operations

Accessor: `client.text_processing` · Source: `api_verve/apis/text_processing.py` · 45 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.text_processing.acronymexpander

- **Route**: `GET /v1/acronymexpander`
- **Auth**: `api_key`
- **Signature**: `def acronymexpander(acronym: str, *, context: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `acronym`
- **Params**: `acronym` — query · `context` — query
- **Returns (parsed)**: `V1AcronymexpanderResponse`
- **Returns (raw)**: `ApiResult[V1AcronymexpanderResponse, AcronymexpanderErrorBody]`
- **Error**: `AcronymexpanderErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AcronymexpanderResponse` | `api_verve/models/v1_acronymexpander_response.py` |
| `AcronymexpanderErrorBody` | `api_verve/errors/acronymexpander_error.py` |

### client.text_processing.anagramdetector

- **Route**: `GET /v1/anagramdetector`
- **Auth**: `api_key`
- **Signature**: `def anagramdetector(text1: str, text2: str, *, ignorecase: bool | None = None, ignorespaces: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `text1`, `text2`
- **Params**: `text1` — query · `text2` — query · `ignorecase` — query · `ignorespaces` — query
- **Returns (parsed)**: `V1AnagramdetectorResponse`
- **Returns (raw)**: `ApiResult[V1AnagramdetectorResponse, AnagramdetectorErrorBody]`
- **Error**: `AnagramdetectorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AnagramdetectorResponse` | `api_verve/models/v1_anagramdetector_response.py` |
| `AnagramdetectorErrorBody` | `api_verve/errors/anagramdetector_error.py` |

### client.text_processing.antonym

- **Route**: `GET /v1/antonym`
- **Auth**: `api_key`
- **Signature**: `def antonym(word: str, *, language: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `word`
- **Params**: `word` — query · `language` — query
- **Returns (parsed)**: `V1AntonymResponse`
- **Returns (raw)**: `ApiResult[V1AntonymResponse, AntonymErrorBody]`
- **Error**: `AntonymErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AntonymResponse` | `api_verve/models/v1_antonym_response.py` |
| `AntonymErrorBody` | `api_verve/errors/antonym_error.py` |

### client.text_processing.cronparser

- **Route**: `GET /v1/cronparser`
- **Auth**: `api_key`
- **Signature**: `def cronparser(expression: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `expression`
- **Params**: `expression` — query
- **Returns (parsed)**: `V1CronparserResponse`
- **Returns (raw)**: `ApiResult[V1CronparserResponse, CronparserErrorBody]`
- **Error**: `CronparserErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CronparserResponse` | `api_verve/models/v1_cronparser_response.py` |
| `CronparserErrorBody` | `api_verve/errors/cronparser_error.py` |

### client.text_processing.datamasking

- **Route**: `POST /v1/datamasking`
- **Auth**: `api_key`
- **Signature**: `def datamasking(body: V1DatamaskingRequest | V1DatamaskingRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1DatamaskingResponse`
- **Returns (raw)**: `ApiResult[V1DatamaskingResponse, DatamaskingErrorBody]`
- **Error**: `DatamaskingErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DatamaskingRequest` | `api_verve/models/v1_datamasking_request.py` |
| `V1DatamaskingRequestDict` | `api_verve/models/v1_datamasking_request.py` |
| `V1DatamaskingResponse` | `api_verve/models/v1_datamasking_response.py` |
| `DatamaskingErrorBody` | `api_verve/errors/datamasking_error.py` |

### client.text_processing.didyoumean

- **Route**: `GET /v1/didyoumean`
- **Auth**: `api_key`
- **Signature**: `def didyoumean(query: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `query`
- **Params**: `query` — query
- **Returns (parsed)**: `V1DidyoumeanResponse`
- **Returns (raw)**: `ApiResult[V1DidyoumeanResponse, DidyoumeanErrorBody]`
- **Error**: `DidyoumeanErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DidyoumeanResponse` | `api_verve/models/v1_didyoumean_response.py` |
| `DidyoumeanErrorBody` | `api_verve/errors/didyoumean_error.py` |

### client.text_processing.emojidecorator

- **Route**: `POST /v1/emojidecorator`
- **Auth**: `api_key`
- **Signature**: `def emojidecorator(body: V1EmojidecoratorRequest | V1EmojidecoratorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1EmojidecoratorResponse`
- **Returns (raw)**: `ApiResult[V1EmojidecoratorResponse, EmojidecoratorErrorBody]`
- **Error**: `EmojidecoratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1EmojidecoratorRequest` | `api_verve/models/v1_emojidecorator_request.py` |
| `V1EmojidecoratorRequestDict` | `api_verve/models/v1_emojidecorator_request.py` |
| `V1EmojidecoratorResponse` | `api_verve/models/v1_emojidecorator_response.py` |
| `EmojidecoratorErrorBody` | `api_verve/errors/emojidecorator_error.py` |

### client.text_processing.gibberishdetector

- **Route**: `POST /v1/gibberishdetector`
- **Auth**: `api_key`
- **Signature**: `def gibberishdetector(body: V1GibberishdetectorRequest | V1GibberishdetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1GibberishdetectorResponse`
- **Returns (raw)**: `ApiResult[V1GibberishdetectorResponse, GibberishdetectorErrorBody]`
- **Error**: `GibberishdetectorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1GibberishdetectorRequest` | `api_verve/models/v1_gibberishdetector_request.py` |
| `V1GibberishdetectorRequestDict` | `api_verve/models/v1_gibberishdetector_request.py` |
| `V1GibberishdetectorResponse` | `api_verve/models/v1_gibberishdetector_response.py` |
| `GibberishdetectorErrorBody` | `api_verve/errors/gibberishdetector_error.py` |

### client.text_processing.grammarcheck

- **Route**: `POST /v1/grammarcheck`
- **Auth**: `api_key`
- **Signature**: `def grammarcheck(body: V1GrammarcheckRequest | V1GrammarcheckRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1GrammarcheckResponse`
- **Returns (raw)**: `ApiResult[V1GrammarcheckResponse, GrammarcheckErrorBody]`
- **Error**: `GrammarcheckErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1GrammarcheckRequest` | `api_verve/models/v1_grammarcheck_request.py` |
| `V1GrammarcheckRequestDict` | `api_verve/models/v1_grammarcheck_request.py` |
| `V1GrammarcheckResponse` | `api_verve/models/v1_grammarcheck_response.py` |
| `GrammarcheckErrorBody` | `api_verve/errors/grammarcheck_error.py` |

### client.text_processing.isbnvalidator

- **Route**: `GET /v1/isbnvalidator`
- **Auth**: `api_key`
- **Signature**: `def isbnvalidator(isbn: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `isbn`
- **Params**: `isbn` — query
- **Returns (parsed)**: `V1IsbnvalidatorResponse`
- **Returns (raw)**: `ApiResult[V1IsbnvalidatorResponse, IsbnvalidatorErrorBody]`
- **Error**: `IsbnvalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1IsbnvalidatorResponse` | `api_verve/models/v1_isbnvalidator_response.py` |
| `IsbnvalidatorErrorBody` | `api_verve/errors/isbnvalidator_error.py` |

### client.text_processing.jsonschemavalidator

- **Route**: `POST /v1/jsonschemavalidator`
- **Auth**: `api_key`
- **Signature**: `def jsonschemavalidator(body: V1JsonschemavalidatorRequest | V1JsonschemavalidatorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1JsonschemavalidatorResponse`
- **Returns (raw)**: `ApiResult[V1JsonschemavalidatorResponse, JsonschemavalidatorErrorBody]`
- **Error**: `JsonschemavalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1JsonschemavalidatorRequest` | `api_verve/models/v1_jsonschemavalidator_request.py` |
| `V1JsonschemavalidatorRequestDict` | `api_verve/models/v1_jsonschemavalidator_request.py` |
| `V1JsonschemavalidatorResponse` | `api_verve/models/v1_jsonschemavalidator_response.py` |
| `JsonschemavalidatorErrorBody` | `api_verve/errors/jsonschemavalidator_error.py` |

### client.text_processing.keywordextractor

- **Route**: `POST /v1/keywordextractor`
- **Auth**: `api_key`
- **Signature**: `def keywordextractor(body: V1KeywordextractorRequest | V1KeywordextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1KeywordextractorResponse`
- **Returns (raw)**: `ApiResult[V1KeywordextractorResponse, KeywordextractorErrorBody]`
- **Error**: `KeywordextractorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1KeywordextractorRequest` | `api_verve/models/v1_keywordextractor_request.py` |
| `V1KeywordextractorRequestDict` | `api_verve/models/v1_keywordextractor_request.py` |
| `V1KeywordextractorResponse` | `api_verve/models/v1_keywordextractor_response.py` |
| `KeywordextractorErrorBody` | `api_verve/errors/keywordextractor_error.py` |

### client.text_processing.leetspeak

- **Route**: `POST /v1/leetspeak`
- **Auth**: `api_key`
- **Signature**: `def leetspeak(body: V1LeetspeakRequest | V1LeetspeakRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1LeetspeakResponse`
- **Returns (raw)**: `ApiResult[V1LeetspeakResponse, LeetspeakErrorBody]`
- **Error**: `LeetspeakErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LeetspeakRequest` | `api_verve/models/v1_leetspeak_request.py` |
| `V1LeetspeakRequestDict` | `api_verve/models/v1_leetspeak_request.py` |
| `V1LeetspeakResponse` | `api_verve/models/v1_leetspeak_response.py` |
| `LeetspeakErrorBody` | `api_verve/errors/leetspeak_error.py` |

### client.text_processing.lemmatizer

- **Route**: `POST /v1/lemmatizer`
- **Auth**: `api_key`
- **Signature**: `def lemmatizer(body: V1LemmatizerRequest | V1LemmatizerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1LemmatizerResponse`
- **Returns (raw)**: `ApiResult[V1LemmatizerResponse, LemmatizerErrorBody]`
- **Error**: `LemmatizerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LemmatizerRequest` | `api_verve/models/v1_lemmatizer_request.py` |
| `V1LemmatizerRequestDict` | `api_verve/models/v1_lemmatizer_request.py` |
| `V1LemmatizerResponse` | `api_verve/models/v1_lemmatizer_response.py` |
| `LemmatizerErrorBody` | `api_verve/errors/lemmatizer_error.py` |

### client.text_processing.levenshteindistance

- **Route**: `POST /v1/levenshteindistance`
- **Auth**: `api_key`
- **Signature**: `def levenshteindistance(body: V1LevenshteindistanceRequest | V1LevenshteindistanceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1LevenshteindistanceResponse`
- **Returns (raw)**: `ApiResult[V1LevenshteindistanceResponse, LevenshteindistanceErrorBody]`
- **Error**: `LevenshteindistanceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LevenshteindistanceRequest` | `api_verve/models/v1_levenshteindistance_request.py` |
| `V1LevenshteindistanceRequestDict` | `api_verve/models/v1_levenshteindistance_request.py` |
| `V1LevenshteindistanceResponse` | `api_verve/models/v1_levenshteindistance_response.py` |
| `LevenshteindistanceErrorBody` | `api_verve/errors/levenshteindistance_error.py` |

### client.text_processing.lexicon

- **Route**: `GET /v1/lexicon`
- **Auth**: `api_key`
- **Signature**: `def lexicon(word: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `word`
- **Params**: `word` — query
- **Returns (parsed)**: `V1LexiconResponse`
- **Returns (raw)**: `ApiResult[V1LexiconResponse, LexiconErrorBody]`
- **Error**: `LexiconErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LexiconResponse` | `api_verve/models/v1_lexicon_response.py` |
| `LexiconErrorBody` | `api_verve/errors/lexicon_error.py` |

### client.text_processing.linesorter

- **Route**: `POST /v1/linesorter`
- **Auth**: `api_key`
- **Signature**: `def linesorter(body: V1LinesorterRequest | V1LinesorterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1LinesorterResponse`
- **Returns (raw)**: `ApiResult[V1LinesorterResponse, LinesorterErrorBody]`
- **Error**: `LinesorterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LinesorterRequest` | `api_verve/models/v1_linesorter_request.py` |
| `V1LinesorterRequestDict` | `api_verve/models/v1_linesorter_request.py` |
| `V1LinesorterResponse` | `api_verve/models/v1_linesorter_response.py` |
| `LinesorterErrorBody` | `api_verve/errors/linesorter_error.py` |

### client.text_processing.markdownlinkextractor

- **Route**: `POST /v1/markdownlinkextractor`
- **Auth**: `api_key`
- **Signature**: `def markdownlinkextractor(body: V1MarkdownlinkextractorRequest | V1MarkdownlinkextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1MarkdownlinkextractorResponse`
- **Returns (raw)**: `ApiResult[V1MarkdownlinkextractorResponse, MarkdownlinkextractorErrorBody]`
- **Error**: `MarkdownlinkextractorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MarkdownlinkextractorRequest` | `api_verve/models/v1_markdownlinkextractor_request.py` |
| `V1MarkdownlinkextractorRequestDict` | `api_verve/models/v1_markdownlinkextractor_request.py` |
| `V1MarkdownlinkextractorResponse` | `api_verve/models/v1_markdownlinkextractor_response.py` |
| `MarkdownlinkextractorErrorBody` | `api_verve/errors/markdownlinkextractor_error.py` |

### client.text_processing.palindromechecker

- **Route**: `GET /v1/palindromechecker`
- **Auth**: `api_key`
- **Signature**: `def palindromechecker(text: str, *, ignorecase: bool | None = None, ignorespaces: bool | None = None, ignorepunctuation: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `text`
- **Params**: `text` — query · `ignorecase` — query · `ignorespaces` — query · `ignorepunctuation` — query
- **Returns (parsed)**: `V1PalindromecheckerResponse`
- **Returns (raw)**: `ApiResult[V1PalindromecheckerResponse, PalindromecheckerErrorBody]`
- **Error**: `PalindromecheckerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PalindromecheckerResponse` | `api_verve/models/v1_palindromechecker_response.py` |
| `PalindromecheckerErrorBody` | `api_verve/errors/palindromechecker_error.py` |

### client.text_processing.partsofspeech

- **Route**: `POST /v1/partsofspeech`
- **Auth**: `api_key`
- **Signature**: `def partsofspeech(body: V1PartsofspeechRequest | V1PartsofspeechRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1PartsofspeechResponse`
- **Returns (raw)**: `ApiResult[V1PartsofspeechResponse, PartsofspeechErrorBody]`
- **Error**: `PartsofspeechErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PartsofspeechRequest` | `api_verve/models/v1_partsofspeech_request.py` |
| `V1PartsofspeechRequestDict` | `api_verve/models/v1_partsofspeech_request.py` |
| `V1PartsofspeechResponse` | `api_verve/models/v1_partsofspeech_response.py` |
| `PartsofspeechErrorBody` | `api_verve/errors/partsofspeech_error.py` |

### client.text_processing.phonetic

- **Route**: `GET /v1/phonetic`
- **Auth**: `api_key`
- **Signature**: `def phonetic(word: str, *, algorithm: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `word`
- **Params**: `word` — query · `algorithm` — query
- **Returns (parsed)**: `V1PhoneticResponse`
- **Returns (raw)**: `ApiResult[V1PhoneticResponse, PhoneticErrorBody]`
- **Error**: `PhoneticErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PhoneticResponse` | `api_verve/models/v1_phonetic_response.py` |
| `PhoneticErrorBody` | `api_verve/errors/phonetic_error.py` |

### client.text_processing.piglatin

- **Route**: `POST /v1/piglatin`
- **Auth**: `api_key`
- **Signature**: `def piglatin(body: V1PiglatinRequest | V1PiglatinRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1PiglatinResponse`
- **Returns (raw)**: `ApiResult[V1PiglatinResponse, PiglatinErrorBody]`
- **Error**: `PiglatinErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PiglatinRequest` | `api_verve/models/v1_piglatin_request.py` |
| `V1PiglatinRequestDict` | `api_verve/models/v1_piglatin_request.py` |
| `V1PiglatinResponse` | `api_verve/models/v1_piglatin_response.py` |
| `PiglatinErrorBody` | `api_verve/errors/piglatin_error.py` |

### client.text_processing.profanityfilter

- **Route**: `POST /v1/profanityfilter`
- **Auth**: `api_key`
- **Signature**: `def profanityfilter(body: V1ProfanityfilterRequest | V1ProfanityfilterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1ProfanityfilterResponse`
- **Returns (raw)**: `ApiResult[V1ProfanityfilterResponse, ProfanityfilterErrorBody]`
- **Error**: `ProfanityfilterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ProfanityfilterRequest` | `api_verve/models/v1_profanityfilter_request.py` |
| `V1ProfanityfilterRequestDict` | `api_verve/models/v1_profanityfilter_request.py` |
| `V1ProfanityfilterResponse` | `api_verve/models/v1_profanityfilter_response.py` |
| `ProfanityfilterErrorBody` | `api_verve/errors/profanityfilter_error.py` |

### client.text_processing.readabilityscore

- **Route**: `POST /v1/readabilityscore`
- **Auth**: `api_key`
- **Signature**: `def readabilityscore(body: V1ReadabilityscoreRequest | V1ReadabilityscoreRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1ReadabilityscoreResponse`
- **Returns (raw)**: `ApiResult[V1ReadabilityscoreResponse, ReadabilityscoreErrorBody]`
- **Error**: `ReadabilityscoreErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ReadabilityscoreRequest` | `api_verve/models/v1_readabilityscore_request.py` |
| `V1ReadabilityscoreRequestDict` | `api_verve/models/v1_readabilityscore_request.py` |
| `V1ReadabilityscoreResponse` | `api_verve/models/v1_readabilityscore_response.py` |
| `ReadabilityscoreErrorBody` | `api_verve/errors/readabilityscore_error.py` |

### client.text_processing.readingtime

- **Route**: `POST /v1/readingtime`
- **Auth**: `api_key`
- **Signature**: `def readingtime(body: V1ReadingtimeRequest | V1ReadingtimeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1ReadingtimeResponse`
- **Returns (raw)**: `ApiResult[V1ReadingtimeResponse, ReadingtimeErrorBody]`
- **Error**: `ReadingtimeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ReadingtimeRequest` | `api_verve/models/v1_readingtime_request.py` |
| `V1ReadingtimeRequestDict` | `api_verve/models/v1_readingtime_request.py` |
| `V1ReadingtimeResponse` | `api_verve/models/v1_readingtime_response.py` |
| `ReadingtimeErrorBody` | `api_verve/errors/readingtime_error.py` |

### client.text_processing.regextester

- **Route**: `POST /v1/regextester`
- **Auth**: `api_key`
- **Signature**: `def regextester(body: V1RegextesterRequest | V1RegextesterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1RegextesterResponse`
- **Returns (raw)**: `ApiResult[V1RegextesterResponse, RegextesterErrorBody]`
- **Error**: `RegextesterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RegextesterRequest` | `api_verve/models/v1_regextester_request.py` |
| `V1RegextesterRequestDict` | `api_verve/models/v1_regextester_request.py` |
| `V1RegextesterResponse` | `api_verve/models/v1_regextester_response.py` |
| `RegextesterErrorBody` | `api_verve/errors/regextester_error.py` |

### client.text_processing.removepunctuation

- **Route**: `POST /v1/removepunctuation`
- **Auth**: `api_key`
- **Signature**: `def removepunctuation(body: V1RemovepunctuationRequest | V1RemovepunctuationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1RemovepunctuationResponse`
- **Returns (raw)**: `ApiResult[V1RemovepunctuationResponse, RemovepunctuationErrorBody]`
- **Error**: `RemovepunctuationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RemovepunctuationRequest` | `api_verve/models/v1_removepunctuation_request.py` |
| `V1RemovepunctuationRequestDict` | `api_verve/models/v1_removepunctuation_request.py` |
| `V1RemovepunctuationResponse` | `api_verve/models/v1_removepunctuation_response.py` |
| `RemovepunctuationErrorBody` | `api_verve/errors/removepunctuation_error.py` |

### client.text_processing.reversetext

- **Route**: `POST /v1/reversetext`
- **Auth**: `api_key`
- **Signature**: `def reversetext(body: V1ReversetextRequest | V1ReversetextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1ReversetextResponse`
- **Returns (raw)**: `ApiResult[V1ReversetextResponse, ReversetextErrorBody]`
- **Error**: `ReversetextErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ReversetextRequest` | `api_verve/models/v1_reversetext_request.py` |
| `V1ReversetextRequestDict` | `api_verve/models/v1_reversetext_request.py` |
| `V1ReversetextResponse` | `api_verve/models/v1_reversetext_response.py` |
| `ReversetextErrorBody` | `api_verve/errors/reversetext_error.py` |

### client.text_processing.slugify

- **Route**: `POST /v1/slugify`
- **Auth**: `api_key`
- **Signature**: `def slugify(body: V1SlugifyRequest | V1SlugifyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SlugifyResponse`
- **Returns (raw)**: `ApiResult[V1SlugifyResponse, SlugifyErrorBody]`
- **Error**: `SlugifyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SlugifyRequest` | `api_verve/models/v1_slugify_request.py` |
| `V1SlugifyRequestDict` | `api_verve/models/v1_slugify_request.py` |
| `V1SlugifyResponse` | `api_verve/models/v1_slugify_response.py` |
| `SlugifyErrorBody` | `api_verve/errors/slugify_error.py` |

### client.text_processing.spellchecker

- **Route**: `POST /v1/spellchecker`
- **Auth**: `api_key`
- **Signature**: `def spellchecker(body: V1SpellcheckerRequest | V1SpellcheckerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SpellcheckerResponse`
- **Returns (raw)**: `ApiResult[V1SpellcheckerResponse, SpellcheckerErrorBody]`
- **Error**: `SpellcheckerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SpellcheckerRequest` | `api_verve/models/v1_spellchecker_request.py` |
| `V1SpellcheckerRequestDict` | `api_verve/models/v1_spellchecker_request.py` |
| `V1SpellcheckerResponse` | `api_verve/models/v1_spellchecker_response.py` |
| `SpellcheckerErrorBody` | `api_verve/errors/spellchecker_error.py` |

### client.text_processing.syllablecounter

- **Route**: `POST /v1/syllablecounter`
- **Auth**: `api_key`
- **Signature**: `def syllablecounter(body: V1SyllablecounterRequest | V1SyllablecounterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SyllablecounterResponse`
- **Returns (raw)**: `ApiResult[V1SyllablecounterResponse, SyllablecounterErrorBody]`
- **Error**: `SyllablecounterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SyllablecounterRequest` | `api_verve/models/v1_syllablecounter_request.py` |
| `V1SyllablecounterRequestDict` | `api_verve/models/v1_syllablecounter_request.py` |
| `V1SyllablecounterResponse` | `api_verve/models/v1_syllablecounter_response.py` |
| `SyllablecounterErrorBody` | `api_verve/errors/syllablecounter_error.py` |

### client.text_processing.taxidvalidator

- **Route**: `GET /v1/taxidvalidator`
- **Auth**: `api_key`
- **Signature**: `def taxidvalidator(taxid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `taxid`
- **Params**: `taxid` — query
- **Returns (parsed)**: `V1TaxidvalidatorResponse`
- **Returns (raw)**: `ApiResult[V1TaxidvalidatorResponse, TaxidvalidatorErrorBody]`
- **Error**: `TaxidvalidatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TaxidvalidatorResponse` | `api_verve/models/v1_taxidvalidator_response.py` |
| `TaxidvalidatorErrorBody` | `api_verve/errors/taxidvalidator_error.py` |

### client.text_processing.tenseconverter

- **Route**: `POST /v1/tenseconverter`
- **Auth**: `api_key`
- **Signature**: `def tenseconverter(body: V1TenseconverterRequest | V1TenseconverterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1TenseconverterResponse`
- **Returns (raw)**: `ApiResult[V1TenseconverterResponse, TenseconverterErrorBody]`
- **Error**: `TenseconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TenseconverterRequest` | `api_verve/models/v1_tenseconverter_request.py` |
| `V1TenseconverterRequestDict` | `api_verve/models/v1_tenseconverter_request.py` |
| `V1TenseconverterResponse` | `api_verve/models/v1_tenseconverter_response.py` |
| `TenseconverterErrorBody` | `api_verve/errors/tenseconverter_error.py` |

### client.text_processing.textlanguage

- **Route**: `POST /v1/textlanguage`
- **Auth**: `api_key`
- **Signature**: `def textlanguage(body: V1TextlanguageRequest | V1TextlanguageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1TextlanguageResponse`
- **Returns (raw)**: `ApiResult[V1TextlanguageResponse, TextlanguageErrorBody]`
- **Error**: `TextlanguageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TextlanguageRequest` | `api_verve/models/v1_textlanguage_request.py` |
| `V1TextlanguageRequestDict` | `api_verve/models/v1_textlanguage_request.py` |
| `V1TextlanguageResponse` | `api_verve/models/v1_textlanguage_response.py` |
| `TextlanguageErrorBody` | `api_verve/errors/textlanguage_error.py` |

### client.text_processing.textsimilarity

- **Route**: `POST /v1/textsimilarity`
- **Auth**: `api_key`
- **Signature**: `def textsimilarity(body: V1TextsimilarityRequest | V1TextsimilarityRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1TextsimilarityResponse`
- **Returns (raw)**: `ApiResult[V1TextsimilarityResponse, TextsimilarityErrorBody]`
- **Error**: `TextsimilarityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TextsimilarityRequest` | `api_verve/models/v1_textsimilarity_request.py` |
| `V1TextsimilarityRequestDict` | `api_verve/models/v1_textsimilarity_request.py` |
| `V1TextsimilarityResponse` | `api_verve/models/v1_textsimilarity_response.py` |
| `TextsimilarityErrorBody` | `api_verve/errors/textsimilarity_error.py` |

### client.text_processing.textstyler

- **Route**: `POST /v1/textstyler`
- **Auth**: `api_key`
- **Signature**: `def textstyler(body: V1TextstylerRequest | V1TextstylerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1TextstylerResponse`
- **Returns (raw)**: `ApiResult[V1TextstylerResponse, TextstylerErrorBody]`
- **Error**: `TextstylerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TextstylerRequest` | `api_verve/models/v1_textstyler_request.py` |
| `V1TextstylerRequestDict` | `api_verve/models/v1_textstyler_request.py` |
| `V1TextstylerResponse` | `api_verve/models/v1_textstyler_response.py` |
| `TextstylerErrorBody` | `api_verve/errors/textstyler_error.py` |

### client.text_processing.textsummarizer

- **Route**: `POST /v1/textsummarizer`
- **Auth**: `api_key`
- **Signature**: `def textsummarizer(body: V1TextsummarizerRequest | V1TextsummarizerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1TextsummarizerResponse`
- **Returns (raw)**: `ApiResult[V1TextsummarizerResponse, TextsummarizerErrorBody]`
- **Error**: `TextsummarizerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TextsummarizerRequest` | `api_verve/models/v1_textsummarizer_request.py` |
| `V1TextsummarizerRequestDict` | `api_verve/models/v1_textsummarizer_request.py` |
| `V1TextsummarizerResponse` | `api_verve/models/v1_textsummarizer_response.py` |
| `TextsummarizerErrorBody` | `api_verve/errors/textsummarizer_error.py` |

### client.text_processing.texttoemoji

- **Route**: `POST /v1/texttoemoji`
- **Auth**: `api_key`
- **Signature**: `def texttoemoji(body: V1TexttoemojiRequest | V1TexttoemojiRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1TexttoemojiResponse`
- **Returns (raw)**: `ApiResult[V1TexttoemojiResponse, TexttoemojiErrorBody]`
- **Error**: `TexttoemojiErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TexttoemojiRequest` | `api_verve/models/v1_texttoemoji_request.py` |
| `V1TexttoemojiRequestDict` | `api_verve/models/v1_texttoemoji_request.py` |
| `V1TexttoemojiResponse` | `api_verve/models/v1_texttoemoji_response.py` |
| `TexttoemojiErrorBody` | `api_verve/errors/texttoemoji_error.py` |

### client.text_processing.titlecapitalization

- **Route**: `POST /v1/titlecapitalization`
- **Auth**: `api_key`
- **Signature**: `def titlecapitalization(body: V1TitlecapitalizationRequest | V1TitlecapitalizationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1TitlecapitalizationResponse`
- **Returns (raw)**: `ApiResult[V1TitlecapitalizationResponse, TitlecapitalizationErrorBody]`
- **Error**: `TitlecapitalizationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TitlecapitalizationRequest` | `api_verve/models/v1_titlecapitalization_request.py` |
| `V1TitlecapitalizationRequestDict` | `api_verve/models/v1_titlecapitalization_request.py` |
| `V1TitlecapitalizationResponse` | `api_verve/models/v1_titlecapitalization_response.py` |
| `TitlecapitalizationErrorBody` | `api_verve/errors/titlecapitalization_error.py` |

### client.text_processing.translator

- **Route**: `POST /v1/translator`
- **Auth**: `api_key`
- **Signature**: `def translator(body: V1TranslatorRequest | V1TranslatorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1TranslatorResponse`
- **Returns (raw)**: `ApiResult[V1TranslatorResponse, TranslatorErrorBody]`
- **Error**: `TranslatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TranslatorRequest` | `api_verve/models/v1_translator_request.py` |
| `V1TranslatorRequestDict` | `api_verve/models/v1_translator_request.py` |
| `V1TranslatorResponse` | `api_verve/models/v1_translator_response.py` |
| `TranslatorErrorBody` | `api_verve/errors/translator_error.py` |

### client.text_processing.vowelcounter

- **Route**: `POST /v1/vowelcounter`
- **Auth**: `api_key`
- **Signature**: `def vowelcounter(body: V1VowelcounterRequest | V1VowelcounterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1VowelcounterResponse`
- **Returns (raw)**: `ApiResult[V1VowelcounterResponse, VowelcounterErrorBody]`
- **Error**: `VowelcounterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1VowelcounterRequest` | `api_verve/models/v1_vowelcounter_request.py` |
| `V1VowelcounterRequestDict` | `api_verve/models/v1_vowelcounter_request.py` |
| `V1VowelcounterResponse` | `api_verve/models/v1_vowelcounter_response.py` |
| `VowelcounterErrorBody` | `api_verve/errors/vowelcounter_error.py` |

### client.text_processing.websitereadability

- **Route**: `POST /v1/websitereadability`
- **Auth**: `api_key`
- **Signature**: `def websitereadability(body: V1WebsitereadabilityRequest | V1WebsitereadabilityRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1WebsitereadabilityResponse`
- **Returns (raw)**: `ApiResult[V1WebsitereadabilityResponse, WebsitereadabilityErrorBody]`
- **Error**: `WebsitereadabilityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebsitereadabilityRequest` | `api_verve/models/v1_websitereadability_request.py` |
| `V1WebsitereadabilityRequestDict` | `api_verve/models/v1_websitereadability_request.py` |
| `V1WebsitereadabilityResponse` | `api_verve/models/v1_websitereadability_response.py` |
| `WebsitereadabilityErrorBody` | `api_verve/errors/websitereadability_error.py` |

### client.text_processing.wordopposite

- **Route**: `GET /v1/wordopposite`
- **Auth**: `api_key`
- **Signature**: `def wordopposite(word: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `word`
- **Params**: `word` — query
- **Returns (parsed)**: `V1WordoppositeResponse`
- **Returns (raw)**: `ApiResult[V1WordoppositeResponse, WordoppositeErrorBody]`
- **Error**: `WordoppositeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WordoppositeResponse` | `api_verve/models/v1_wordopposite_response.py` |
| `WordoppositeErrorBody` | `api_verve/errors/wordopposite_error.py` |

### client.text_processing.wordpronunciation

- **Route**: `GET /v1/wordpronunciation`
- **Auth**: `api_key`
- **Signature**: `def wordpronunciation(word: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `word`
- **Params**: `word` — query
- **Returns (parsed)**: `V1WordpronunciationResponse`
- **Returns (raw)**: `ApiResult[V1WordpronunciationResponse, WordpronunciationErrorBody]`
- **Error**: `WordpronunciationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WordpronunciationResponse` | `api_verve/models/v1_wordpronunciation_response.py` |
| `WordpronunciationErrorBody` | `api_verve/errors/wordpronunciation_error.py` |

### client.text_processing.wordrhymes

- **Route**: `GET /v1/wordrhymes`
- **Auth**: `api_key`
- **Signature**: `def wordrhymes(word: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `word`
- **Params**: `word` — query · `limit` — query
- **Returns (parsed)**: `V1WordrhymesResponse`
- **Returns (raw)**: `ApiResult[V1WordrhymesResponse, WordrhymesErrorBody]`
- **Error**: `WordrhymesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WordrhymesResponse` | `api_verve/models/v1_wordrhymes_response.py` |
| `WordrhymesErrorBody` | `api_verve/errors/wordrhymes_error.py` |

