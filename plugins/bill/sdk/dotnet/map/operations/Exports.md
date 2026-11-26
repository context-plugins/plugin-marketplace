<!-- Generated file — do not edit; regenerated with the SDK. -->

# Exports — operations

Accessor: `client.Exports` · Source: `src/Bill/Api/Exports.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetDownloadLink

- **Signature**: `GetDownloadLink(GetDownloadLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExportId`
- **Returns**: `ExportDownloadLinkResponseDto`
- **Error**: `ApiException<GetDownloadLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDownloadLinkRequest` | `src/Bill/Requests/Exports/GetDownloadLinkRequest.cs` |
| `ExportDownloadLinkResponseDto` | `src/Bill/Models/ExportDownloadLinkResponseDto.cs` |
| `GetDownloadLinkError` | `src/Bill/Errors/GetDownloadLinkError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListExports

- **Signature**: `ListExports(ListExportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoExportResponseDto`
- **Error**: `ApiException<ListExportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExportsRequest` | `src/Bill/Requests/Exports/ListExportsRequest.cs` |
| `ListResponseDtoExportResponseDto` | `src/Bill/Models/ListResponseDtoExportResponseDto.cs` |
| `ListExportsError` | `src/Bill/Errors/ListExportsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

