<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataConversion — operations

Accessor: `client.DataConversion` · Source: `src/ApiVerve/Api/DataConversion.cs` · 33 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Ascii85Encoder

- **Auth**: `options.ApiKey`
- **Signature**: `Ascii85Encoder(Ascii85EncoderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Text`
- **Query params (wire ← C#)**: `text` ← `Text`, `action` ← `Action`, `format` ← `Format`
- **Returns**: `V1Ascii85EncoderResponse`
- **Error**: `ApiException<Ascii85EncoderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Ascii85EncoderRequest` | `src/ApiVerve/Requests/DataConversion/Ascii85EncoderRequest.cs` |
| `V1Ascii85EncoderResponse` | `src/ApiVerve/Models/V1Ascii85EncoderResponse.cs` |
| `Ascii85EncoderError` | `src/ApiVerve/Errors/Ascii85EncoderError.cs` |

### Base64

- **Auth**: `options.ApiKey`
- **Signature**: `Base64(Base64Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Text`
- **Query params (wire ← C#)**: `text` ← `Text`, `action` ← `Action`
- **Returns**: `V1Base64Response`
- **Error**: `ApiException<Base64Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Base64Request` | `src/ApiVerve/Requests/DataConversion/Base64Request.cs` |
| `V1Base64Response` | `src/ApiVerve/Models/V1Base64Response.cs` |
| `Base64Error` | `src/ApiVerve/Errors/Base64Error.cs` |

### Colorconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Colorconverter(ColorconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Hex`
- **Query params (wire ← C#)**: `hex` ← `Hex`
- **Returns**: `V1ColorconverterResponse`
- **Error**: `ApiException<ColorconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ColorconverterRequest` | `src/ApiVerve/Requests/DataConversion/ColorconverterRequest.cs` |
| `V1ColorconverterResponse` | `src/ApiVerve/Models/V1ColorconverterResponse.cs` |
| `ColorconverterError` | `src/ApiVerve/Errors/ColorconverterError.cs` |

### Csvtojson

- **Auth**: `options.ApiKey`
- **Signature**: `Csvtojson(CsvtojsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1CsvtojsonResponse`
- **Error**: `ApiException<CsvtojsonError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CsvtojsonRequest` | `src/ApiVerve/Requests/DataConversion/CsvtojsonRequest.cs` |
| `V1CsvtojsonRequest` | `src/ApiVerve/Models/V1CsvtojsonRequest.cs` |
| `V1CsvtojsonResponse` | `src/ApiVerve/Models/V1CsvtojsonResponse.cs` |
| `CsvtojsonError` | `src/ApiVerve/Errors/CsvtojsonError.cs` |

### Filesizeformatter

- **Auth**: `options.ApiKey`
- **Signature**: `Filesizeformatter(FilesizeformatterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bytes`
- **Query params (wire ← C#)**: `bytes` ← `Bytes`, `unit` ← `Unit`, `precision` ← `Precision`, `standard` ← `Standard`
- **Returns**: `V1FilesizeformatterResponse`
- **Error**: `ApiException<FilesizeformatterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FilesizeformatterRequest` | `src/ApiVerve/Requests/DataConversion/FilesizeformatterRequest.cs` |
| `V1FilesizeformatterResponse` | `src/ApiVerve/Models/V1FilesizeformatterResponse.cs` |
| `FilesizeformatterError` | `src/ApiVerve/Errors/FilesizeformatterError.cs` |

### Htmlentities

- **Auth**: `options.ApiKey`
- **Signature**: `Htmlentities(HtmlentitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1HtmlentitiesResponse`
- **Error**: `ApiException<HtmlentitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HtmlentitiesRequest` | `src/ApiVerve/Requests/DataConversion/HtmlentitiesRequest.cs` |
| `V1HtmlentitiesRequest` | `src/ApiVerve/Models/V1HtmlentitiesRequest.cs` |
| `V1HtmlentitiesResponse` | `src/ApiVerve/Models/V1HtmlentitiesResponse.cs` |
| `HtmlentitiesError` | `src/ApiVerve/Errors/HtmlentitiesError.cs` |

### Htmltoimage

- **Auth**: `options.ApiKey`
- **Signature**: `Htmltoimage(HtmltoimageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1HtmltoimageResponse`
- **Error**: `ApiException<HtmltoimageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HtmltoimageRequest` | `src/ApiVerve/Requests/DataConversion/HtmltoimageRequest.cs` |
| `V1HtmltoimageRequest` | `src/ApiVerve/Models/V1HtmltoimageRequest.cs` |
| `V1HtmltoimageResponse` | `src/ApiVerve/Models/V1HtmltoimageResponse.cs` |
| `HtmltoimageError` | `src/ApiVerve/Errors/HtmltoimageError.cs` |

### Jsontocsv

- **Auth**: `options.ApiKey`
- **Signature**: `Jsontocsv(JsontocsvRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1JsontocsvResponse`
- **Error**: `ApiException<JsontocsvError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JsontocsvRequest` | `src/ApiVerve/Requests/DataConversion/JsontocsvRequest.cs` |
| `V1JsontocsvRequest` | `src/ApiVerve/Models/V1JsontocsvRequest.cs` |
| `V1JsontocsvResponse` | `src/ApiVerve/Models/V1JsontocsvResponse.cs` |
| `JsontocsvError` | `src/ApiVerve/Errors/JsontocsvError.cs` |

### Jsontojsonp

- **Auth**: `options.ApiKey`
- **Signature**: `Jsontojsonp(JsontojsonpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1JsontojsonpResponse`
- **Error**: `ApiException<JsontojsonpError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JsontojsonpRequest` | `src/ApiVerve/Requests/DataConversion/JsontojsonpRequest.cs` |
| `V1JsontojsonpRequest` | `src/ApiVerve/Models/V1JsontojsonpRequest.cs` |
| `V1JsontojsonpResponse` | `src/ApiVerve/Models/V1JsontojsonpResponse.cs` |
| `JsontojsonpError` | `src/ApiVerve/Errors/JsontojsonpError.cs` |

### Jwtdecoder

- **Auth**: `options.ApiKey`
- **Signature**: `Jwtdecoder(JwtdecoderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1JwtdecoderResponse`
- **Error**: `ApiException<JwtdecoderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JwtdecoderRequest` | `src/ApiVerve/Requests/DataConversion/JwtdecoderRequest.cs` |
| `V1JwtdecoderRequest` | `src/ApiVerve/Models/V1JwtdecoderRequest.cs` |
| `V1JwtdecoderResponse` | `src/ApiVerve/Models/V1JwtdecoderResponse.cs` |
| `JwtdecoderError` | `src/ApiVerve/Errors/JwtdecoderError.cs` |

### Markdowntable

- **Auth**: `options.ApiKey`
- **Signature**: `Markdowntable(MarkdowntableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1MarkdowntableResponse`
- **Error**: `ApiException<MarkdowntableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MarkdowntableRequest` | `src/ApiVerve/Requests/DataConversion/MarkdowntableRequest.cs` |
| `V1MarkdowntableRequest` | `src/ApiVerve/Models/V1MarkdowntableRequest.cs` |
| `V1MarkdowntableResponse` | `src/ApiVerve/Models/V1MarkdowntableResponse.cs` |
| `MarkdowntableError` | `src/ApiVerve/Errors/MarkdowntableError.cs` |

### Markdowntohtml

- **Auth**: `options.ApiKey`
- **Signature**: `Markdowntohtml(MarkdowntohtmlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1MarkdowntohtmlResponse`
- **Error**: `ApiException<MarkdowntohtmlError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MarkdowntohtmlRequest` | `src/ApiVerve/Requests/DataConversion/MarkdowntohtmlRequest.cs` |
| `V1MarkdowntohtmlRequest` | `src/ApiVerve/Models/V1MarkdowntohtmlRequest.cs` |
| `V1MarkdowntohtmlResponse` | `src/ApiVerve/Models/V1MarkdowntohtmlResponse.cs` |
| `MarkdowntohtmlError` | `src/ApiVerve/Errors/MarkdowntohtmlError.cs` |

### Markdowntoimage

- **Auth**: `options.ApiKey`
- **Signature**: `Markdowntoimage(MarkdowntoimageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1MarkdowntoimageResponse`
- **Error**: `ApiException<MarkdowntoimageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MarkdowntoimageRequest` | `src/ApiVerve/Requests/DataConversion/MarkdowntoimageRequest.cs` |
| `V1MarkdowntoimageRequest` | `src/ApiVerve/Models/V1MarkdowntoimageRequest.cs` |
| `V1MarkdowntoimageResponse` | `src/ApiVerve/Models/V1MarkdowntoimageResponse.cs` |
| `MarkdowntoimageError` | `src/ApiVerve/Errors/MarkdowntoimageError.cs` |

### Markdowntopdf

- **Auth**: `options.ApiKey`
- **Signature**: `Markdowntopdf(MarkdowntopdfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1MarkdowntopdfResponse`
- **Error**: `ApiException<MarkdowntopdfError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MarkdowntopdfRequest` | `src/ApiVerve/Requests/DataConversion/MarkdowntopdfRequest.cs` |
| `V1MarkdowntopdfRequest` | `src/ApiVerve/Models/V1MarkdowntopdfRequest.cs` |
| `V1MarkdowntopdfResponse` | `src/ApiVerve/Models/V1MarkdowntopdfResponse.cs` |
| `MarkdowntopdfError` | `src/ApiVerve/Errors/MarkdowntopdfError.cs` |

### Math

- **Auth**: `options.ApiKey`
- **Signature**: `Math(MathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1MathResponse`
- **Error**: `ApiException<MathError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MathRequest` | `src/ApiVerve/Requests/DataConversion/MathRequest.cs` |
| `V1MathRequest` | `src/ApiVerve/Models/V1MathRequest.cs` |
| `V1MathResponse` | `src/ApiVerve/Models/V1MathResponse.cs` |
| `MathError` | `src/ApiVerve/Errors/MathError.cs` |

### Meetingtimeconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Meetingtimeconverter(MeetingtimeconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Time`, `FromTimezone`, `ToTimezone`
- **Query params (wire ← C#)**: `time` ← `Time`, `fromTimezone` ← `FromTimezone`, `toTimezone` ← `ToTimezone`, `date` ← `Date`
- **Returns**: `V1MeetingtimeconverterResponse`
- **Error**: `ApiException<MeetingtimeconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MeetingtimeconverterRequest` | `src/ApiVerve/Requests/DataConversion/MeetingtimeconverterRequest.cs` |
| `V1MeetingtimeconverterResponse` | `src/ApiVerve/Models/V1MeetingtimeconverterResponse.cs` |
| `MeetingtimeconverterError` | `src/ApiVerve/Errors/MeetingtimeconverterError.cs` |

### Numberbaseconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Numberbaseconverter(NumberbaseconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Value`
- **Query params (wire ← C#)**: `value` ← `Value`, `from` ← `From`, `to` ← `To`
- **Returns**: `V1NumberbaseconverterResponse`
- **Error**: `ApiException<NumberbaseconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumberbaseconverterRequest` | `src/ApiVerve/Requests/DataConversion/NumberbaseconverterRequest.cs` |
| `V1NumberbaseconverterResponse` | `src/ApiVerve/Models/V1NumberbaseconverterResponse.cs` |
| `NumberbaseconverterError` | `src/ApiVerve/Errors/NumberbaseconverterError.cs` |

### Numbertowords

- **Auth**: `options.ApiKey`
- **Signature**: `Numbertowords(NumbertowordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Number`
- **Query params (wire ← C#)**: `number` ← `Number`
- **Returns**: `V1NumbertowordsResponse`
- **Error**: `ApiException<NumbertowordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NumbertowordsRequest` | `src/ApiVerve/Requests/DataConversion/NumbertowordsRequest.cs` |
| `V1NumbertowordsResponse` | `src/ApiVerve/Models/V1NumbertowordsResponse.cs` |
| `NumbertowordsError` | `src/ApiVerve/Errors/NumbertowordsError.cs` |

### Placeholdertext

- **Auth**: `options.ApiKey`
- **Signature**: `Placeholdertext(PlaceholdertextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `style` ← `Style`, `paragraphs` ← `Paragraphs`, `sentences` ← `Sentences`
- **Returns**: `V1PlaceholdertextResponse`
- **Error**: `ApiException<PlaceholdertextError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PlaceholdertextRequest` | `src/ApiVerve/Requests/DataConversion/PlaceholdertextRequest.cs` |
| `V1PlaceholdertextResponse` | `src/ApiVerve/Models/V1PlaceholdertextResponse.cs` |
| `PlaceholdertextError` | `src/ApiVerve/Errors/PlaceholdertextError.cs` |

### Punycode

- **Auth**: `options.ApiKey`
- **Signature**: `Punycode(PunycodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Text`
- **Query params (wire ← C#)**: `text` ← `Text`, `mode` ← `Mode`
- **Returns**: `V1PunycodeResponse`
- **Error**: `ApiException<PunycodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PunycodeRequest` | `src/ApiVerve/Requests/DataConversion/PunycodeRequest.cs` |
| `V1PunycodeResponse` | `src/ApiVerve/Models/V1PunycodeResponse.cs` |
| `PunycodeError` | `src/ApiVerve/Errors/PunycodeError.cs` |

### Querystringbuilder

- **Auth**: `options.ApiKey`
- **Signature**: `Querystringbuilder(QuerystringbuilderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1QuerystringbuilderResponse`
- **Error**: `ApiException<QuerystringbuilderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QuerystringbuilderRequest` | `src/ApiVerve/Requests/DataConversion/QuerystringbuilderRequest.cs` |
| `V1QuerystringbuilderRequest` | `src/ApiVerve/Models/V1QuerystringbuilderRequest.cs` |
| `V1QuerystringbuilderResponse` | `src/ApiVerve/Models/V1QuerystringbuilderResponse.cs` |
| `QuerystringbuilderError` | `src/ApiVerve/Errors/QuerystringbuilderError.cs` |

### Relativetimeformatter

- **Auth**: `options.ApiKey`
- **Signature**: `Relativetimeformatter(RelativetimeformatterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Timestamp`
- **Query params (wire ← C#)**: `timestamp` ← `Timestamp`, `reference` ← `Reference`, `style` ← `Style`
- **Returns**: `V1RelativetimeformatterResponse`
- **Error**: `ApiException<RelativetimeformatterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RelativetimeformatterRequest` | `src/ApiVerve/Requests/DataConversion/RelativetimeformatterRequest.cs` |
| `V1RelativetimeformatterResponse` | `src/ApiVerve/Models/V1RelativetimeformatterResponse.cs` |
| `RelativetimeformatterError` | `src/ApiVerve/Errors/RelativetimeformatterError.cs` |

### Romanconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Romanconverter(RomanconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Number`
- **Query params (wire ← C#)**: `number` ← `Number`
- **Returns**: `V1RomanconverterResponse`
- **Error**: `ApiException<RomanconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RomanconverterRequest` | `src/ApiVerve/Requests/DataConversion/RomanconverterRequest.cs` |
| `V1RomanconverterResponse` | `src/ApiVerve/Models/V1RomanconverterResponse.cs` |
| `RomanconverterError` | `src/ApiVerve/Errors/RomanconverterError.cs` |

### Texttocolor

- **Auth**: `options.ApiKey`
- **Signature**: `Texttocolor(TexttocolorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Color`
- **Query params (wire ← C#)**: `color` ← `Color`
- **Returns**: `V1TexttocolorResponse`
- **Error**: `ApiException<TexttocolorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TexttocolorRequest` | `src/ApiVerve/Requests/DataConversion/TexttocolorRequest.cs` |
| `V1TexttocolorResponse` | `src/ApiVerve/Models/V1TexttocolorResponse.cs` |
| `TexttocolorError` | `src/ApiVerve/Errors/TexttocolorError.cs` |

### Unicodeescape

- **Auth**: `options.ApiKey`
- **Signature**: `Unicodeescape(UnicodeescapeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1UnicodeescapeResponse`
- **Error**: `ApiException<UnicodeescapeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnicodeescapeRequest` | `src/ApiVerve/Requests/DataConversion/UnicodeescapeRequest.cs` |
| `V1UnicodeescapeRequest` | `src/ApiVerve/Models/V1UnicodeescapeRequest.cs` |
| `V1UnicodeescapeResponse` | `src/ApiVerve/Models/V1UnicodeescapeResponse.cs` |
| `UnicodeescapeError` | `src/ApiVerve/Errors/UnicodeescapeError.cs` |

### Unitconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Unitconverter(UnitconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Value`, `From`, `To`
- **Query params (wire ← C#)**: `value` ← `Value`, `from` ← `From`, `to` ← `To`
- **Returns**: `V1UnitconverterResponse`
- **Error**: `ApiException<UnitconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnitconverterRequest` | `src/ApiVerve/Requests/DataConversion/UnitconverterRequest.cs` |
| `V1UnitconverterResponse` | `src/ApiVerve/Models/V1UnitconverterResponse.cs` |
| `UnitconverterError` | `src/ApiVerve/Errors/UnitconverterError.cs` |

### Unixtimestamp

- **Auth**: `options.ApiKey`
- **Signature**: `Unixtimestamp(UnixtimestampRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Timestamp`
- **Query params (wire ← C#)**: `timestamp` ← `Timestamp`, `format` ← `Format`
- **Returns**: `V1UnixtimestampResponse`
- **Error**: `ApiException<UnixtimestampError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnixtimestampRequest` | `src/ApiVerve/Requests/DataConversion/UnixtimestampRequest.cs` |
| `V1UnixtimestampResponse` | `src/ApiVerve/Models/V1UnixtimestampResponse.cs` |
| `UnixtimestampError` | `src/ApiVerve/Errors/UnixtimestampError.cs` |

### Urlencode

- **Auth**: `options.ApiKey`
- **Signature**: `Urlencode(UrlencodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1UrlencodeResponse`
- **Error**: `ApiException<UrlencodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UrlencodeRequest` | `src/ApiVerve/Requests/DataConversion/UrlencodeRequest.cs` |
| `V1UrlencodeRequest` | `src/ApiVerve/Models/V1UrlencodeRequest.cs` |
| `V1UrlencodeResponse` | `src/ApiVerve/Models/V1UrlencodeResponse.cs` |
| `UrlencodeError` | `src/ApiVerve/Errors/UrlencodeError.cs` |

### Urltomarkdown

- **Auth**: `options.ApiKey`
- **Signature**: `Urltomarkdown(UrltomarkdownRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1UrltomarkdownResponse`
- **Error**: `ApiException<UrltomarkdownError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UrltomarkdownRequest` | `src/ApiVerve/Requests/DataConversion/UrltomarkdownRequest.cs` |
| `V1UrltomarkdownRequest` | `src/ApiVerve/Models/V1UrltomarkdownRequest.cs` |
| `V1UrltomarkdownResponse` | `src/ApiVerve/Models/V1UrltomarkdownResponse.cs` |
| `UrltomarkdownError` | `src/ApiVerve/Errors/UrltomarkdownError.cs` |

### Variablenameconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Variablenameconverter(VariablenameconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1VariablenameconverterResponse`
- **Error**: `ApiException<VariablenameconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariablenameconverterRequest` | `src/ApiVerve/Requests/DataConversion/VariablenameconverterRequest.cs` |
| `V1VariablenameconverterRequest` | `src/ApiVerve/Models/V1VariablenameconverterRequest.cs` |
| `V1VariablenameconverterResponse` | `src/ApiVerve/Models/V1VariablenameconverterResponse.cs` |
| `VariablenameconverterError` | `src/ApiVerve/Errors/VariablenameconverterError.cs` |

### Websitetotext

- **Auth**: `options.ApiKey`
- **Signature**: `Websitetotext(WebsitetotextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1WebsitetotextResponse`
- **Error**: `ApiException<WebsitetotextError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebsitetotextRequest` | `src/ApiVerve/Requests/DataConversion/WebsitetotextRequest.cs` |
| `V1WebsitetotextRequest` | `src/ApiVerve/Models/V1WebsitetotextRequest.cs` |
| `V1WebsitetotextResponse` | `src/ApiVerve/Models/V1WebsitetotextResponse.cs` |
| `WebsitetotextError` | `src/ApiVerve/Errors/WebsitetotextError.cs` |

### Wordstonumbers

- **Auth**: `options.ApiKey`
- **Signature**: `Wordstonumbers(WordstonumbersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Words`
- **Query params (wire ← C#)**: `words` ← `Words`
- **Returns**: `V1WordstonumbersResponse`
- **Error**: `ApiException<WordstonumbersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WordstonumbersRequest` | `src/ApiVerve/Requests/DataConversion/WordstonumbersRequest.cs` |
| `V1WordstonumbersResponse` | `src/ApiVerve/Models/V1WordstonumbersResponse.cs` |
| `WordstonumbersError` | `src/ApiVerve/Errors/WordstonumbersError.cs` |

### Xmltojson

- **Auth**: `options.ApiKey`
- **Signature**: `Xmltojson(XmltojsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1XmltojsonResponse`
- **Error**: `ApiException<XmltojsonError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `XmltojsonRequest` | `src/ApiVerve/Requests/DataConversion/XmltojsonRequest.cs` |
| `V1XmltojsonRequest` | `src/ApiVerve/Models/V1XmltojsonRequest.cs` |
| `V1XmltojsonResponse` | `src/ApiVerve/Models/V1XmltojsonResponse.cs` |
| `XmltojsonError` | `src/ApiVerve/Errors/XmltojsonError.cs` |

