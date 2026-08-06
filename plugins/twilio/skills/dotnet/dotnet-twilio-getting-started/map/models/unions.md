# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (2)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `TypingIndicatorRequest` | MessagingV2WhatsappTypingIndicator, AppleTypingIndicatorRequest | `TypingIndicatorRequest.MessagingV2WhatsappTypingIndicator(MessagingV2WhatsappTypingIndicator)`, `TypingIndicatorRequest.AppleTypingIndicatorRequest(AppleTypingIndicatorRequest)` | `TryGetMessagingV2WhatsappTypingIndicator(out …)`, `TryGetAppleTypingIndicatorRequest(out …)` | `MessagingV2WhatsappTypingIndicator`, `AppleTypingIndicatorRequest` | `Models/OneOf/TypingIndicatorRequest.cs` |
| `V2ConversationsActionsRequest` | — | — | — | — | `Models/OneOf/V2ConversationsActionsRequest.cs` |

## AnyOf (3)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `Content` | ContentText, ContentTranscription | `Content.ContentText(ContentText)`, `Content.ContentTranscription(ContentTranscription)` | `TryGetContentText(out …)`, `TryGetContentTranscription(out …)` | `ContentText`, `ContentTranscription` | `Models/AnyOf/Content.cs` |
| `Content2` | ContentText1, ContentTranscription1 | `Content2.ContentText1(ContentText1)`, `Content2.ContentTranscription1(ContentTranscription1)` | `TryGetContentText1(out …)`, `TryGetContentTranscription1(out …)` | `ContentText1`, `ContentTranscription1` | `Models/AnyOf/Content2.cs` |
| `MessagingV1ServiceUsAppToPersonResponse` | MessagingV1ServiceUsAppToPerson, MessagingV1ServiceUsAppToPersonV2 | `MessagingV1ServiceUsAppToPersonResponse.MessagingV1ServiceUsAppToPerson(MessagingV1ServiceUsAppToPerson)`, `MessagingV1ServiceUsAppToPersonResponse.MessagingV1ServiceUsAppToPersonV2(MessagingV1ServiceUsAppToPersonV2)` | `TryGetMessagingV1ServiceUsAppToPerson(out …)`, `TryGetMessagingV1ServiceUsAppToPersonV2(out …)` | `MessagingV1ServiceUsAppToPerson`, `MessagingV1ServiceUsAppToPersonV2` | `Models/AnyOf/MessagingV1ServiceUsAppToPersonResponse.cs` |
