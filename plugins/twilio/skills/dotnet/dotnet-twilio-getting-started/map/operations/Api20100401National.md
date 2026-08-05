# Api20100401National — operations

Accessor: `client.Api20100401National` · Source: `Api/Api20100401National.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListAvailablePhoneNumberNational
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/National.json` (Default (api))
- **Signature**: `ListAvailablePhoneNumberNational(string accountSid, string countryCode, int? areaCode, string? contains, bool? smsEnabled, bool? mmsEnabled, bool? voiceEnabled, bool? excludeAllAddressRequired, bool? excludeLocalAddressRequired, bool? excludeForeignAddressRequired, bool? beta, string? nearNumber, string? nearLatLong, int? distance, string? inPostalCode, string? inRegion, string? inRateCenter, string? inLata, string? inLocality, bool? faxEnabled, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 21 params (`areaCode` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AreaCode` ← `areaCode`, `Contains` ← `contains`, `SmsEnabled` ← `smsEnabled`, `MmsEnabled` ← `mmsEnabled`, `VoiceEnabled` ← `voiceEnabled`, `ExcludeAllAddressRequired` ← `excludeAllAddressRequired`, `ExcludeLocalAddressRequired` ← `excludeLocalAddressRequired`, `ExcludeForeignAddressRequired` ← `excludeForeignAddressRequired`, `Beta` ← `beta`, `NearNumber` ← `nearNumber`, `NearLatLong` ← `nearLatLong`, `Distance` ← `distance`, `InPostalCode` ← `inPostalCode`, `InRegion` ← `inRegion`, `InRateCenter` ← `inRateCenter`, `InLata` ← `inLata`, `InLocality` ← `inLocality`, `FaxEnabled` ← `faxEnabled`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAvailablePhoneNumberNationalResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
