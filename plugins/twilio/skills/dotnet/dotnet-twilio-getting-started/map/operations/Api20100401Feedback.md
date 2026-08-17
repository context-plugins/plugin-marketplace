<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Feedback — operations

Accessor: `client.Api20100401Feedback` · Source: `Api/Api20100401Feedback.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMessageFeedback

- **Signature**: `CreateMessageFeedback(string accountSid, string messageSid, MessageFeedbackEnumOutcome? outcome, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `outcome` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountMessageMessageFeedback`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessageFeedbackEnumOutcome` | `Models/Enums/MessageFeedbackEnumOutcome.cs` |
| `ApiV2010AccountMessageMessageFeedback` | `Models/ApiV2010AccountMessageMessageFeedback.cs` |

