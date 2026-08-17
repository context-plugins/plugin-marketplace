<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV2TypingIndicator — operations

Accessor: `client.MessagingV2TypingIndicator` · Source: `Api/MessagingV2TypingIndicator.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTypingIndicator

- **Server group**: `Default1`
- **Signature**: `CreateTypingIndicator(Channel channel, string messageId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `V2IndicatorsTypingJsonResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Channel` | `Models/Enums/Channel.cs` |
| `V2IndicatorsTypingJsonResponse` | `Models/V2IndicatorsTypingJsonResponse.cs` |

