<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactApi — operations

Accessor: `client.ContactApi` · Source: `src/FlowAccount/Api/ContactApi.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ContactCreate

- **Auth**: `options.Bearer`
- **Signature**: `ContactCreate(ContactCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ContactCreateRequest` | `src/FlowAccount/Requests/ContactApi/ContactCreateRequest.cs` |
| `ContactResult` | `src/FlowAccount/Models/ContactResult.cs` |

### ContactGetContactList

- **Auth**: `options.Bearer`
- **Signature**: `ContactGetContactList(ContactGetContactListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ContactGetContactListRequest` | `src/FlowAccount/Requests/ContactApi/ContactGetContactListRequest.cs` |

### ContactGetContactList2

- **Auth**: `options.Bearer`
- **Signature**: `ContactGetContactList2(ContactGetContactList2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ContactGetContactList2Request` | `src/FlowAccount/Requests/ContactApi/ContactGetContactList2Request.cs` |

### ContactRemoveContact

- **Auth**: `options.Bearer`
- **Signature**: `ContactRemoveContact(ContactRemoveContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ContactRemoveContactRequest` | `src/FlowAccount/Requests/ContactApi/ContactRemoveContactRequest.cs` |

### ContactSearch

- **Auth**: `options.Bearer`
- **Signature**: `ContactSearch(ContactSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ContactSearchRequest` | `src/FlowAccount/Requests/ContactApi/ContactSearchRequest.cs` |

### ContactUpdate

- **Auth**: `options.Bearer`
- **Signature**: `ContactUpdate(ContactUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Culture`, `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ContactUpdateRequest` | `src/FlowAccount/Requests/ContactApi/ContactUpdateRequest.cs` |
| `ContactResult` | `src/FlowAccount/Models/ContactResult.cs` |

### ContactUploadContactQrCode

- **Auth**: `options.Bearer`
- **Signature**: `ContactUploadContactQrCode(ContactUploadContactQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContactId`, `Culture`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ContactUploadContactQrCodeRequest` | `src/FlowAccount/Requests/ContactApi/ContactUploadContactQrCodeRequest.cs` |

