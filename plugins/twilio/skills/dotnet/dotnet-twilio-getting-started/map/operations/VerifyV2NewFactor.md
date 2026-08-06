# VerifyV2NewFactor — operations

Accessor: `client.VerifyV2NewFactor` · Source: `Api/VerifyV2NewFactor.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateNewFactor
- **HTTP**: `POST /v2/Services/{ServiceSid}/Entities/{Identity}/Factors` (Default3 (verify))
- **Notes**: Create a new Factor for the Entity
- **Signature**: `CreateNewFactor(string serviceSid, string identity, string friendlyName, NewFactorEnumFactorTypes factorType, string? bindingAlg, string? bindingPublicKey, string? configAppId, NewFactorEnumNotificationPlatforms? configNotificationPlatform, string? configNotificationToken, string? configSdkVersion, string? bindingSecret, int? configTimeStep, int? configSkew, int? configCodeLength, NewFactorEnumTotpAlgorithms? configAlg, object? metadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`bindingAlg` … `metadata`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `FactorType` ← `factorType`, `Binding.Alg` ← `bindingAlg`, `Binding.PublicKey` ← `bindingPublicKey`, `Config.AppId` ← `configAppId`, `Config.NotificationPlatform` ← `configNotificationPlatform`, `Config.NotificationToken` ← `configNotificationToken`, `Config.SdkVersion` ← `configSdkVersion`, `Binding.Secret` ← `bindingSecret`, `Config.TimeStep` ← `configTimeStep`, `Config.Skew` ← `configSkew`, `Config.CodeLength` ← `configCodeLength`, `Config.Alg` ← `configAlg`, `Metadata` ← `metadata`
- **Returns**: `VerifyV2ServiceEntityNewFactor`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateNewFactorPasskey
- **HTTP**: `POST /v2/Services/{ServiceSid}/Passkeys/Factors` (Default3 (verify))
- **Notes**: Create a new Passkeys Factor for the Entity
- **Signature**: `CreateNewFactorPasskey(string serviceSid, CreateNewPasskeysFactorRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V2ServicesPasskeysFactorsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
