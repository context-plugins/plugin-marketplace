<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2ServiceApi — operations

Accessor: `client.VerifyV2ServiceApi` · Source: `Api/VerifyV2ServiceApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateService2

- **Server group**: `Default3`
- **Signature**: `CreateService2(string friendlyName, int? codeLength, bool? lookupEnabled, bool? skipSmsToLandlines, bool? dtmfInputRequired, string? ttsName, bool? psd2Enabled, bool? doNotShareWarningEnabled, bool? customCodeEnabled, bool? pushIncludeDate, string? pushApnCredentialSid, string? pushFcmCredentialSid, string? totpIssuer, int? totpTimeStep, int? totpCodeLength, int? totpSkew, string? defaultTemplateSid, string? whatsappMsgServiceSid, string? whatsappFrom, string? passkeysRelyingPartyId, string? passkeysRelyingPartyName, string? passkeysRelyingPartyOrigins, string? passkeysAuthenticatorAttachment, string? passkeysDiscoverableCredentials, string? passkeysUserVerification, bool? verifyEventSubscriptionEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 25 params (`codeLength` … `verifyEventSubscriptionEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VerifyV2Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2Service` | `Models/VerifyV2Service.cs` |

### DeleteService2

- **Server group**: `Default3`
- **Signature**: `DeleteService2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchService2

- **Server group**: `Default3`
- **Signature**: `FetchService2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2Service` | `Models/VerifyV2Service.cs` |

### ListService2

- **Server group**: `Default3`
- **Signature**: `ListService2(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceResponse1` | `Models/ListServiceResponse1.cs` |

### UpdateService2

- **Server group**: `Default3`
- **Signature**: `UpdateService2(string sid, string? friendlyName, int? codeLength, bool? lookupEnabled, bool? skipSmsToLandlines, bool? dtmfInputRequired, string? ttsName, bool? psd2Enabled, bool? doNotShareWarningEnabled, bool? customCodeEnabled, bool? pushIncludeDate, string? pushApnCredentialSid, string? pushFcmCredentialSid, string? totpIssuer, int? totpTimeStep, int? totpCodeLength, int? totpSkew, string? defaultTemplateSid, string? whatsappMsgServiceSid, string? whatsappFrom, string? passkeysRelyingPartyId, string? passkeysRelyingPartyName, string? passkeysRelyingPartyOrigins, string? passkeysAuthenticatorAttachment, string? passkeysDiscoverableCredentials, string? passkeysUserVerification, bool? verifyEventSubscriptionEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 26 params (`friendlyName` … `verifyEventSubscriptionEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VerifyV2Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2Service` | `Models/VerifyV2Service.cs` |

