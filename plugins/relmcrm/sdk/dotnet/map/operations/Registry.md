<!-- Generated file — do not edit; regenerated with the SDK. -->

# Registry — operations

Accessor: `client.Registry` · Source: `src/RelmCrm/Api/Registry.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEnumValue

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateEnumValue(CreateEnumValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateEnumValueRequest` | `src/RelmCrm/Requests/Registry/CreateEnumValueRequest.cs` |
| `EnumsRequest` | `src/RelmCrm/Models/EnumsRequest.cs` |

### CreateField

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateField(CreateFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateFieldRequest` | `src/RelmCrm/Requests/Registry/CreateFieldRequest.cs` |
| `FieldsRequest` | `src/RelmCrm/Models/FieldsRequest.cs` |

### CreateType

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateType(CreateTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateTypeRequest` | `src/RelmCrm/Requests/Registry/CreateTypeRequest.cs` |
| `TypesRequest` | `src/RelmCrm/Models/TypesRequest.cs` |

### ListEnums

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListEnums(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

