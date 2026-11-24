<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataLookup — operations

Accessor: `client.DataLookup` · Source: `src/ApiVerve/Api/DataLookup.cs` · 17 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Asnlookup

- **Auth**: `options.ApiKey`
- **Signature**: `Asnlookup(AsnlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Asn`
- **Query params (wire ← C#)**: `asn` ← `Asn`
- **Returns**: `V1AsnlookupResponse`
- **Error**: `ApiException<AsnlookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AsnlookupRequest` | `src/ApiVerve/Requests/DataLookup/AsnlookupRequest.cs` |
| `V1AsnlookupResponse` | `src/ApiVerve/Models/V1AsnlookupResponse.cs` |
| `AsnlookupError` | `src/ApiVerve/Errors/AsnlookupError.cs` |

### Bible

- **Auth**: `options.ApiKey`
- **Signature**: `Bible(BibleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Book`, `Version`, `Chapter`
- **Query params (wire ← C#)**: `book` ← `Book`, `version` ← `Version`, `chapter` ← `Chapter`, `verse` ← `Verse`
- **Returns**: `V1BibleResponse`
- **Error**: `ApiException<BibleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BibleRequest` | `src/ApiVerve/Requests/DataLookup/BibleRequest.cs` |
| `V1BibleResponse` | `src/ApiVerve/Models/V1BibleResponse.cs` |
| `BibleError` | `src/ApiVerve/Errors/BibleError.cs` |

### Callingcode

- **Auth**: `options.ApiKey`
- **Signature**: `Callingcode(CallingcodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`
- **Returns**: `V1CallingcodeResponse`
- **Error**: `ApiException<CallingcodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CallingcodeRequest` | `src/ApiVerve/Requests/DataLookup/CallingcodeRequest.cs` |
| `V1CallingcodeResponse` | `src/ApiVerve/Models/V1CallingcodeResponse.cs` |
| `CallingcodeError` | `src/ApiVerve/Errors/CallingcodeError.cs` |

### Dictionary

- **Auth**: `options.ApiKey`
- **Signature**: `Dictionary(DictionaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Word`
- **Query params (wire ← C#)**: `word` ← `Word`
- **Returns**: `V1DictionaryResponse`
- **Error**: `ApiException<DictionaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DictionaryRequest` | `src/ApiVerve/Requests/DataLookup/DictionaryRequest.cs` |
| `V1DictionaryResponse` | `src/ApiVerve/Models/V1DictionaryResponse.cs` |
| `DictionaryError` | `src/ApiVerve/Errors/DictionaryError.cs` |

### Dogbreeds

- **Auth**: `options.ApiKey`
- **Signature**: `Dogbreeds(DogbreedsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Breed`
- **Query params (wire ← C#)**: `breed` ← `Breed`
- **Returns**: `V1DogbreedsResponse`
- **Error**: `ApiException<DogbreedsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DogbreedsRequest` | `src/ApiVerve/Requests/DataLookup/DogbreedsRequest.cs` |
| `V1DogbreedsResponse` | `src/ApiVerve/Models/V1DogbreedsResponse.cs` |
| `DogbreedsError` | `src/ApiVerve/Errors/DogbreedsError.cs` |

### Emoji

- **Auth**: `options.ApiKey`
- **Signature**: `Emoji(EmojiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Emoji`
- **Query params (wire ← C#)**: `emoji` ← `Emoji`
- **Returns**: `V1EmojiResponse`
- **Error**: `ApiException<EmojiError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EmojiRequest` | `src/ApiVerve/Requests/DataLookup/EmojiRequest.cs` |
| `V1EmojiResponse` | `src/ApiVerve/Models/V1EmojiResponse.cs` |
| `EmojiError` | `src/ApiVerve/Errors/EmojiError.cs` |

### Genderdetector

- **Auth**: `options.ApiKey`
- **Signature**: `Genderdetector(GenderdetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`, `country` ← `Country`
- **Returns**: `V1GenderdetectorResponse`
- **Error**: `ApiException<GenderdetectorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GenderdetectorRequest` | `src/ApiVerve/Requests/DataLookup/GenderdetectorRequest.cs` |
| `V1GenderdetectorResponse` | `src/ApiVerve/Models/V1GenderdetectorResponse.cs` |
| `GenderdetectorError` | `src/ApiVerve/Errors/GenderdetectorError.cs` |

### Gravatarlookup

- **Auth**: `options.ApiKey`
- **Signature**: `Gravatarlookup(GravatarlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Email`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `V1GravatarlookupResponse`
- **Error**: `ApiException<GravatarlookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GravatarlookupRequest` | `src/ApiVerve/Requests/DataLookup/GravatarlookupRequest.cs` |
| `V1GravatarlookupResponse` | `src/ApiVerve/Models/V1GravatarlookupResponse.cs` |
| `GravatarlookupError` | `src/ApiVerve/Errors/GravatarlookupError.cs` |

### Ipdemographics

- **Auth**: `options.ApiKey`
- **Signature**: `Ipdemographics(IpdemographicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`
- **Returns**: `V1IpdemographicsResponse`
- **Error**: `ApiException<IpdemographicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IpdemographicsRequest` | `src/ApiVerve/Requests/DataLookup/IpdemographicsRequest.cs` |
| `V1IpdemographicsResponse` | `src/ApiVerve/Models/V1IpdemographicsResponse.cs` |
| `IpdemographicsError` | `src/ApiVerve/Errors/IpdemographicsError.cs` |

### Lottery

- **Auth**: `options.ApiKey`
- **Signature**: `Lottery(LotteryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Numbers`
- **Query params (wire ← C#)**: `numbers` ← `Numbers`, `date` ← `Date`
- **Returns**: `V1LotteryResponse`
- **Error**: `ApiException<LotteryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LotteryRequest` | `src/ApiVerve/Requests/DataLookup/LotteryRequest.cs` |
| `V1LotteryResponse` | `src/ApiVerve/Models/V1LotteryResponse.cs` |
| `LotteryError` | `src/ApiVerve/Errors/LotteryError.cs` |

### Nobelprizes

- **Auth**: `options.ApiKey`
- **Signature**: `Nobelprizes(NobelprizesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `firstname` ← `Firstname`, `lastname` ← `Lastname`, `category` ← `Category`, `year` ← `Year`
- **Returns**: `V1NobelprizesResponse`
- **Error**: `ApiException<NobelprizesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NobelprizesRequest` | `src/ApiVerve/Requests/DataLookup/NobelprizesRequest.cs` |
| `V1NobelprizesResponse` | `src/ApiVerve/Models/V1NobelprizesResponse.cs` |
| `NobelprizesError` | `src/ApiVerve/Errors/NobelprizesError.cs` |

### Openlicenses

- **Auth**: `options.ApiKey`
- **Signature**: `Openlicenses(OpenlicensesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `V1OpenlicensesResponse`
- **Error**: `ApiException<OpenlicensesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OpenlicensesRequest` | `src/ApiVerve/Requests/DataLookup/OpenlicensesRequest.cs` |
| `V1OpenlicensesResponse` | `src/ApiVerve/Models/V1OpenlicensesResponse.cs` |
| `OpenlicensesError` | `src/ApiVerve/Errors/OpenlicensesError.cs` |

### Thesaurus

- **Auth**: `options.ApiKey`
- **Signature**: `Thesaurus(ThesaurusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Word`
- **Query params (wire ← C#)**: `word` ← `Word`
- **Returns**: `V1ThesaurusResponse`
- **Error**: `ApiException<ThesaurusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ThesaurusRequest` | `src/ApiVerve/Requests/DataLookup/ThesaurusRequest.cs` |
| `V1ThesaurusResponse` | `src/ApiVerve/Models/V1ThesaurusResponse.cs` |
| `ThesaurusError` | `src/ApiVerve/Errors/ThesaurusError.cs` |

### Timezonelookup

- **Auth**: `options.ApiKey`
- **Signature**: `Timezonelookup(TimezonelookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `City`
- **Query params (wire ← C#)**: `city` ← `City`
- **Returns**: `V1TimezonelookupResponse`
- **Error**: `ApiException<TimezonelookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TimezonelookupRequest` | `src/ApiVerve/Requests/DataLookup/TimezonelookupRequest.cs` |
| `V1TimezonelookupResponse` | `src/ApiVerve/Models/V1TimezonelookupResponse.cs` |
| `TimezonelookupError` | `src/ApiVerve/Errors/TimezonelookupError.cs` |

### Unicodelookup

- **Auth**: `options.ApiKey`
- **Signature**: `Unicodelookup(UnicodelookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `character` ← `Character`, `codepoint` ← `Codepoint`
- **Returns**: `V1UnicodelookupResponse`
- **Error**: `ApiException<UnicodelookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnicodelookupRequest` | `src/ApiVerve/Requests/DataLookup/UnicodelookupRequest.cs` |
| `V1UnicodelookupResponse` | `src/ApiVerve/Models/V1UnicodelookupResponse.cs` |
| `UnicodelookupError` | `src/ApiVerve/Errors/UnicodelookupError.cs` |

### Worldtime

- **Auth**: `options.ApiKey`
- **Signature**: `Worldtime(WorldtimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `City`
- **Query params (wire ← C#)**: `city` ← `City`
- **Returns**: `V1WorldtimeResponse`
- **Error**: `ApiException<WorldtimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WorldtimeRequest` | `src/ApiVerve/Requests/DataLookup/WorldtimeRequest.cs` |
| `V1WorldtimeResponse` | `src/ApiVerve/Models/V1WorldtimeResponse.cs` |
| `WorldtimeError` | `src/ApiVerve/Errors/WorldtimeError.cs` |

### Zipdemographics

- **Auth**: `options.ApiKey`
- **Signature**: `Zipdemographics(ZipdemographicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zip`
- **Query params (wire ← C#)**: `zip` ← `Zip`
- **Returns**: `V1ZipdemographicsResponse`
- **Error**: `ApiException<ZipdemographicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ZipdemographicsRequest` | `src/ApiVerve/Requests/DataLookup/ZipdemographicsRequest.cs` |
| `V1ZipdemographicsResponse` | `src/ApiVerve/Models/V1ZipdemographicsResponse.cs` |
| `ZipdemographicsError` | `src/ApiVerve/Errors/ZipdemographicsError.cs` |

