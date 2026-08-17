<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2NewChallenge — operations

Accessor: `client.VerifyV2NewChallenge` · Source: `Api/VerifyV2NewChallenge.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateChallengePasskeys

- **Server group**: `Default3`
- **Signature**: `CreateChallengePasskeys(string serviceSid, CreatePasskeysChallengeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `V2ServicesPasskeysChallengesResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreatePasskeysChallengeRequest` | `Models/CreatePasskeysChallengeRequest.cs` |
| `V2ServicesPasskeysChallengesResponse` | `Models/V2ServicesPasskeysChallengesResponse.cs` |

