<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2DependentHostedNumberOrder — operations

Accessor: `client.NumbersV2DependentHostedNumberOrder` · Source: `Api/NumbersV2DependentHostedNumberOrder.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListDependentHostedNumberOrder

- **Server group**: `Default5`
- **Signature**: `ListDependentHostedNumberOrder(string signingDocumentSid, DependentHostedNumberOrderEnumStatus? status, string? phoneNumber, string? incomingPhoneNumberSid, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Status` ← `status`, `PhoneNumber` ← `phoneNumber`, `IncomingPhoneNumberSid` ← `incomingPhoneNumberSid`, `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListDependentHostedNumberOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DependentHostedNumberOrderEnumStatus` | `Models/Enums/DependentHostedNumberOrderEnumStatus.cs` |
| `ListDependentHostedNumberOrderResponse` | `Models/ListDependentHostedNumberOrderResponse.cs` |

