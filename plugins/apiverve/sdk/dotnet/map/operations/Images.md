<!-- Generated file — do not edit; regenerated with the SDK. -->

# Images — operations

Accessor: `client.Images` · Source: `src/ApiVerve/Api/Images.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Facedetect

- **Auth**: `options.ApiKey`
- **Signature**: `Facedetect(FacedetectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `confidence` ← `Confidence`
- **Returns**: `V1FacedetectResponse`
- **Error**: `ApiException<FacedetectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FacedetectRequest` | `src/ApiVerve/Requests/Images/FacedetectRequest.cs` |
| `V1FacedetectResponse` | `src/ApiVerve/Models/V1FacedetectResponse.cs` |
| `FacedetectError` | `src/ApiVerve/Errors/FacedetectError.cs` |

### Heicconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Heicconverter(HeicconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OutputFormat`, `Image`
- **Query params (wire ← C#)**: `outputFormat` ← `OutputFormat`, `quality` ← `Quality`, `maxWidth` ← `MaxWidth`, `maxHeight` ← `MaxHeight`
- **Returns**: `V1HeicconverterResponse`
- **Error**: `ApiException<HeicconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HeicconverterRequest` | `src/ApiVerve/Requests/Images/HeicconverterRequest.cs` |
| `V1HeicconverterResponse` | `src/ApiVerve/Models/V1HeicconverterResponse.cs` |
| `HeicconverterError` | `src/ApiVerve/Errors/HeicconverterError.cs` |

### Imageconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Imageconverter(ImageconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OutputFormat`, `Image`
- **Query params (wire ← C#)**: `outputFormat` ← `OutputFormat`, `quality` ← `Quality`, `maxWidth` ← `MaxWidth`, `maxHeight` ← `MaxHeight`
- **Returns**: `V1ImageconverterResponse`
- **Error**: `ApiException<ImageconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImageconverterRequest` | `src/ApiVerve/Requests/Images/ImageconverterRequest.cs` |
| `V1ImageconverterResponse` | `src/ApiVerve/Models/V1ImageconverterResponse.cs` |
| `ImageconverterError` | `src/ApiVerve/Errors/ImageconverterError.cs` |

### Nsfwimagedetector

- **Auth**: `options.ApiKey`
- **Signature**: `Nsfwimagedetector(NsfwimagedetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Image`
- **Returns**: `V1NsfwimagedetectorResponse`
- **Error**: `ApiException<NsfwimagedetectorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NsfwimagedetectorRequest` | `src/ApiVerve/Requests/Images/NsfwimagedetectorRequest.cs` |
| `V1NsfwimagedetectorResponse` | `src/ApiVerve/Models/V1NsfwimagedetectorResponse.cs` |
| `NsfwimagedetectorError` | `src/ApiVerve/Errors/NsfwimagedetectorError.cs` |

### Qrcodereader

- **Auth**: `options.ApiKey`
- **Signature**: `Qrcodereader(QrcodereaderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Image`
- **Returns**: `V1QrcodereaderResponse`
- **Error**: `ApiException<QrcodereaderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QrcodereaderRequest` | `src/ApiVerve/Requests/Images/QrcodereaderRequest.cs` |
| `V1QrcodereaderResponse` | `src/ApiVerve/Models/V1QrcodereaderResponse.cs` |
| `QrcodereaderError` | `src/ApiVerve/Errors/QrcodereaderError.cs` |

### Svgconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Svgconverter(SvgconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OutputFormat`, `Image`
- **Query params (wire ← C#)**: `outputFormat` ← `OutputFormat`, `quality` ← `Quality`, `maxWidth` ← `MaxWidth`, `maxHeight` ← `MaxHeight`
- **Returns**: `V1SvgconverterResponse`
- **Error**: `ApiException<SvgconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SvgconverterRequest` | `src/ApiVerve/Requests/Images/SvgconverterRequest.cs` |
| `V1SvgconverterResponse` | `src/ApiVerve/Models/V1SvgconverterResponse.cs` |
| `SvgconverterError` | `src/ApiVerve/Errors/SvgconverterError.cs` |

### Webpconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Webpconverter(WebpconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OutputFormat`, `Image`
- **Query params (wire ← C#)**: `outputFormat` ← `OutputFormat`, `quality` ← `Quality`, `maxWidth` ← `MaxWidth`, `maxHeight` ← `MaxHeight`
- **Returns**: `V1WebpconverterResponse`
- **Error**: `ApiException<WebpconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebpconverterRequest` | `src/ApiVerve/Requests/Images/WebpconverterRequest.cs` |
| `V1WebpconverterResponse` | `src/ApiVerve/Models/V1WebpconverterResponse.cs` |
| `WebpconverterError` | `src/ApiVerve/Errors/WebpconverterError.cs` |

