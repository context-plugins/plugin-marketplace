<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataConversion — operations

Accessor: `client.data_conversion` · Source: `api_verve/apis/data_conversion.py` · 33 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_conversion.ascii85encoder

- **Route**: `GET /v1/ascii85encoder`
- **Auth**: `api_key`
- **Signature**: `def ascii85encoder(text: str, *, action: str | None = None, format_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `text`
- **Params**: `text` — query · `action` — query · `format_` — query `format`
- **Returns (parsed)**: `V1Ascii85EncoderResponse`
- **Returns (raw)**: `ApiResult[V1Ascii85EncoderResponse, Ascii85EncoderErrorBody]`
- **Error**: `Ascii85EncoderErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1Ascii85EncoderResponse` | `api_verve/models/v1_ascii85_encoder_response.py` |
| `Ascii85EncoderErrorBody` | `api_verve/errors/ascii85_encoder_error.py` |

### client.data_conversion.base64

- **Route**: `GET /v1/base64`
- **Auth**: `api_key`
- **Signature**: `def base64(text: str, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `text`
- **Params**: `text` — query · `action` — query
- **Returns (parsed)**: `V1Base64Response`
- **Returns (raw)**: `ApiResult[V1Base64Response, Base64ErrorBody]`
- **Error**: `Base64ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1Base64Response` | `api_verve/models/v1_base64_response.py` |
| `Base64ErrorBody` | `api_verve/errors/base64_error.py` |

### client.data_conversion.colorconverter

- **Route**: `GET /v1/colorconverter`
- **Auth**: `api_key`
- **Signature**: `def colorconverter(hex_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `hex_`
- **Params**: `hex_` — query `hex`
- **Returns (parsed)**: `V1ColorconverterResponse`
- **Returns (raw)**: `ApiResult[V1ColorconverterResponse, ColorconverterErrorBody]`
- **Error**: `ColorconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ColorconverterResponse` | `api_verve/models/v1_colorconverter_response.py` |
| `ColorconverterErrorBody` | `api_verve/errors/colorconverter_error.py` |

### client.data_conversion.csvtojson

- **Route**: `POST /v1/csvtojson`
- **Auth**: `api_key`
- **Signature**: `def csvtojson(body: V1CsvtojsonRequest | V1CsvtojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1CsvtojsonResponse`
- **Returns (raw)**: `ApiResult[V1CsvtojsonResponse, CsvtojsonErrorBody]`
- **Error**: `CsvtojsonErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CsvtojsonRequest` | `api_verve/models/v1_csvtojson_request.py` |
| `V1CsvtojsonRequestDict` | `api_verve/models/v1_csvtojson_request.py` |
| `V1CsvtojsonResponse` | `api_verve/models/v1_csvtojson_response.py` |
| `CsvtojsonErrorBody` | `api_verve/errors/csvtojson_error.py` |

### client.data_conversion.filesizeformatter

- **Route**: `GET /v1/filesizeformatter`
- **Auth**: `api_key`
- **Signature**: `def filesizeformatter(bytes_: int, *, unit: str | None = None, precision: int | None = None, standard: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bytes_`
- **Params**: `bytes_` — query `bytes` · `unit` — query · `precision` — query · `standard` — query
- **Returns (parsed)**: `V1FilesizeformatterResponse`
- **Returns (raw)**: `ApiResult[V1FilesizeformatterResponse, FilesizeformatterErrorBody]`
- **Error**: `FilesizeformatterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1FilesizeformatterResponse` | `api_verve/models/v1_filesizeformatter_response.py` |
| `FilesizeformatterErrorBody` | `api_verve/errors/filesizeformatter_error.py` |

### client.data_conversion.htmlentities

- **Route**: `POST /v1/htmlentities`
- **Auth**: `api_key`
- **Signature**: `def htmlentities(body: V1HtmlentitiesRequest | V1HtmlentitiesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1HtmlentitiesResponse`
- **Returns (raw)**: `ApiResult[V1HtmlentitiesResponse, HtmlentitiesErrorBody]`
- **Error**: `HtmlentitiesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HtmlentitiesRequest` | `api_verve/models/v1_htmlentities_request.py` |
| `V1HtmlentitiesRequestDict` | `api_verve/models/v1_htmlentities_request.py` |
| `V1HtmlentitiesResponse` | `api_verve/models/v1_htmlentities_response.py` |
| `HtmlentitiesErrorBody` | `api_verve/errors/htmlentities_error.py` |

### client.data_conversion.htmltoimage

- **Route**: `POST /v1/htmltoimage`
- **Auth**: `api_key`
- **Signature**: `def htmltoimage(body: V1HtmltoimageRequest | V1HtmltoimageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1HtmltoimageResponse`
- **Returns (raw)**: `ApiResult[V1HtmltoimageResponse, HtmltoimageErrorBody]`
- **Error**: `HtmltoimageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1HtmltoimageRequest` | `api_verve/models/v1_htmltoimage_request.py` |
| `V1HtmltoimageRequestDict` | `api_verve/models/v1_htmltoimage_request.py` |
| `V1HtmltoimageResponse` | `api_verve/models/v1_htmltoimage_response.py` |
| `HtmltoimageErrorBody` | `api_verve/errors/htmltoimage_error.py` |

### client.data_conversion.jsontocsv

- **Route**: `POST /v1/jsontocsv`
- **Auth**: `api_key`
- **Signature**: `def jsontocsv(body: V1JsontocsvRequest | V1JsontocsvRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1JsontocsvResponse`
- **Returns (raw)**: `ApiResult[V1JsontocsvResponse, JsontocsvErrorBody]`
- **Error**: `JsontocsvErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1JsontocsvRequest` | `api_verve/models/v1_jsontocsv_request.py` |
| `V1JsontocsvRequestDict` | `api_verve/models/v1_jsontocsv_request.py` |
| `V1JsontocsvResponse` | `api_verve/models/v1_jsontocsv_response.py` |
| `JsontocsvErrorBody` | `api_verve/errors/jsontocsv_error.py` |

### client.data_conversion.jsontojsonp

- **Route**: `POST /v1/jsontojsonp`
- **Auth**: `api_key`
- **Signature**: `def jsontojsonp(body: V1JsontojsonpRequest | V1JsontojsonpRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1JsontojsonpResponse`
- **Returns (raw)**: `ApiResult[V1JsontojsonpResponse, JsontojsonpErrorBody]`
- **Error**: `JsontojsonpErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1JsontojsonpRequest` | `api_verve/models/v1_jsontojsonp_request.py` |
| `V1JsontojsonpRequestDict` | `api_verve/models/v1_jsontojsonp_request.py` |
| `V1JsontojsonpResponse` | `api_verve/models/v1_jsontojsonp_response.py` |
| `JsontojsonpErrorBody` | `api_verve/errors/jsontojsonp_error.py` |

### client.data_conversion.jwtdecoder

- **Route**: `POST /v1/jwtdecoder`
- **Auth**: `api_key`
- **Signature**: `def jwtdecoder(body: V1JwtdecoderRequest | V1JwtdecoderRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1JwtdecoderResponse`
- **Returns (raw)**: `ApiResult[V1JwtdecoderResponse, JwtdecoderErrorBody]`
- **Error**: `JwtdecoderErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1JwtdecoderRequest` | `api_verve/models/v1_jwtdecoder_request.py` |
| `V1JwtdecoderRequestDict` | `api_verve/models/v1_jwtdecoder_request.py` |
| `V1JwtdecoderResponse` | `api_verve/models/v1_jwtdecoder_response.py` |
| `JwtdecoderErrorBody` | `api_verve/errors/jwtdecoder_error.py` |

### client.data_conversion.markdowntable

- **Route**: `POST /v1/markdowntable`
- **Auth**: `api_key`
- **Signature**: `def markdowntable(body: V1MarkdowntableRequest | V1MarkdowntableRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1MarkdowntableResponse`
- **Returns (raw)**: `ApiResult[V1MarkdowntableResponse, MarkdowntableErrorBody]`
- **Error**: `MarkdowntableErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MarkdowntableRequest` | `api_verve/models/v1_markdowntable_request.py` |
| `V1MarkdowntableRequestDict` | `api_verve/models/v1_markdowntable_request.py` |
| `V1MarkdowntableResponse` | `api_verve/models/v1_markdowntable_response.py` |
| `MarkdowntableErrorBody` | `api_verve/errors/markdowntable_error.py` |

### client.data_conversion.markdowntohtml

- **Route**: `POST /v1/markdowntohtml`
- **Auth**: `api_key`
- **Signature**: `def markdowntohtml(body: V1MarkdowntohtmlRequest | V1MarkdowntohtmlRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1MarkdowntohtmlResponse`
- **Returns (raw)**: `ApiResult[V1MarkdowntohtmlResponse, MarkdowntohtmlErrorBody]`
- **Error**: `MarkdowntohtmlErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MarkdowntohtmlRequest` | `api_verve/models/v1_markdowntohtml_request.py` |
| `V1MarkdowntohtmlRequestDict` | `api_verve/models/v1_markdowntohtml_request.py` |
| `V1MarkdowntohtmlResponse` | `api_verve/models/v1_markdowntohtml_response.py` |
| `MarkdowntohtmlErrorBody` | `api_verve/errors/markdowntohtml_error.py` |

### client.data_conversion.markdowntoimage

- **Route**: `POST /v1/markdowntoimage`
- **Auth**: `api_key`
- **Signature**: `def markdowntoimage(body: V1MarkdowntoimageRequest | V1MarkdowntoimageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1MarkdowntoimageResponse`
- **Returns (raw)**: `ApiResult[V1MarkdowntoimageResponse, MarkdowntoimageErrorBody]`
- **Error**: `MarkdowntoimageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MarkdowntoimageRequest` | `api_verve/models/v1_markdowntoimage_request.py` |
| `V1MarkdowntoimageRequestDict` | `api_verve/models/v1_markdowntoimage_request.py` |
| `V1MarkdowntoimageResponse` | `api_verve/models/v1_markdowntoimage_response.py` |
| `MarkdowntoimageErrorBody` | `api_verve/errors/markdowntoimage_error.py` |

### client.data_conversion.markdowntopdf

- **Route**: `POST /v1/markdowntopdf`
- **Auth**: `api_key`
- **Signature**: `def markdowntopdf(body: V1MarkdowntopdfRequest | V1MarkdowntopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1MarkdowntopdfResponse`
- **Returns (raw)**: `ApiResult[V1MarkdowntopdfResponse, MarkdowntopdfErrorBody]`
- **Error**: `MarkdowntopdfErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MarkdowntopdfRequest` | `api_verve/models/v1_markdowntopdf_request.py` |
| `V1MarkdowntopdfRequestDict` | `api_verve/models/v1_markdowntopdf_request.py` |
| `V1MarkdowntopdfResponse` | `api_verve/models/v1_markdowntopdf_response.py` |
| `MarkdowntopdfErrorBody` | `api_verve/errors/markdowntopdf_error.py` |

### client.data_conversion.math

- **Route**: `POST /v1/math`
- **Auth**: `api_key`
- **Signature**: `def math(body: V1MathRequest | V1MathRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1MathResponse`
- **Returns (raw)**: `ApiResult[V1MathResponse, MathErrorBody]`
- **Error**: `MathErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MathRequest` | `api_verve/models/v1_math_request.py` |
| `V1MathRequestDict` | `api_verve/models/v1_math_request.py` |
| `V1MathResponse` | `api_verve/models/v1_math_response.py` |
| `MathErrorBody` | `api_verve/errors/math_error.py` |

### client.data_conversion.meetingtimeconverter

- **Route**: `GET /v1/meetingtimeconverter`
- **Auth**: `api_key`
- **Signature**: `def meetingtimeconverter(time: str, from_timezone: str, to_timezone: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `time`, `from_timezone`, `to_timezone`
- **Params**: `time` — query · `from_timezone` — query `fromTimezone` · `to_timezone` — query `toTimezone` · `date` — query
- **Returns (parsed)**: `V1MeetingtimeconverterResponse`
- **Returns (raw)**: `ApiResult[V1MeetingtimeconverterResponse, MeetingtimeconverterErrorBody]`
- **Error**: `MeetingtimeconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MeetingtimeconverterResponse` | `api_verve/models/v1_meetingtimeconverter_response.py` |
| `MeetingtimeconverterErrorBody` | `api_verve/errors/meetingtimeconverter_error.py` |

### client.data_conversion.numberbaseconverter

- **Route**: `GET /v1/numberbaseconverter`
- **Auth**: `api_key`
- **Signature**: `def numberbaseconverter(value: str, *, from_: int | None = None, to: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `value`
- **Params**: `value` — query · `from_` — query `from` · `to` — query
- **Returns (parsed)**: `V1NumberbaseconverterResponse`
- **Returns (raw)**: `ApiResult[V1NumberbaseconverterResponse, NumberbaseconverterErrorBody]`
- **Error**: `NumberbaseconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1NumberbaseconverterResponse` | `api_verve/models/v1_numberbaseconverter_response.py` |
| `NumberbaseconverterErrorBody` | `api_verve/errors/numberbaseconverter_error.py` |

### client.data_conversion.numbertowords

- **Route**: `GET /v1/numbertowords`
- **Auth**: `api_key`
- **Signature**: `def numbertowords(number: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `number`
- **Params**: `number` — query
- **Returns (parsed)**: `V1NumbertowordsResponse`
- **Returns (raw)**: `ApiResult[V1NumbertowordsResponse, NumbertowordsErrorBody]`
- **Error**: `NumbertowordsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1NumbertowordsResponse` | `api_verve/models/v1_numbertowords_response.py` |
| `NumbertowordsErrorBody` | `api_verve/errors/numbertowords_error.py` |

### client.data_conversion.placeholdertext

- **Route**: `GET /v1/placeholdertext`
- **Auth**: `api_key`
- **Signature**: `def placeholdertext(*, style: str | None = None, paragraphs: int | None = None, sentences: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `style` — query · `paragraphs` — query · `sentences` — query
- **Returns (parsed)**: `V1PlaceholdertextResponse`
- **Returns (raw)**: `ApiResult[V1PlaceholdertextResponse, PlaceholdertextErrorBody]`
- **Error**: `PlaceholdertextErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PlaceholdertextResponse` | `api_verve/models/v1_placeholdertext_response.py` |
| `PlaceholdertextErrorBody` | `api_verve/errors/placeholdertext_error.py` |

### client.data_conversion.punycode

- **Route**: `GET /v1/punycode`
- **Auth**: `api_key`
- **Signature**: `def punycode(text: str, *, mode: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `text`
- **Params**: `text` — query · `mode` — query
- **Returns (parsed)**: `V1PunycodeResponse`
- **Returns (raw)**: `ApiResult[V1PunycodeResponse, PunycodeErrorBody]`
- **Error**: `PunycodeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PunycodeResponse` | `api_verve/models/v1_punycode_response.py` |
| `PunycodeErrorBody` | `api_verve/errors/punycode_error.py` |

### client.data_conversion.querystringbuilder

- **Route**: `POST /v1/querystringbuilder`
- **Auth**: `api_key`
- **Signature**: `def querystringbuilder(body: V1QuerystringbuilderRequest | V1QuerystringbuilderRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1QuerystringbuilderResponse`
- **Returns (raw)**: `ApiResult[V1QuerystringbuilderResponse, QuerystringbuilderErrorBody]`
- **Error**: `QuerystringbuilderErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1QuerystringbuilderRequest` | `api_verve/models/v1_querystringbuilder_request.py` |
| `V1QuerystringbuilderRequestDict` | `api_verve/models/v1_querystringbuilder_request.py` |
| `V1QuerystringbuilderResponse` | `api_verve/models/v1_querystringbuilder_response.py` |
| `QuerystringbuilderErrorBody` | `api_verve/errors/querystringbuilder_error.py` |

### client.data_conversion.relativetimeformatter

- **Route**: `GET /v1/relativetimeformatter`
- **Auth**: `api_key`
- **Signature**: `def relativetimeformatter(timestamp: str, *, reference: str | None = None, style: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `timestamp`
- **Params**: `timestamp` — query · `reference` — query · `style` — query
- **Returns (parsed)**: `V1RelativetimeformatterResponse`
- **Returns (raw)**: `ApiResult[V1RelativetimeformatterResponse, RelativetimeformatterErrorBody]`
- **Error**: `RelativetimeformatterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RelativetimeformatterResponse` | `api_verve/models/v1_relativetimeformatter_response.py` |
| `RelativetimeformatterErrorBody` | `api_verve/errors/relativetimeformatter_error.py` |

### client.data_conversion.romanconverter

- **Route**: `GET /v1/romanconverter`
- **Auth**: `api_key`
- **Signature**: `def romanconverter(number: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `number`
- **Params**: `number` — query
- **Returns (parsed)**: `V1RomanconverterResponse`
- **Returns (raw)**: `ApiResult[V1RomanconverterResponse, RomanconverterErrorBody]`
- **Error**: `RomanconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RomanconverterResponse` | `api_verve/models/v1_romanconverter_response.py` |
| `RomanconverterErrorBody` | `api_verve/errors/romanconverter_error.py` |

### client.data_conversion.texttocolor

- **Route**: `GET /v1/texttocolor`
- **Auth**: `api_key`
- **Signature**: `def texttocolor(color: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `color`
- **Params**: `color` — query
- **Returns (parsed)**: `V1TexttocolorResponse`
- **Returns (raw)**: `ApiResult[V1TexttocolorResponse, TexttocolorErrorBody]`
- **Error**: `TexttocolorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TexttocolorResponse` | `api_verve/models/v1_texttocolor_response.py` |
| `TexttocolorErrorBody` | `api_verve/errors/texttocolor_error.py` |

### client.data_conversion.unicodeescape

- **Route**: `POST /v1/unicodeescape`
- **Auth**: `api_key`
- **Signature**: `def unicodeescape(body: V1UnicodeescapeRequest | V1UnicodeescapeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1UnicodeescapeResponse`
- **Returns (raw)**: `ApiResult[V1UnicodeescapeResponse, UnicodeescapeErrorBody]`
- **Error**: `UnicodeescapeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UnicodeescapeRequest` | `api_verve/models/v1_unicodeescape_request.py` |
| `V1UnicodeescapeRequestDict` | `api_verve/models/v1_unicodeescape_request.py` |
| `V1UnicodeescapeResponse` | `api_verve/models/v1_unicodeescape_response.py` |
| `UnicodeescapeErrorBody` | `api_verve/errors/unicodeescape_error.py` |

### client.data_conversion.unitconverter

- **Route**: `GET /v1/unitconverter`
- **Auth**: `api_key`
- **Signature**: `def unitconverter(value: float, from_: str, to: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `value`, `from_`, `to`
- **Params**: `value` — query · `from_` — query `from` · `to` — query
- **Returns (parsed)**: `V1UnitconverterResponse`
- **Returns (raw)**: `ApiResult[V1UnitconverterResponse, UnitconverterErrorBody]`
- **Error**: `UnitconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UnitconverterResponse` | `api_verve/models/v1_unitconverter_response.py` |
| `UnitconverterErrorBody` | `api_verve/errors/unitconverter_error.py` |

### client.data_conversion.unixtimestamp

- **Route**: `GET /v1/unixtimestamp`
- **Auth**: `api_key`
- **Signature**: `def unixtimestamp(timestamp: str, *, format_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `timestamp`
- **Params**: `timestamp` — query · `format_` — query `format`
- **Returns (parsed)**: `V1UnixtimestampResponse`
- **Returns (raw)**: `ApiResult[V1UnixtimestampResponse, UnixtimestampErrorBody]`
- **Error**: `UnixtimestampErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UnixtimestampResponse` | `api_verve/models/v1_unixtimestamp_response.py` |
| `UnixtimestampErrorBody` | `api_verve/errors/unixtimestamp_error.py` |

### client.data_conversion.urlencode

- **Route**: `POST /v1/urlencode`
- **Auth**: `api_key`
- **Signature**: `def urlencode(body: V1UrlencodeRequest | V1UrlencodeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1UrlencodeResponse`
- **Returns (raw)**: `ApiResult[V1UrlencodeResponse, UrlencodeErrorBody]`
- **Error**: `UrlencodeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UrlencodeRequest` | `api_verve/models/v1_urlencode_request.py` |
| `V1UrlencodeRequestDict` | `api_verve/models/v1_urlencode_request.py` |
| `V1UrlencodeResponse` | `api_verve/models/v1_urlencode_response.py` |
| `UrlencodeErrorBody` | `api_verve/errors/urlencode_error.py` |

### client.data_conversion.urltomarkdown

- **Route**: `POST /v1/urltomarkdown`
- **Auth**: `api_key`
- **Signature**: `def urltomarkdown(body: V1UrltomarkdownRequest | V1UrltomarkdownRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1UrltomarkdownResponse`
- **Returns (raw)**: `ApiResult[V1UrltomarkdownResponse, UrltomarkdownErrorBody]`
- **Error**: `UrltomarkdownErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UrltomarkdownRequest` | `api_verve/models/v1_urltomarkdown_request.py` |
| `V1UrltomarkdownRequestDict` | `api_verve/models/v1_urltomarkdown_request.py` |
| `V1UrltomarkdownResponse` | `api_verve/models/v1_urltomarkdown_response.py` |
| `UrltomarkdownErrorBody` | `api_verve/errors/urltomarkdown_error.py` |

### client.data_conversion.variablenameconverter

- **Route**: `POST /v1/variablenameconverter`
- **Auth**: `api_key`
- **Signature**: `def variablenameconverter(body: V1VariablenameconverterRequest | V1VariablenameconverterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1VariablenameconverterResponse`
- **Returns (raw)**: `ApiResult[V1VariablenameconverterResponse, VariablenameconverterErrorBody]`
- **Error**: `VariablenameconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1VariablenameconverterRequest` | `api_verve/models/v1_variablenameconverter_request.py` |
| `V1VariablenameconverterRequestDict` | `api_verve/models/v1_variablenameconverter_request.py` |
| `V1VariablenameconverterResponse` | `api_verve/models/v1_variablenameconverter_response.py` |
| `VariablenameconverterErrorBody` | `api_verve/errors/variablenameconverter_error.py` |

### client.data_conversion.websitetotext

- **Route**: `POST /v1/websitetotext`
- **Auth**: `api_key`
- **Signature**: `def websitetotext(body: V1WebsitetotextRequest | V1WebsitetotextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1WebsitetotextResponse`
- **Returns (raw)**: `ApiResult[V1WebsitetotextResponse, WebsitetotextErrorBody]`
- **Error**: `WebsitetotextErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebsitetotextRequest` | `api_verve/models/v1_websitetotext_request.py` |
| `V1WebsitetotextRequestDict` | `api_verve/models/v1_websitetotext_request.py` |
| `V1WebsitetotextResponse` | `api_verve/models/v1_websitetotext_response.py` |
| `WebsitetotextErrorBody` | `api_verve/errors/websitetotext_error.py` |

### client.data_conversion.wordstonumbers

- **Route**: `GET /v1/wordstonumbers`
- **Auth**: `api_key`
- **Signature**: `def wordstonumbers(words: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `words`
- **Params**: `words` — query
- **Returns (parsed)**: `V1WordstonumbersResponse`
- **Returns (raw)**: `ApiResult[V1WordstonumbersResponse, WordstonumbersErrorBody]`
- **Error**: `WordstonumbersErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WordstonumbersResponse` | `api_verve/models/v1_wordstonumbers_response.py` |
| `WordstonumbersErrorBody` | `api_verve/errors/wordstonumbers_error.py` |

### client.data_conversion.xmltojson

- **Route**: `POST /v1/xmltojson`
- **Auth**: `api_key`
- **Signature**: `def xmltojson(body: V1XmltojsonRequest | V1XmltojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1XmltojsonResponse`
- **Returns (raw)**: `ApiResult[V1XmltojsonResponse, XmltojsonErrorBody]`
- **Error**: `XmltojsonErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1XmltojsonRequest` | `api_verve/models/v1_xmltojson_request.py` |
| `V1XmltojsonRequestDict` | `api_verve/models/v1_xmltojson_request.py` |
| `V1XmltojsonResponse` | `api_verve/models/v1_xmltojson_response.py` |
| `XmltojsonErrorBody` | `api_verve/errors/xmltojson_error.py` |

