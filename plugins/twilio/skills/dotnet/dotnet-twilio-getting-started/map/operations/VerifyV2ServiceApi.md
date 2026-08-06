# VerifyV2ServiceApi — operations

Accessor: `client.VerifyV2ServiceApi` · Source: `Api/VerifyV2ServiceApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateService2
- **HTTP**: `POST /v2/Services` (Default3 (verify))
- **Notes**: Create a new Verification Service.
- **Signature**: `CreateService2(string friendlyName, int? codeLength, bool? lookupEnabled, bool? skipSmsToLandlines, bool? dtmfInputRequired, string? ttsName, bool? psd2Enabled, bool? doNotShareWarningEnabled, bool? customCodeEnabled, bool? pushIncludeDate, string? pushApnCredentialSid, string? pushFcmCredentialSid, string? totpIssuer, int? totpTimeStep, int? totpCodeLength, int? totpSkew, string? defaultTemplateSid, string? whatsappMsgServiceSid, string? whatsappFrom, string? passkeysRelyingPartyId, string? passkeysRelyingPartyName, string? passkeysRelyingPartyOrigins, string? passkeysAuthenticatorAttachment, string? passkeysDiscoverableCredentials, string? passkeysUserVerification, bool? verifyEventSubscriptionEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 25 params (`codeLength` … `verifyEventSubscriptionEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `CodeLength` ← `codeLength`, `LookupEnabled` ← `lookupEnabled`, `SkipSmsToLandlines` ← `skipSmsToLandlines`, `DtmfInputRequired` ← `dtmfInputRequired`, `TtsName` ← `ttsName`, `Psd2Enabled` ← `psd2Enabled`, `DoNotShareWarningEnabled` ← `doNotShareWarningEnabled`, `CustomCodeEnabled` ← `customCodeEnabled`, `Push.IncludeDate` ← `pushIncludeDate`, `Push.ApnCredentialSid` ← `pushApnCredentialSid`, `Push.FcmCredentialSid` ← `pushFcmCredentialSid`, `Totp.Issuer` ← `totpIssuer`, `Totp.TimeStep` ← `totpTimeStep`, `Totp.CodeLength` ← `totpCodeLength`, `Totp.Skew` ← `totpSkew`, `DefaultTemplateSid` ← `defaultTemplateSid`, `Whatsapp.MsgServiceSid` ← `whatsappMsgServiceSid`, `Whatsapp.From` ← `whatsappFrom`, `Passkeys.RelyingParty.Id` ← `passkeysRelyingPartyId`, `Passkeys.RelyingParty.Name` ← `passkeysRelyingPartyName`, `Passkeys.RelyingParty.Origins` ← `passkeysRelyingPartyOrigins`, `Passkeys.AuthenticatorAttachment` ← `passkeysAuthenticatorAttachment`, `Passkeys.DiscoverableCredentials` ← `passkeysDiscoverableCredentials`, `Passkeys.UserVerification` ← `passkeysUserVerification`, `VerifyEventSubscriptionEnabled` ← `verifyEventSubscriptionEnabled`
- **Returns**: `VerifyV2Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteService2
- **HTTP**: `DELETE /v2/Services/{Sid}` (Default3 (verify))
- **Notes**: Delete a specific Verification Service Instance.
- **Signature**: `DeleteService2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchService2
- **HTTP**: `GET /v2/Services/{Sid}` (Default3 (verify))
- **Notes**: Fetch specific Verification Service Instance.
- **Signature**: `FetchService2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListService2
- **HTTP**: `GET /v2/Services` (Default3 (verify))
- **Notes**: Retrieve a list of all Verification Services for an account.
- **Signature**: `ListService2(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateService2
- **HTTP**: `POST /v2/Services/{Sid}` (Default3 (verify))
- **Notes**: Update a specific Verification Service.
- **Signature**: `UpdateService2(string sid, string? friendlyName, int? codeLength, bool? lookupEnabled, bool? skipSmsToLandlines, bool? dtmfInputRequired, string? ttsName, bool? psd2Enabled, bool? doNotShareWarningEnabled, bool? customCodeEnabled, bool? pushIncludeDate, string? pushApnCredentialSid, string? pushFcmCredentialSid, string? totpIssuer, int? totpTimeStep, int? totpCodeLength, int? totpSkew, string? defaultTemplateSid, string? whatsappMsgServiceSid, string? whatsappFrom, string? passkeysRelyingPartyId, string? passkeysRelyingPartyName, string? passkeysRelyingPartyOrigins, string? passkeysAuthenticatorAttachment, string? passkeysDiscoverableCredentials, string? passkeysUserVerification, bool? verifyEventSubscriptionEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 26 params (`friendlyName` … `verifyEventSubscriptionEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `CodeLength` ← `codeLength`, `LookupEnabled` ← `lookupEnabled`, `SkipSmsToLandlines` ← `skipSmsToLandlines`, `DtmfInputRequired` ← `dtmfInputRequired`, `TtsName` ← `ttsName`, `Psd2Enabled` ← `psd2Enabled`, `DoNotShareWarningEnabled` ← `doNotShareWarningEnabled`, `CustomCodeEnabled` ← `customCodeEnabled`, `Push.IncludeDate` ← `pushIncludeDate`, `Push.ApnCredentialSid` ← `pushApnCredentialSid`, `Push.FcmCredentialSid` ← `pushFcmCredentialSid`, `Totp.Issuer` ← `totpIssuer`, `Totp.TimeStep` ← `totpTimeStep`, `Totp.CodeLength` ← `totpCodeLength`, `Totp.Skew` ← `totpSkew`, `DefaultTemplateSid` ← `defaultTemplateSid`, `Whatsapp.MsgServiceSid` ← `whatsappMsgServiceSid`, `Whatsapp.From` ← `whatsappFrom`, `Passkeys.RelyingParty.Id` ← `passkeysRelyingPartyId`, `Passkeys.RelyingParty.Name` ← `passkeysRelyingPartyName`, `Passkeys.RelyingParty.Origins` ← `passkeysRelyingPartyOrigins`, `Passkeys.AuthenticatorAttachment` ← `passkeysAuthenticatorAttachment`, `Passkeys.DiscoverableCredentials` ← `passkeysDiscoverableCredentials`, `Passkeys.UserVerification` ← `passkeysUserVerification`, `VerifyEventSubscriptionEnabled` ← `verifyEventSubscriptionEnabled`
- **Returns**: `VerifyV2Service`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
