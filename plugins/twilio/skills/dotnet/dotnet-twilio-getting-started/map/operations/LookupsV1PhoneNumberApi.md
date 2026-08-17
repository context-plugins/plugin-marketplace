<!-- Generated file — do not edit; regenerated with the SDK. -->

# LookupsV1PhoneNumberApi — operations

Accessor: `client.LookupsV1PhoneNumberApi` · Source: `Api/LookupsV1PhoneNumberApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchPhoneNumber2

- **Server group**: `Default4`
- **Signature**: `FetchPhoneNumber2(string phoneNumber, string? countryCode, IReadOnlyList<string>? type, IReadOnlyList<string>? addOns, object? addOnsData, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`countryCode` … `addOnsData`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `CountryCode` ← `countryCode`, `Type` ← `type`, `AddOns` ← `addOns`, `AddOnsData` ← `addOnsData`
- **Returns**: `LookupsV1PhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `LookupsV1PhoneNumber` | `Models/LookupsV1PhoneNumber.cs` |

