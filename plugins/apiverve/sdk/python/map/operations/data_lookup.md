<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataLookup — operations

Accessor: `client.data_lookup` · Source: `api_verve/apis/data_lookup.py` · 17 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_lookup.asnlookup

- **Route**: `GET /v1/asnlookup`
- **Auth**: `api_key`
- **Signature**: `def asnlookup(asn: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `asn`
- **Params**: `asn` — query
- **Returns (parsed)**: `V1AsnlookupResponse`
- **Returns (raw)**: `ApiResult[V1AsnlookupResponse, AsnlookupErrorBody]`
- **Error**: `AsnlookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AsnlookupResponse` | `api_verve/models/v1_asnlookup_response.py` |
| `AsnlookupErrorBody` | `api_verve/errors/asnlookup_error.py` |

### client.data_lookup.bible

- **Route**: `GET /v1/bible`
- **Auth**: `api_key`
- **Signature**: `def bible(book: str, version: str, chapter: int, *, verse: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `book`, `version`, `chapter`
- **Params**: `book` — query · `version` — query · `chapter` — query · `verse` — query
- **Returns (parsed)**: `V1BibleResponse`
- **Returns (raw)**: `ApiResult[V1BibleResponse, BibleErrorBody]`
- **Error**: `BibleErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BibleResponse` | `api_verve/models/v1_bible_response.py` |
| `BibleErrorBody` | `api_verve/errors/bible_error.py` |

### client.data_lookup.callingcode

- **Route**: `GET /v1/callingcode`
- **Auth**: `api_key`
- **Signature**: `def callingcode(country: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query
- **Returns (parsed)**: `V1CallingcodeResponse`
- **Returns (raw)**: `ApiResult[V1CallingcodeResponse, CallingcodeErrorBody]`
- **Error**: `CallingcodeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CallingcodeResponse` | `api_verve/models/v1_callingcode_response.py` |
| `CallingcodeErrorBody` | `api_verve/errors/callingcode_error.py` |

### client.data_lookup.dictionary

- **Route**: `GET /v1/dictionary`
- **Auth**: `api_key`
- **Signature**: `def dictionary(word: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `word`
- **Params**: `word` — query
- **Returns (parsed)**: `V1DictionaryResponse`
- **Returns (raw)**: `ApiResult[V1DictionaryResponse, DictionaryErrorBody]`
- **Error**: `DictionaryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DictionaryResponse` | `api_verve/models/v1_dictionary_response.py` |
| `DictionaryErrorBody` | `api_verve/errors/dictionary_error.py` |

### client.data_lookup.dogbreeds

- **Route**: `GET /v1/dogbreeds`
- **Auth**: `api_key`
- **Signature**: `def dogbreeds(breed: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `breed`
- **Params**: `breed` — query
- **Returns (parsed)**: `V1DogbreedsResponse`
- **Returns (raw)**: `ApiResult[V1DogbreedsResponse, DogbreedsErrorBody]`
- **Error**: `DogbreedsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DogbreedsResponse` | `api_verve/models/v1_dogbreeds_response.py` |
| `DogbreedsErrorBody` | `api_verve/errors/dogbreeds_error.py` |

### client.data_lookup.emoji

- **Route**: `GET /v1/emoji`
- **Auth**: `api_key`
- **Signature**: `def emoji(emoji: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `emoji`
- **Params**: `emoji` — query
- **Returns (parsed)**: `V1EmojiResponse`
- **Returns (raw)**: `ApiResult[V1EmojiResponse, EmojiErrorBody]`
- **Error**: `EmojiErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1EmojiResponse` | `api_verve/models/v1_emoji_response.py` |
| `EmojiErrorBody` | `api_verve/errors/emoji_error.py` |

### client.data_lookup.genderdetector

- **Route**: `GET /v1/genderdetector`
- **Auth**: `api_key`
- **Signature**: `def genderdetector(name: str, *, country: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query · `country` — query
- **Returns (parsed)**: `V1GenderdetectorResponse`
- **Returns (raw)**: `ApiResult[V1GenderdetectorResponse, GenderdetectorErrorBody]`
- **Error**: `GenderdetectorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1GenderdetectorResponse` | `api_verve/models/v1_genderdetector_response.py` |
| `GenderdetectorErrorBody` | `api_verve/errors/genderdetector_error.py` |

### client.data_lookup.gravatarlookup

- **Route**: `GET /v1/gravatarlookup`
- **Auth**: `api_key`
- **Signature**: `def gravatarlookup(email: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `email`
- **Params**: `email` — query
- **Returns (parsed)**: `V1GravatarlookupResponse`
- **Returns (raw)**: `ApiResult[V1GravatarlookupResponse, GravatarlookupErrorBody]`
- **Error**: `GravatarlookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1GravatarlookupResponse` | `api_verve/models/v1_gravatarlookup_response.py` |
| `GravatarlookupErrorBody` | `api_verve/errors/gravatarlookup_error.py` |

### client.data_lookup.ipdemographics

- **Route**: `GET /v1/ipdemographics`
- **Auth**: `api_key`
- **Signature**: `def ipdemographics(ip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ip`
- **Params**: `ip` — query
- **Returns (parsed)**: `V1IpdemographicsResponse`
- **Returns (raw)**: `ApiResult[V1IpdemographicsResponse, IpdemographicsErrorBody]`
- **Error**: `IpdemographicsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1IpdemographicsResponse` | `api_verve/models/v1_ipdemographics_response.py` |
| `IpdemographicsErrorBody` | `api_verve/errors/ipdemographics_error.py` |

### client.data_lookup.lottery

- **Route**: `GET /v1/lottery`
- **Auth**: `api_key`
- **Signature**: `def lottery(numbers: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `numbers`
- **Params**: `numbers` — query · `date` — query
- **Returns (parsed)**: `V1LotteryResponse`
- **Returns (raw)**: `ApiResult[V1LotteryResponse, LotteryErrorBody]`
- **Error**: `LotteryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LotteryResponse` | `api_verve/models/v1_lottery_response.py` |
| `LotteryErrorBody` | `api_verve/errors/lottery_error.py` |

### client.data_lookup.nobelprizes

- **Route**: `GET /v1/nobelprizes`
- **Auth**: `api_key`
- **Signature**: `def nobelprizes(*, firstname: str | None = None, lastname: str | None = None, category: str | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `firstname` — query · `lastname` — query · `category` — query · `year` — query
- **Returns (parsed)**: `V1NobelprizesResponse`
- **Returns (raw)**: `ApiResult[V1NobelprizesResponse, NobelprizesErrorBody]`
- **Error**: `NobelprizesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1NobelprizesResponse` | `api_verve/models/v1_nobelprizes_response.py` |
| `NobelprizesErrorBody` | `api_verve/errors/nobelprizes_error.py` |

### client.data_lookup.openlicenses

- **Route**: `GET /v1/openlicenses`
- **Auth**: `api_key`
- **Signature**: `def openlicenses(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query
- **Returns (parsed)**: `V1OpenlicensesResponse`
- **Returns (raw)**: `ApiResult[V1OpenlicensesResponse, OpenlicensesErrorBody]`
- **Error**: `OpenlicensesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OpenlicensesResponse` | `api_verve/models/v1_openlicenses_response.py` |
| `OpenlicensesErrorBody` | `api_verve/errors/openlicenses_error.py` |

### client.data_lookup.thesaurus

- **Route**: `GET /v1/thesaurus`
- **Auth**: `api_key`
- **Signature**: `def thesaurus(word: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `word`
- **Params**: `word` — query
- **Returns (parsed)**: `V1ThesaurusResponse`
- **Returns (raw)**: `ApiResult[V1ThesaurusResponse, ThesaurusErrorBody]`
- **Error**: `ThesaurusErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ThesaurusResponse` | `api_verve/models/v1_thesaurus_response.py` |
| `ThesaurusErrorBody` | `api_verve/errors/thesaurus_error.py` |

### client.data_lookup.timezonelookup

- **Route**: `GET /v1/timezonelookup`
- **Auth**: `api_key`
- **Signature**: `def timezonelookup(city: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `city`
- **Params**: `city` — query
- **Returns (parsed)**: `V1TimezonelookupResponse`
- **Returns (raw)**: `ApiResult[V1TimezonelookupResponse, TimezonelookupErrorBody]`
- **Error**: `TimezonelookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TimezonelookupResponse` | `api_verve/models/v1_timezonelookup_response.py` |
| `TimezonelookupErrorBody` | `api_verve/errors/timezonelookup_error.py` |

### client.data_lookup.unicodelookup

- **Route**: `GET /v1/unicodelookup`
- **Auth**: `api_key`
- **Signature**: `def unicodelookup(*, character: str | None = None, codepoint: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `character` — query · `codepoint` — query
- **Returns (parsed)**: `V1UnicodelookupResponse`
- **Returns (raw)**: `ApiResult[V1UnicodelookupResponse, UnicodelookupErrorBody]`
- **Error**: `UnicodelookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UnicodelookupResponse` | `api_verve/models/v1_unicodelookup_response.py` |
| `UnicodelookupErrorBody` | `api_verve/errors/unicodelookup_error.py` |

### client.data_lookup.worldtime

- **Route**: `GET /v1/worldtime`
- **Auth**: `api_key`
- **Signature**: `def worldtime(city: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `city`
- **Params**: `city` — query
- **Returns (parsed)**: `V1WorldtimeResponse`
- **Returns (raw)**: `ApiResult[V1WorldtimeResponse, WorldtimeErrorBody]`
- **Error**: `WorldtimeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WorldtimeResponse` | `api_verve/models/v1_worldtime_response.py` |
| `WorldtimeErrorBody` | `api_verve/errors/worldtime_error.py` |

### client.data_lookup.zipdemographics

- **Route**: `GET /v1/zipdemographics`
- **Auth**: `api_key`
- **Signature**: `def zipdemographics(zip_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zip_`
- **Params**: `zip_` — query `zip`
- **Returns (parsed)**: `V1ZipdemographicsResponse`
- **Returns (raw)**: `ApiResult[V1ZipdemographicsResponse, ZipdemographicsErrorBody]`
- **Error**: `ZipdemographicsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ZipdemographicsResponse` | `api_verve/models/v1_zipdemographics_response.py` |
| `ZipdemographicsErrorBody` | `api_verve/errors/zipdemographics_error.py` |

