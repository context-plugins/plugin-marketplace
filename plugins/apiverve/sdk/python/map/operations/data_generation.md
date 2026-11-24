<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataGeneration — operations

Accessor: `client.data_generation` · Source: `api_verve/apis/data_generation.py` · 32 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_generation.acronymgenerator

- **Route**: `GET /v1/acronymgenerator`
- **Auth**: `api_key`
- **Signature**: `def acronymgenerator(text: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `text`
- **Params**: `text` — query
- **Returns (parsed)**: `V1AcronymgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1AcronymgeneratorResponse, AcronymgeneratorErrorBody]`
- **Error**: `AcronymgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AcronymgeneratorResponse` | `api_verve/models/v1_acronymgenerator_response.py` |
| `AcronymgeneratorErrorBody` | `api_verve/errors/acronymgenerator_error.py` |

### client.data_generation.babynamegenerator

- **Route**: `GET /v1/babynamegenerator`
- **Auth**: `api_key`
- **Signature**: `def babynamegenerator(gender: str, *, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `gender`
- **Params**: `gender` — query · `count` — query · `include_avatar` — query `includeAvatar`
- **Returns (parsed)**: `V1BabynamegeneratorResponse`
- **Returns (raw)**: `ApiResult[V1BabynamegeneratorResponse, BabynamegeneratorErrorBody]`
- **Error**: `BabynamegeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BabynamegeneratorResponse` | `api_verve/models/v1_babynamegenerator_response.py` |
| `BabynamegeneratorErrorBody` | `api_verve/errors/babynamegenerator_error.py` |

### client.data_generation.barcodegenerator

- **Route**: `POST /v1/barcodegenerator`
- **Auth**: `api_key`
- **Signature**: `def barcodegenerator(body: V1BarcodegeneratorRequest | V1BarcodegeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1BarcodegeneratorResponse`
- **Returns (raw)**: `ApiResult[V1BarcodegeneratorResponse, BarcodegeneratorErrorBody]`
- **Error**: `BarcodegeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BarcodegeneratorRequest` | `api_verve/models/v1_barcodegenerator_request.py` |
| `V1BarcodegeneratorRequestDict` | `api_verve/models/v1_barcodegenerator_request.py` |
| `V1BarcodegeneratorResponse` | `api_verve/models/v1_barcodegenerator_response.py` |
| `BarcodegeneratorErrorBody` | `api_verve/errors/barcodegenerator_error.py` |

### client.data_generation.bingocardgenerator

- **Route**: `GET /v1/bingocardgenerator`
- **Auth**: `api_key`
- **Signature**: `def bingocardgenerator(*, size: int | None = None, free_space: bool | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `size` — query · `free_space` — query `freeSpace` · `image` — query
- **Returns (parsed)**: `V1BingocardgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1BingocardgeneratorResponse, BingocardgeneratorErrorBody]`
- **Error**: `BingocardgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BingocardgeneratorResponse` | `api_verve/models/v1_bingocardgenerator_response.py` |
| `BingocardgeneratorErrorBody` | `api_verve/errors/bingocardgenerator_error.py` |

### client.data_generation.boggleboardgenerator

- **Route**: `GET /v1/boggleboardgenerator`
- **Auth**: `api_key`
- **Signature**: `def boggleboardgenerator(*, size: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `size` — query · `image` — query
- **Returns (parsed)**: `V1BoggleboardgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1BoggleboardgeneratorResponse, BoggleboardgeneratorErrorBody]`
- **Error**: `BoggleboardgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BoggleboardgeneratorResponse` | `api_verve/models/v1_boggleboardgenerator_response.py` |
| `BoggleboardgeneratorErrorBody` | `api_verve/errors/boggleboardgenerator_error.py` |

### client.data_generation.captchagenerator

- **Route**: `GET /v1/captchagenerator`
- **Auth**: `api_key`
- **Signature**: `def captchagenerator(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1CaptchageneratorResponse`
- **Returns (raw)**: `ApiResult[V1CaptchageneratorResponse, CaptchageneratorErrorBody]`
- **Error**: `CaptchageneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CaptchageneratorResponse` | `api_verve/models/v1_captchagenerator_response.py` |
| `CaptchageneratorErrorBody` | `api_verve/errors/captchagenerator_error.py` |

### client.data_generation.cardgenerator

- **Route**: `GET /v1/cardgenerator`
- **Auth**: `api_key`
- **Signature**: `def cardgenerator(*, brand: str | None = None, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `brand` — query · `count` — query · `include_avatar` — query `includeAvatar`
- **Returns (parsed)**: `V1CardgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1CardgeneratorResponse, CardgeneratorErrorBody]`
- **Error**: `CardgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CardgeneratorResponse` | `api_verve/models/v1_cardgenerator_response.py` |
| `CardgeneratorErrorBody` | `api_verve/errors/cardgenerator_error.py` |

### client.data_generation.chartgenerator

- **Route**: `POST /v1/chartgenerator`
- **Auth**: `api_key`
- **Signature**: `def chartgenerator(body: V1ChartgeneratorRequest | V1ChartgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1ChartgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1ChartgeneratorResponse, ChartgeneratorErrorBody]`
- **Error**: `ChartgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ChartgeneratorRequest` | `api_verve/models/v1_chartgenerator_request.py` |
| `V1ChartgeneratorRequestDict` | `api_verve/models/v1_chartgenerator_request.py` |
| `V1ChartgeneratorResponse` | `api_verve/models/v1_chartgenerator_response.py` |
| `ChartgeneratorErrorBody` | `api_verve/errors/chartgenerator_error.py` |

### client.data_generation.colorpalette

- **Route**: `GET /v1/colorpalette`
- **Auth**: `api_key`
- **Signature**: `def colorpalette(color: str, *, scheme: str | None = None, variation: str | None = None, count: int | None = None, distance: float | None = None, add_complement: bool | None = None, web_safe: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `color`
- **Params**: `color` — query · `scheme` — query · `variation` — query · `count` — query · `distance` — query · `add_complement` — query `addComplement` · `web_safe` — query `webSafe`
- **Returns (parsed)**: `V1ColorpaletteResponse`
- **Returns (raw)**: `ApiResult[V1ColorpaletteResponse, ColorpaletteErrorBody]`
- **Error**: `ColorpaletteErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ColorpaletteResponse` | `api_verve/models/v1_colorpalette_response.py` |
| `ColorpaletteErrorBody` | `api_verve/errors/colorpalette_error.py` |

### client.data_generation.commentgenerator

- **Route**: `GET /v1/commentgenerator`
- **Auth**: `api_key`
- **Signature**: `def commentgenerator(mode: str, *, tone: str | None = None, count: int | None = None, emojis: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `mode`
- **Params**: `mode` — query · `tone` — query · `count` — query · `emojis` — query
- **Returns (parsed)**: `V1CommentgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1CommentgeneratorResponse, CommentgeneratorErrorBody]`
- **Error**: `CommentgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CommentgeneratorResponse` | `api_verve/models/v1_commentgenerator_response.py` |
| `CommentgeneratorErrorBody` | `api_verve/errors/commentgenerator_error.py` |

### client.data_generation.companynamegenerator

- **Route**: `GET /v1/companynamegenerator`
- **Auth**: `api_key`
- **Signature**: `def companynamegenerator(keyword: str, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`
- **Params**: `keyword` — query · `count` — query
- **Returns (parsed)**: `V1CompanynamegeneratorResponse`
- **Returns (raw)**: `ApiResult[V1CompanynamegeneratorResponse, CompanynamegeneratorErrorBody]`
- **Error**: `CompanynamegeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CompanynamegeneratorResponse` | `api_verve/models/v1_companynamegenerator_response.py` |
| `CompanynamegeneratorErrorBody` | `api_verve/errors/companynamegenerator_error.py` |

### client.data_generation.crongenerator

- **Route**: `GET /v1/crongenerator`
- **Auth**: `api_key`
- **Signature**: `def crongenerator(schedule: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `schedule`
- **Params**: `schedule` — query
- **Returns (parsed)**: `V1CrongeneratorResponse`
- **Returns (raw)**: `ApiResult[V1CrongeneratorResponse, CrongeneratorErrorBody]`
- **Error**: `CrongeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CrongeneratorResponse` | `api_verve/models/v1_crongenerator_response.py` |
| `CrongeneratorErrorBody` | `api_verve/errors/crongenerator_error.py` |

### client.data_generation.cuidgenerator

- **Route**: `GET /v1/cuidgenerator`
- **Auth**: `api_key`
- **Signature**: `def cuidgenerator(*, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query
- **Returns (parsed)**: `V1CuidgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1CuidgeneratorResponse, CuidgeneratorErrorBody]`
- **Error**: `CuidgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CuidgeneratorResponse` | `api_verve/models/v1_cuidgenerator_response.py` |
| `CuidgeneratorErrorBody` | `api_verve/errors/cuidgenerator_error.py` |

### client.data_generation.guidgenerator

- **Route**: `GET /v1/guidgenerator`
- **Auth**: `api_key`
- **Signature**: `def guidgenerator(*, count: int | None = None, format_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `format_` — query `format`
- **Returns (parsed)**: `V1GuidgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1GuidgeneratorResponse, GuidgeneratorErrorBody]`
- **Error**: `GuidgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1GuidgeneratorResponse` | `api_verve/models/v1_guidgenerator_response.py` |
| `GuidgeneratorErrorBody` | `api_verve/errors/guidgenerator_error.py` |

### client.data_generation.hashtaggenerator

- **Route**: `POST /v1/hashtaggenerator`
- **Auth**: `api_key`
- **Signature**: `def hashtaggenerator(body: V1HashtaggeneratorRequest | V1HashtaggeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1HashtaggeneratorResponse`
- **Returns (raw)**: `ApiResult[V1HashtaggeneratorResponse, HashtaggeneratorErrorBody]`
- **Error**: `HashtaggeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HashtaggeneratorRequest` | `api_verve/models/v1_hashtaggenerator_request.py` |
| `V1HashtaggeneratorRequestDict` | `api_verve/models/v1_hashtaggenerator_request.py` |
| `V1HashtaggeneratorResponse` | `api_verve/models/v1_hashtaggenerator_response.py` |
| `HashtaggeneratorErrorBody` | `api_verve/errors/hashtaggenerator_error.py` |

### client.data_generation.imeigenerator

- **Route**: `GET /v1/imeigenerator`
- **Auth**: `api_key`
- **Signature**: `def imeigenerator(*, brand: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `brand` — query · `count` — query
- **Returns (parsed)**: `V1ImeigeneratorResponse`
- **Returns (raw)**: `ApiResult[V1ImeigeneratorResponse, ImeigeneratorErrorBody]`
- **Error**: `ImeigeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ImeigeneratorResponse` | `api_verve/models/v1_imeigenerator_response.py` |
| `ImeigeneratorErrorBody` | `api_verve/errors/imeigenerator_error.py` |

### client.data_generation.initialismgenerator

- **Route**: `POST /v1/initialismgenerator`
- **Auth**: `api_key`
- **Signature**: `def initialismgenerator(body: V1InitialismgeneratorRequest | V1InitialismgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1InitialismgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1InitialismgeneratorResponse, InitialismgeneratorErrorBody]`
- **Error**: `InitialismgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1InitialismgeneratorRequest` | `api_verve/models/v1_initialismgenerator_request.py` |
| `V1InitialismgeneratorRequestDict` | `api_verve/models/v1_initialismgenerator_request.py` |
| `V1InitialismgeneratorResponse` | `api_verve/models/v1_initialismgenerator_response.py` |
| `InitialismgeneratorErrorBody` | `api_verve/errors/initialismgenerator_error.py` |

### client.data_generation.jsonschemagenerator

- **Route**: `POST /v1/jsonschemagenerator`
- **Auth**: `api_key`
- **Signature**: `def jsonschemagenerator(body: V1JsonschemageneratorRequest | V1JsonschemageneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1JsonschemageneratorResponse`
- **Returns (raw)**: `ApiResult[V1JsonschemageneratorResponse, JsonschemageneratorErrorBody]`
- **Error**: `JsonschemageneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1JsonschemageneratorRequest` | `api_verve/models/v1_jsonschemagenerator_request.py` |
| `V1JsonschemageneratorRequestDict` | `api_verve/models/v1_jsonschemagenerator_request.py` |
| `V1JsonschemageneratorResponse` | `api_verve/models/v1_jsonschemagenerator_response.py` |
| `JsonschemageneratorErrorBody` | `api_verve/errors/jsonschemagenerator_error.py` |

### client.data_generation.loremipsumgenerator

- **Route**: `GET /v1/loremipsumgenerator`
- **Auth**: `api_key`
- **Signature**: `def loremipsumgenerator(*, paragraphs: int | None = None, startwithlorem: bool | None = None, maxlength: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `paragraphs` — query · `startwithlorem` — query · `maxlength` — query
- **Returns (parsed)**: `V1LoremipsumgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1LoremipsumgeneratorResponse, LoremipsumgeneratorErrorBody]`
- **Error**: `LoremipsumgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LoremipsumgeneratorResponse` | `api_verve/models/v1_loremipsumgenerator_response.py` |
| `LoremipsumgeneratorErrorBody` | `api_verve/errors/loremipsumgenerator_error.py` |

### client.data_generation.passwordgenerator

- **Route**: `GET /v1/passwordgenerator`
- **Auth**: `api_key`
- **Signature**: `def passwordgenerator(*, count: int | None = None, length: int | None = None, complexity: str | None = None, type_: str | None = None, include_numbers: bool | None = None, include_symbols: bool | None = None, include_uppercase: bool | None = None, include_lowercase: bool | None = None, exclude_similar: bool | None = None, exclude_ambiguous: bool | None = None, mixed_case: bool | None = None, strict: bool | None = None, word_count: int | None = None, separator: str | None = None, capitalize: bool | None = None, analyze: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `length` — query · `complexity` — query · `type_` — query `type` · `include_numbers` — query `includeNumbers` · `include_symbols` — query `includeSymbols` · `include_uppercase` — query `includeUppercase` · `include_lowercase` — query `includeLowercase` · `exclude_similar` — query `excludeSimilar` · `exclude_ambiguous` — query `excludeAmbiguous` · `mixed_case` — query `mixedCase` · `strict` — query · `word_count` — query `wordCount` · `separator` — query · `capitalize` — query · `analyze` — query
- **Returns (parsed)**: `V1PasswordgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1PasswordgeneratorResponse, PasswordgeneratorErrorBody]`
- **Error**: `PasswordgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PasswordgeneratorResponse` | `api_verve/models/v1_passwordgenerator_response.py` |
| `PasswordgeneratorErrorBody` | `api_verve/errors/passwordgenerator_error.py` |

### client.data_generation.qrcodegenerator

- **Route**: `POST /v1/qrcodegenerator`
- **Auth**: `api_key`
- **Signature**: `def qrcodegenerator(body: V1QrcodegeneratorRequest | V1QrcodegeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1QrcodegeneratorResponse`
- **Returns (raw)**: `ApiResult[V1QrcodegeneratorResponse, QrcodegeneratorErrorBody]`
- **Error**: `QrcodegeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1QrcodegeneratorRequest` | `api_verve/models/v1_qrcodegenerator_request.py` |
| `V1QrcodegeneratorRequestDict` | `api_verve/models/v1_qrcodegenerator_request.py` |
| `V1QrcodegeneratorResponse` | `api_verve/models/v1_qrcodegenerator_response.py` |
| `QrcodegeneratorErrorBody` | `api_verve/errors/qrcodegenerator_error.py` |

### client.data_generation.randomgenerator

- **Route**: `GET /v1/randomgenerator`
- **Auth**: `api_key`
- **Signature**: `def randomgenerator(*, type_: str | None = None, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `type_` — query `type` · `count` — query · `include_avatar` — query `includeAvatar`
- **Returns (parsed)**: `V1RandomgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1RandomgeneratorResponse, RandomgeneratorErrorBody]`
- **Error**: `RandomgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RandomgeneratorResponse` | `api_verve/models/v1_randomgenerator_response.py` |
| `RandomgeneratorErrorBody` | `api_verve/errors/randomgenerator_error.py` |

### client.data_generation.randomidentitygenerator

- **Route**: `GET /v1/randomidentitygenerator`
- **Auth**: `api_key`
- **Signature**: `def randomidentitygenerator(*, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `include_avatar` — query `includeAvatar`
- **Returns (parsed)**: `V1RandomidentitygeneratorResponse`
- **Returns (raw)**: `ApiResult[V1RandomidentitygeneratorResponse, RandomidentitygeneratorErrorBody]`
- **Error**: `RandomidentitygeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RandomidentitygeneratorResponse` | `api_verve/models/v1_randomidentitygenerator_response.py` |
| `RandomidentitygeneratorErrorBody` | `api_verve/errors/randomidentitygenerator_error.py` |

### client.data_generation.randomusergenerator

- **Route**: `GET /v1/randomusergenerator`
- **Auth**: `api_key`
- **Signature**: `def randomusergenerator(*, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `include_avatar` — query `includeAvatar`
- **Returns (parsed)**: `V1RandomusergeneratorResponse`
- **Returns (raw)**: `ApiResult[V1RandomusergeneratorResponse, RandomusergeneratorErrorBody]`
- **Error**: `RandomusergeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RandomusergeneratorResponse` | `api_verve/models/v1_randomusergenerator_response.py` |
| `RandomusergeneratorErrorBody` | `api_verve/errors/randomusergenerator_error.py` |

### client.data_generation.randomwords

- **Route**: `GET /v1/randomwords`
- **Auth**: `api_key`
- **Signature**: `def randomwords(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1RandomwordsResponse`
- **Returns (raw)**: `ApiResult[V1RandomwordsResponse, RandomwordsErrorBody]`
- **Error**: `RandomwordsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RandomwordsResponse` | `api_verve/models/v1_randomwords_response.py` |
| `RandomwordsErrorBody` | `api_verve/errors/randomwords_error.py` |

### client.data_generation.shortcodegenerator

- **Route**: `GET /v1/shortcodegenerator`
- **Auth**: `api_key`
- **Signature**: `def shortcodegenerator(*, count: int | None = None, length: int | None = None, charset: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `length` — query · `charset` — query
- **Returns (parsed)**: `V1ShortcodegeneratorResponse`
- **Returns (raw)**: `ApiResult[V1ShortcodegeneratorResponse, ShortcodegeneratorErrorBody]`
- **Error**: `ShortcodegeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ShortcodegeneratorResponse` | `api_verve/models/v1_shortcodegenerator_response.py` |
| `ShortcodegeneratorErrorBody` | `api_verve/errors/shortcodegenerator_error.py` |

### client.data_generation.sitemapgenerator

- **Route**: `POST /v1/sitemapgenerator`
- **Auth**: `api_key`
- **Signature**: `def sitemapgenerator(body: V1SitemapgeneratorRequest | V1SitemapgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SitemapgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1SitemapgeneratorResponse, SitemapgeneratorErrorBody]`
- **Error**: `SitemapgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SitemapgeneratorRequest` | `api_verve/models/v1_sitemapgenerator_request.py` |
| `V1SitemapgeneratorRequestDict` | `api_verve/models/v1_sitemapgenerator_request.py` |
| `V1SitemapgeneratorResponse` | `api_verve/models/v1_sitemapgenerator_response.py` |
| `SitemapgeneratorErrorBody` | `api_verve/errors/sitemapgenerator_error.py` |

### client.data_generation.totpgenerator

- **Route**: `POST /v1/totpgenerator`
- **Auth**: `api_key`
- **Signature**: `def totpgenerator(body: V1TotpgeneratorRequest | V1TotpgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1TotpgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1TotpgeneratorResponse, TotpgeneratorErrorBody]`
- **Error**: `TotpgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TotpgeneratorRequest` | `api_verve/models/v1_totpgenerator_request.py` |
| `V1TotpgeneratorRequestDict` | `api_verve/models/v1_totpgenerator_request.py` |
| `V1TotpgeneratorResponse` | `api_verve/models/v1_totpgenerator_response.py` |
| `TotpgeneratorErrorBody` | `api_verve/errors/totpgenerator_error.py` |

### client.data_generation.ulidgenerator

- **Route**: `GET /v1/ulidgenerator`
- **Auth**: `api_key`
- **Signature**: `def ulidgenerator(*, count: int | None = None, timestamp: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `timestamp` — query
- **Returns (parsed)**: `V1UlidgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1UlidgeneratorResponse, UlidgeneratorErrorBody]`
- **Error**: `UlidgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UlidgeneratorResponse` | `api_verve/models/v1_ulidgenerator_response.py` |
| `UlidgeneratorErrorBody` | `api_verve/errors/ulidgenerator_error.py` |

### client.data_generation.useragentgenerator

- **Route**: `GET /v1/useragentgenerator`
- **Auth**: `api_key`
- **Signature**: `def useragentgenerator(*, device: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `device` — query
- **Returns (parsed)**: `V1UseragentgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1UseragentgeneratorResponse, UseragentgeneratorErrorBody]`
- **Error**: `UseragentgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UseragentgeneratorResponse` | `api_verve/models/v1_useragentgenerator_response.py` |
| `UseragentgeneratorErrorBody` | `api_verve/errors/useragentgenerator_error.py` |

### client.data_generation.usernamegenerator

- **Route**: `GET /v1/usernamegenerator`
- **Auth**: `api_key`
- **Signature**: `def usernamegenerator(email: str, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `email`
- **Params**: `email` — query · `count` — query
- **Returns (parsed)**: `V1UsernamegeneratorResponse`
- **Returns (raw)**: `ApiResult[V1UsernamegeneratorResponse, UsernamegeneratorErrorBody]`
- **Error**: `UsernamegeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UsernamegeneratorResponse` | `api_verve/models/v1_usernamegenerator_response.py` |
| `UsernamegeneratorErrorBody` | `api_verve/errors/usernamegenerator_error.py` |

### client.data_generation.uuidgenerator

- **Route**: `GET /v1/uuidgenerator`
- **Auth**: `api_key`
- **Signature**: `def uuidgenerator(*, count: int | None = None, version: int | None = None, format_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `version` — query · `format_` — query `format`
- **Returns (parsed)**: `V1UuidgeneratorResponse`
- **Returns (raw)**: `ApiResult[V1UuidgeneratorResponse, UuidgeneratorErrorBody]`
- **Error**: `UuidgeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UuidgeneratorResponse` | `api_verve/models/v1_uuidgenerator_response.py` |
| `UuidgeneratorErrorBody` | `api_verve/errors/uuidgenerator_error.py` |

