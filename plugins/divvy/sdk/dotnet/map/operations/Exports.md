<!-- Generated file — do not edit; regenerated with the SDK. -->

# Exports — operations

Accessor: `client.Exports` · Source: `src/Divvy/Api/Exports.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetDownloadLink

- **Signature**: `GetDownloadLink(GetDownloadLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExportId`
- **Returns**: `ExportDownloadLinkResponseDto`
- **Error**: `ApiException<GetDownloadLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDownloadLinkRequest` | `src/Divvy/Requests/Exports/GetDownloadLinkRequest.cs` |
| `ExportDownloadLinkResponseDto` | `src/Divvy/Models/ExportDownloadLinkResponseDto.cs` |
| `GetDownloadLinkError` | `src/Divvy/Errors/GetDownloadLinkError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListExports

- **Signature**: `ListExports(ListExportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoExportResponseDto`
- **Error**: `ApiException<ListExportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExportsRequest` | `src/Divvy/Requests/Exports/ListExportsRequest.cs` |
| `ListResponseDtoExportResponseDto` | `src/Divvy/Models/ListResponseDtoExportResponseDto.cs` |
| `ListExportsError` | `src/Divvy/Errors/ListExportsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

