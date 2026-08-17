<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401MachineToMachine — operations

Accessor: `client.Api20100401MachineToMachine` · Source: `Api/Api20100401MachineToMachine.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListAvailablePhoneNumberMachineToMachine

- **Signature**: `ListAvailablePhoneNumberMachineToMachine(string accountSid, string countryCode, int? areaCode, string? contains, bool? smsEnabled, bool? mmsEnabled, bool? voiceEnabled, bool? excludeAllAddressRequired, bool? excludeLocalAddressRequired, bool? excludeForeignAddressRequired, bool? beta, string? nearNumber, string? nearLatLong, int? distance, string? inPostalCode, string? inRegion, string? inRateCenter, string? inLata, string? inLocality, bool? faxEnabled, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 21 params (`areaCode` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `AreaCode` ← `areaCode`, `Contains` ← `contains`, `SmsEnabled` ← `smsEnabled`, `MmsEnabled` ← `mmsEnabled`, `VoiceEnabled` ← `voiceEnabled`, `ExcludeAllAddressRequired` ← `excludeAllAddressRequired`, `ExcludeLocalAddressRequired` ← `excludeLocalAddressRequired`, `ExcludeForeignAddressRequired` ← `excludeForeignAddressRequired`, `Beta` ← `beta`, `NearNumber` ← `nearNumber`, `NearLatLong` ← `nearLatLong`, `Distance` ← `distance`, `InPostalCode` ← `inPostalCode`, `InRegion` ← `inRegion`, `InRateCenter` ← `inRateCenter`, `InLata` ← `inLata`, `InLocality` ← `inLocality`, `FaxEnabled` ← `faxEnabled`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAvailablePhoneNumberMachineToMachineResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListAvailablePhoneNumberMachineToMachineResponse` | `Models/ListAvailablePhoneNumberMachineToMachineResponse.cs` |

