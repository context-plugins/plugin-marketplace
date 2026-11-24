<!-- Generated file — do not edit; regenerated with the SDK. -->

# Results — operations

Accessor: `client.Results` · Source: `src/MrScraper/Api/Results.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1ResultsResultId

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiV1ResultsResultId(GetApiV1ResultsResultIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResultId`
- **Query params (wire ← C#)**: `include_html` ← `IncludeHtml`
- **Returns**: `GetApiV1ResultsResultidResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ResultsResultIdRequest` | `src/MrScraper/Requests/Results/GetApiV1ResultsResultIdRequest.cs` |
| `GetApiV1ResultsResultidResponse` | `src/MrScraper/Models/GetApiV1ResultsResultidResponse.cs` |

