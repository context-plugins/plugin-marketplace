# SimActions — operations

Accessor: `client.SimActions` · Source: `Api/SimActions.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Newactivatecode
- **HTTP**: `POST /m2m/v1/devices/profile/actions/renew_activation_code` (HyperPreciseCredentials (thingspace))
- **Notes**: System assign a new activation code to reactivate a deactivated device. Note: the previously assigned ICCID must be used to request a new activation code.
- **Signature**: `Newactivatecode(ESimprofileRequest2 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ESimrequestResponse`
- **Error**: `SdkException<NewactivatecodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetEsimrestErrorResponse(out ESimrestErrorResponse)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetactivateUsingPost
- **HTTP**: `POST /m2m/v1/devices/profile/actions/activate` (HyperPreciseCredentials (thingspace))
- **Notes**: Uses the profile to activate the SIM.
- **Signature**: `SetactivateUsingPost(ESimprofileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ESimrequestResponse`
- **Error**: `SdkException<SetactivateUsingPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetEsimrestErrorResponse(out ESimrestErrorResponse)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetdeactivateUsingPost
- **HTTP**: `POST /m2m/v1/devices/profile/actions/deactivate` (HyperPreciseCredentials (thingspace))
- **Notes**: Uses the profile to deactivate the SIM.
- **Signature**: `SetdeactivateUsingPost(ProfileRequest2 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ESimrequestResponse`
- **Error**: `SdkException<SetdeactivateUsingPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetEsimrestErrorResponse(out ESimrestErrorResponse)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
