<!-- Generated file — do not edit; regenerated with the SDK. -->

# BinaryApi — operations

Accessor: `client.BinaryApi` · Source: `src/HealthGorilla/Api/BinaryApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ReadBinary

- **Auth**: `options.BearerAuth`
- **Signature**: `ReadBinary(ReadBinaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Binary`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReadBinaryRequest` | `src/HealthGorilla/Requests/BinaryApi/ReadBinaryRequest.cs` |
| `Binary` | `src/HealthGorilla/Models/Binary.cs` |

