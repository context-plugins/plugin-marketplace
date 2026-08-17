<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401UserDefinedMessageSubscription — operations

Accessor: `client.Api20100401UserDefinedMessageSubscription` · Source: `Api/Api20100401UserDefinedMessageSubscription.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateUserDefinedMessageSubscription

- **Signature**: `CreateUserDefinedMessageSubscription(string accountSid, string callSid, string callback, string? idempotencyKey, Method3? method, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `method` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountCallUserDefinedMessageSubscription`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Method3` | `Models/Enums/Method3.cs` |
| `ApiV2010AccountCallUserDefinedMessageSubscription` | `Models/ApiV2010AccountCallUserDefinedMessageSubscription.cs` |

### DeleteUserDefinedMessageSubscription

- **Signature**: `DeleteUserDefinedMessageSubscription(string accountSid, string callSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

