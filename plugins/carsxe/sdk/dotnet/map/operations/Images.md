<!-- Generated file — do not edit; regenerated with the SDK. -->

# Images — operations

Accessor: `client.Images` · Source: `src/CarsXe/Api/Images.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetVehicleImages

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetVehicleImages(GetVehicleImagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Make`, `Model`
- **Query params (wire ← C#)**: `make` ← `Make`, `model` ← `Model`, `year` ← `Year`, `trim` ← `Trim`, `color` ← `Color`, `transparent` ← `Transparent`, `angle` ← `Angle`, `photoType` ← `PhotoType`, `size` ← `Size`, `license` ← `License`, `format` ← `Format`
- **Returns**: `ImagesResponse`
- **Error**: `ApiException<GetVehicleImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVehicleImagesRequest` | `src/CarsXe/Requests/Images/GetVehicleImagesRequest.cs` |
| `Angle` | `src/CarsXe/Models/Enums/Angle.cs` |
| `PhotoType` | `src/CarsXe/Models/Enums/PhotoType.cs` |
| `Size` | `src/CarsXe/Models/Enums/Size.cs` |
| `License` | `src/CarsXe/Models/Enums/License.cs` |
| `Format` | `src/CarsXe/Models/Enums/Format.cs` |
| `ImagesResponse` | `src/CarsXe/Models/ImagesResponse.cs` |
| `GetVehicleImagesError` | `src/CarsXe/Errors/GetVehicleImagesError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

