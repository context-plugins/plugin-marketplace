# VerifyV2Service — operations

Accessor: `client.VerifyV2Service` · Source: `Api/VerifyV2Service.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostCreateService1
- **HTTP**: `POST /v2/Services` (Default (accounts))
- **Notes**: Create a new Verification Service.
- **Signature**: `PostCreateService1(ContentType contentType, string friendlyName, int? codeLength, bool? lookupEnabled, bool? skipSmsToLandlines, bool? dtmfInputRequired, string? ttsName, bool? psd2Enabled, bool? doNotShareWarningEnabled, bool? customCodeEnabled, bool? pushIncludeDate, string? pushApnCredentialSid, string? pushFcmCredentialSid, string? totpIssuer, int? totpTimeStep, int? totpCodeLength, int? totpSkew, string? defaultTemplateSid, string? whatsappMsgServiceSid, string? whatsappFrom, string? passkeysRelyingPartyId, string? passkeysRelyingPartyName, string? passkeysRelyingPartyOrigins, string? passkeysAuthenticatorAttachment, string? passkeysDiscoverableCredentials, string? passkeysUserVerification, bool? verifyEventSubscriptionEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 25 params (`codeLength` … `verifyEventSubscriptionEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `CodeLength` ← `codeLength`, `LookupEnabled` ← `lookupEnabled`, `SkipSmsToLandlines` ← `skipSmsToLandlines`, `DtmfInputRequired` ← `dtmfInputRequired`, `TtsName` ← `ttsName`, `Psd2Enabled` ← `psd2Enabled`, `DoNotShareWarningEnabled` ← `doNotShareWarningEnabled`, `CustomCodeEnabled` ← `customCodeEnabled`, `Push.IncludeDate` ← `pushIncludeDate`, `Push.ApnCredentialSid` ← `pushApnCredentialSid`, `Push.FcmCredentialSid` ← `pushFcmCredentialSid`, `Totp.Issuer` ← `totpIssuer`, `Totp.TimeStep` ← `totpTimeStep`, `Totp.CodeLength` ← `totpCodeLength`, `Totp.Skew` ← `totpSkew`, `DefaultTemplateSid` ← `defaultTemplateSid`, `Whatsapp.MsgServiceSid` ← `whatsappMsgServiceSid`, `Whatsapp.From` ← `whatsappFrom`, `Passkeys.RelyingParty.Id` ← `passkeysRelyingPartyId`, `Passkeys.RelyingParty.Name` ← `passkeysRelyingPartyName`, `Passkeys.RelyingParty.Origins` ← `passkeysRelyingPartyOrigins`, `Passkeys.AuthenticatorAttachment` ← `passkeysAuthenticatorAttachment`, `Passkeys.DiscoverableCredentials` ← `passkeysDiscoverableCredentials`, `Passkeys.UserVerification` ← `passkeysUserVerification`, `VerifyEventSubscriptionEnabled` ← `verifyEventSubscriptionEnabled`
- **Returns**: `Service2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
