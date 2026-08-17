<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401UserDefinedMessage — operations

Accessor: `client.Api20100401UserDefinedMessage` · Source: `Api/Api20100401UserDefinedMessage.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateUserDefinedMessage

- **Signature**: `CreateUserDefinedMessage(string accountSid, string callSid, string content, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountCallUserDefinedMessage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountCallUserDefinedMessage` | `Models/ApiV2010AccountCallUserDefinedMessage.cs` |

