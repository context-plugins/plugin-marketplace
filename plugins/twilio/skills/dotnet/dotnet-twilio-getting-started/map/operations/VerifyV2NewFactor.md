<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2NewFactor — operations

Accessor: `client.VerifyV2NewFactor` · Source: `Api/VerifyV2NewFactor.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateNewFactor

- **Server group**: `Default3`
- **Signature**: `CreateNewFactor(string serviceSid, string identity, string friendlyName, NewFactorEnumFactorTypes factorType, string? bindingAlg, string? bindingPublicKey, string? configAppId, NewFactorEnumNotificationPlatforms? configNotificationPlatform, string? configNotificationToken, string? configSdkVersion, string? bindingSecret, int? configTimeStep, int? configSkew, int? configCodeLength, NewFactorEnumTotpAlgorithms? configAlg, object? metadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`bindingAlg` … `metadata`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VerifyV2ServiceEntityNewFactor`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NewFactorEnumFactorTypes` | `Models/Enums/NewFactorEnumFactorTypes.cs` |
| `NewFactorEnumNotificationPlatforms` | `Models/Enums/NewFactorEnumNotificationPlatforms.cs` |
| `NewFactorEnumTotpAlgorithms` | `Models/Enums/NewFactorEnumTotpAlgorithms.cs` |
| `VerifyV2ServiceEntityNewFactor` | `Models/VerifyV2ServiceEntityNewFactor.cs` |

### CreateNewFactorPasskey

- **Server group**: `Default3`
- **Signature**: `CreateNewFactorPasskey(string serviceSid, CreateNewPasskeysFactorRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `V2ServicesPasskeysFactorsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateNewPasskeysFactorRequest` | `Models/CreateNewPasskeysFactorRequest.cs` |
| `V2ServicesPasskeysFactorsResponse` | `Models/V2ServicesPasskeysFactorsResponse.cs` |

