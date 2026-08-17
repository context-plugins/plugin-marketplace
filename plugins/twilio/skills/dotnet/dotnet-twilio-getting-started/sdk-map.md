<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Twilio SDK (.NET)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, error types, and server/auth wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Twilio SDK |
| Root namespace | `TwilioSdk` |
| Target framework | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| API spec version | `1.0.0` |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `TwilioSdk.csproj` — never to the page that carries them. Open them as-is from the SDK root, from any page; if the SDK sits under a subdirectory of a larger repo, prefix that subdirectory.

---

## Getting a client

```csharp
var httpClient = new HttpClient();
// TODO: configure more client options here
var options =
    new TwilioSdkClientOptions
    {
        AccountSidAuthToken = new BasicAuthCredentials
        {
            Username = "YOUR_USERNAME",
            Password = "YOUR_PASSWORD",
        },
        Environment = ServerEnvironment.Production,
    };
var client = new TwilioSdkClient(httpClient, options);
```

DI alternative (`services.AddTwilioSdkClient`):

```csharp
services.AddTwilioSdkClient(options =>
    {
        options.AccountSidAuthToken =
            new BasicAuthCredentials
            {
                Username = "YOUR_USERNAME",
                Password = "YOUR_PASSWORD",
            };
        options.Environment = ServerEnvironment.Production;
        // TODO: configure more client options here
    });
```

Every API group is a property on the client (e.g. `client.Api20100401Account`). Source: `TwilioSdkClient.cs`. The only constructor is `TwilioSdkClient(HttpClient httpClient, TwilioSdkClientOptions options)`.

All `TwilioSdkClientOptions` properties (source: `TwilioSdkClientOptions.cs`):

| Property | Type |
| --- | --- |
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `AccountSidAuthToken` | `BasicAuthCredentials?` |

`RetryOptions` members (namespace `TwilioSdk.Core.Configuration` — add `using TwilioSdk.Core.Configuration;`; source: `Core/Configuration/RetryOptions.cs`; all members are `required`, so build a full instance or start from `RetryOptions.Default()`):

| Member | Type |
| --- | --- |
| `StatusCodesToRetry` | `IReadOnlyList<HttpStatusCode>` |
| `HttpMethodsToRetry` | `IReadOnlyList<HttpMethod>` |
| `MaxRetries` | `int` |
| `Delay` | `TimeSpan` |
| `Timeout` | `TimeSpan?` |
| `BackOffFactor` | `int` |
| `UseExponentialBackoff` | `bool` |
| `MaxJitter` | `TimeSpan` |
| `OnRetry` | `Action<RetryAttempt>?` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**. On an error status the SDK throws `SdkException<TError>` (`Core/Exceptions/SdkException.cs`) exposing `.Error` of type `TError`. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class with status-specific `TryGet…(out …)` accessors (each returns `true` when that shape is present) plus the inherited `TryGetRawError(out RawError)` fallback. The operation blocks name the exact `TryGet…` methods and the HTTP status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`Core/ErrorResponse/RawError.cs`): `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`.

Core error types (`Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
| --- | --- | --- |
| `ApiError` — abstract base of the 37 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `Core/ErrorResponse/RawError.cs` |

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions — no special handling. The operation's **Type sources** table gives the file that declares each one; read field names, declared types, and JSON wire names there, as for any other model.

```csharp
try
{
    var response = await client.CreateLookupPhoneNumberOverrides(field, phoneNumber, body);
}
catch (SdkException<CreateLookupPhoneNumberOverridesError> ex)
{
    // Case A — typed error
    if (ex.Error.TryGetAccountsCallsRecordingsSidJson201041408Error1(out var error))
    {
        // Handle 400
    }
    else if (ex.Error.TryGetRawError(out var raw))
    {
        // Any other error status
    }
}
catch (SdkException<RawError> ex)
{
    // Case B — raw error
    // ex.Error.StatusCode, ex.Error.ReadAsString(), ex.Error.ReadAsJson<T>()
}
```

**No-throw (`…Result`) variants: absent across this SDK** — every operation is throw-only. Of **898 operations**, **37 are Case A (typed)** and **861 are Case B (raw)**.

---

## Operations — by controller (319 groups, 898 operations)

Each links to a sub-page with one row per operation: signature with must-pass-explicitly params and defaults, query-param wire names, return type, error Case A/B, and Case A's typed accessors with their statuses. Each operation also carries a **Type sources** table — every type it names, with the file that declares it — so resolving a body, return, or error payload to its source is a lookup, never a search. `RawError` is excluded there (its members and path are above); an operation with no table names nothing but primitives and `RawError`.

**Each row states what is specific to its operation. Everything below holds for EVERY operation unless that operation's row says otherwise, so a row silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A row appears only when |
| --- | --- | --- |
| **Throw-only** — no `…Result`/no-throw variant exists anywhere in this SDK | this page, Error-handling model | a no-throw sibling exists (none do at this SDK version) |
| **No pagination** — the operation returns a single response, not a `Pageable` | here | pagination is offered — the block carries a **Pagination** bullet naming the posture (page-, offset-, cursor- or link-based, or the `page`-without-page-size case) |
| **Case B error accessors are always these four** — `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | the `RawError` row above | never — a `Case B` label always implies exactly these four; Case A rows list their own typed accessors |
| **Server group `Default`** — base URL per Servers & auth below | here | the operation is on another group — its block carries a **Server group** bullet |
| **Parameter names are literal** — signatures are generated code verbatim; in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`) | here | never — it always holds |

**The HTTP verb and route live on the operation itself**, in the source file named at the top of its operations page. This map is method-first: the C# method is the interface you call. When something wire-level needs the route — reproducing a raw request, pointing the client at a mock, reading a provider-side log — read it from that file; do not reconstruct it from memory or infer it from the method name.

**The endpoint's behavioural prose lives there too**, as the XML `<remarks>` on the method. Rows here give you the contract — names, types, shapes, errors. Where an operation's *semantics* decide what you must pass — a parameter whose value changes server-side behaviour, an ordering or exclusivity rule between fields — that is what `<remarks>` settles; read it there rather than filling it in from memory.

| Controller (`client.X`) | Ops | Page |
| --- | --- | --- |
| `client` (root) | 11 | [map/operations/TwilioSdkClient.md](map/operations/TwilioSdkClient.md) |
| `Api20100401Account` | 4 | [map/operations/Api20100401Account.md](map/operations/Api20100401Account.md) |
| `Api20100401AddOnResult` | 3 | [map/operations/Api20100401AddOnResult.md](map/operations/Api20100401AddOnResult.md) |
| `Api20100401Address` | 5 | [map/operations/Api20100401Address.md](map/operations/Api20100401Address.md) |
| `Api20100401AllTime` | 1 | [map/operations/Api20100401AllTime.md](map/operations/Api20100401AllTime.md) |
| `Api20100401Application` | 5 | [map/operations/Api20100401Application.md](map/operations/Api20100401Application.md) |
| `Api20100401AssignedAddOn` | 4 | [map/operations/Api20100401AssignedAddOn.md](map/operations/Api20100401AssignedAddOn.md) |
| `Api20100401AssignedAddOnExtension` | 2 | [map/operations/Api20100401AssignedAddOnExtension.md](map/operations/Api20100401AssignedAddOnExtension.md) |
| `Api20100401AuthCallsCredentialListMapping` | 4 | [map/operations/Api20100401AuthCallsCredentialListMapping.md](map/operations/Api20100401AuthCallsCredentialListMapping.md) |
| `Api20100401AuthCallsIpAccessControlListMapping` | 4 | [map/operations/Api20100401AuthCallsIpAccessControlListMapping.md](map/operations/Api20100401AuthCallsIpAccessControlListMapping.md) |
| `Api20100401AuthRegistrationsCredentialListMapping` | 4 | [map/operations/Api20100401AuthRegistrationsCredentialListMapping.md](map/operations/Api20100401AuthRegistrationsCredentialListMapping.md) |
| `Api20100401AuthorizedConnectApp` | 2 | [map/operations/Api20100401AuthorizedConnectApp.md](map/operations/Api20100401AuthorizedConnectApp.md) |
| `Api20100401AvailablePhoneNumberCountry` | 2 | [map/operations/Api20100401AvailablePhoneNumberCountry.md](map/operations/Api20100401AvailablePhoneNumberCountry.md) |
| `Api20100401Balance` | 1 | [map/operations/Api20100401Balance.md](map/operations/Api20100401Balance.md) |
| `Api20100401Call` | 5 | [map/operations/Api20100401Call.md](map/operations/Api20100401Call.md) |
| `Api20100401CallNotification` | 2 | [map/operations/Api20100401CallNotification.md](map/operations/Api20100401CallNotification.md) |
| `Api20100401CallRecording` | 5 | [map/operations/Api20100401CallRecording.md](map/operations/Api20100401CallRecording.md) |
| `Api20100401CallTranscription` | 2 | [map/operations/Api20100401CallTranscription.md](map/operations/Api20100401CallTranscription.md) |
| `Api20100401Conference` | 3 | [map/operations/Api20100401Conference.md](map/operations/Api20100401Conference.md) |
| `Api20100401ConferenceRecording` | 4 | [map/operations/Api20100401ConferenceRecording.md](map/operations/Api20100401ConferenceRecording.md) |
| `Api20100401ConnectApp` | 4 | [map/operations/Api20100401ConnectApp.md](map/operations/Api20100401ConnectApp.md) |
| `Api20100401Credential` | 5 | [map/operations/Api20100401Credential.md](map/operations/Api20100401Credential.md) |
| `Api20100401CredentialList` | 5 | [map/operations/Api20100401CredentialList.md](map/operations/Api20100401CredentialList.md) |
| `Api20100401CredentialListMapping` | 4 | [map/operations/Api20100401CredentialListMapping.md](map/operations/Api20100401CredentialListMapping.md) |
| `Api20100401Daily` | 1 | [map/operations/Api20100401Daily.md](map/operations/Api20100401Daily.md) |
| `Api20100401Data` | 1 | [map/operations/Api20100401Data.md](map/operations/Api20100401Data.md) |
| `Api20100401DependentPhoneNumber` | 1 | [map/operations/Api20100401DependentPhoneNumber.md](map/operations/Api20100401DependentPhoneNumber.md) |
| `Api20100401Domain` | 5 | [map/operations/Api20100401Domain.md](map/operations/Api20100401Domain.md) |
| `Api20100401Event` | 1 | [map/operations/Api20100401Event.md](map/operations/Api20100401Event.md) |
| `Api20100401Feedback` | 1 | [map/operations/Api20100401Feedback.md](map/operations/Api20100401Feedback.md) |
| `Api20100401IncomingPhoneNumber` | 5 | [map/operations/Api20100401IncomingPhoneNumber.md](map/operations/Api20100401IncomingPhoneNumber.md) |
| `Api20100401IncomingPhoneNumberLocal` | 2 | [map/operations/Api20100401IncomingPhoneNumberLocal.md](map/operations/Api20100401IncomingPhoneNumberLocal.md) |
| `Api20100401IncomingPhoneNumberMobile` | 2 | [map/operations/Api20100401IncomingPhoneNumberMobile.md](map/operations/Api20100401IncomingPhoneNumberMobile.md) |
| `Api20100401IncomingPhoneNumberTollFree` | 2 | [map/operations/Api20100401IncomingPhoneNumberTollFree.md](map/operations/Api20100401IncomingPhoneNumberTollFree.md) |
| `Api20100401IpAccessControlList` | 5 | [map/operations/Api20100401IpAccessControlList.md](map/operations/Api20100401IpAccessControlList.md) |
| `Api20100401IpAccessControlListMapping` | 4 | [map/operations/Api20100401IpAccessControlListMapping.md](map/operations/Api20100401IpAccessControlListMapping.md) |
| `Api20100401Key` | 4 | [map/operations/Api20100401Key.md](map/operations/Api20100401Key.md) |
| `Api20100401LastMonth` | 1 | [map/operations/Api20100401LastMonth.md](map/operations/Api20100401LastMonth.md) |
| `Api20100401Local` | 1 | [map/operations/Api20100401Local.md](map/operations/Api20100401Local.md) |
| `Api20100401MachineToMachine` | 1 | [map/operations/Api20100401MachineToMachine.md](map/operations/Api20100401MachineToMachine.md) |
| `Api20100401Media` | 1 | [map/operations/Api20100401Media.md](map/operations/Api20100401Media.md) |
| `Api20100401MediaInstance` | 2 | [map/operations/Api20100401MediaInstance.md](map/operations/Api20100401MediaInstance.md) |
| `Api20100401Member` | 3 | [map/operations/Api20100401Member.md](map/operations/Api20100401Member.md) |
| `Api20100401Message` | 5 | [map/operations/Api20100401Message.md](map/operations/Api20100401Message.md) |
| `Api20100401Mobile` | 1 | [map/operations/Api20100401Mobile.md](map/operations/Api20100401Mobile.md) |
| `Api20100401Monthly` | 1 | [map/operations/Api20100401Monthly.md](map/operations/Api20100401Monthly.md) |
| `Api20100401National` | 1 | [map/operations/Api20100401National.md](map/operations/Api20100401National.md) |
| `Api20100401NewKey` | 1 | [map/operations/Api20100401NewKey.md](map/operations/Api20100401NewKey.md) |
| `Api20100401NewSigningKey` | 1 | [map/operations/Api20100401NewSigningKey.md](map/operations/Api20100401NewSigningKey.md) |
| `Api20100401Notification` | 2 | [map/operations/Api20100401Notification.md](map/operations/Api20100401Notification.md) |
| `Api20100401OutgoingCallerId` | 4 | [map/operations/Api20100401OutgoingCallerId.md](map/operations/Api20100401OutgoingCallerId.md) |
| `Api20100401Participant` | 5 | [map/operations/Api20100401Participant.md](map/operations/Api20100401Participant.md) |
| `Api20100401Payload` | 3 | [map/operations/Api20100401Payload.md](map/operations/Api20100401Payload.md) |
| `Api20100401Payment` | 2 | [map/operations/Api20100401Payment.md](map/operations/Api20100401Payment.md) |
| `Api20100401Queue` | 5 | [map/operations/Api20100401Queue.md](map/operations/Api20100401Queue.md) |
| `Api20100401Record` | 1 | [map/operations/Api20100401Record.md](map/operations/Api20100401Record.md) |
| `Api20100401Recording` | 3 | [map/operations/Api20100401Recording.md](map/operations/Api20100401Recording.md) |
| `Api20100401RecordingTranscription` | 3 | [map/operations/Api20100401RecordingTranscription.md](map/operations/Api20100401RecordingTranscription.md) |
| `Api20100401SharedCost` | 1 | [map/operations/Api20100401SharedCost.md](map/operations/Api20100401SharedCost.md) |
| `Api20100401ShortCode` | 3 | [map/operations/Api20100401ShortCode.md](map/operations/Api20100401ShortCode.md) |
| `Api20100401SigningKey` | 4 | [map/operations/Api20100401SigningKey.md](map/operations/Api20100401SigningKey.md) |
| `Api20100401SipIpAddress` | 5 | [map/operations/Api20100401SipIpAddress.md](map/operations/Api20100401SipIpAddress.md) |
| `Api20100401Siprec` | 2 | [map/operations/Api20100401Siprec.md](map/operations/Api20100401Siprec.md) |
| `Api20100401Stream` | 2 | [map/operations/Api20100401Stream.md](map/operations/Api20100401Stream.md) |
| `Api20100401ThisMonth` | 1 | [map/operations/Api20100401ThisMonth.md](map/operations/Api20100401ThisMonth.md) |
| `Api20100401Today` | 1 | [map/operations/Api20100401Today.md](map/operations/Api20100401Today.md) |
| `Api20100401Token` | 1 | [map/operations/Api20100401Token.md](map/operations/Api20100401Token.md) |
| `Api20100401TollFree` | 1 | [map/operations/Api20100401TollFree.md](map/operations/Api20100401TollFree.md) |
| `Api20100401Transcription` | 3 | [map/operations/Api20100401Transcription.md](map/operations/Api20100401Transcription.md) |
| `Api20100401Trigger` | 5 | [map/operations/Api20100401Trigger.md](map/operations/Api20100401Trigger.md) |
| `Api20100401UserDefinedMessage` | 1 | [map/operations/Api20100401UserDefinedMessage.md](map/operations/Api20100401UserDefinedMessage.md) |
| `Api20100401UserDefinedMessageSubscription` | 2 | [map/operations/Api20100401UserDefinedMessageSubscription.md](map/operations/Api20100401UserDefinedMessageSubscription.md) |
| `Api20100401ValidationRequest` | 1 | [map/operations/Api20100401ValidationRequest.md](map/operations/Api20100401ValidationRequest.md) |
| `Api20100401Voip` | 1 | [map/operations/Api20100401Voip.md](map/operations/Api20100401Voip.md) |
| `Api20100401Yearly` | 1 | [map/operations/Api20100401Yearly.md](map/operations/Api20100401Yearly.md) |
| `Api20100401Yesterday` | 1 | [map/operations/Api20100401Yesterday.md](map/operations/Api20100401Yesterday.md) |
| `ContentV2Content` | 1 | [map/operations/ContentV2Content.md](map/operations/ContentV2Content.md) |
| `ContentV2ContentAndApprovals` | 1 | [map/operations/ContentV2ContentAndApprovals.md](map/operations/ContentV2ContentAndApprovals.md) |
| `Contentv1ApprovalCreate` | 1 | [map/operations/Contentv1ApprovalCreate.md](map/operations/Contentv1ApprovalCreate.md) |
| `Contentv1ApprovalFetch` | 1 | [map/operations/Contentv1ApprovalFetch.md](map/operations/Contentv1ApprovalFetch.md) |
| `Contentv1ContentApi` | 5 | [map/operations/Contentv1ContentApi.md](map/operations/Contentv1ContentApi.md) |
| `Contentv1ContentAndApprovalsApi` | 1 | [map/operations/Contentv1ContentAndApprovalsApi.md](map/operations/Contentv1ContentAndApprovalsApi.md) |
| `Contentv1LegacyContentApi` | 1 | [map/operations/Contentv1LegacyContentApi.md](map/operations/Contentv1LegacyContentApi.md) |
| `ConversationsV1AddressConfiguration` | 5 | [map/operations/ConversationsV1AddressConfiguration.md](map/operations/ConversationsV1AddressConfiguration.md) |
| `ConversationsV1Binding` | 3 | [map/operations/ConversationsV1Binding.md](map/operations/ConversationsV1Binding.md) |
| `ConversationsV1ConfigurationApi` | 4 | [map/operations/ConversationsV1ConfigurationApi.md](map/operations/ConversationsV1ConfigurationApi.md) |
| `ConversationsV1ConversationApi` | 10 | [map/operations/ConversationsV1ConversationApi.md](map/operations/ConversationsV1ConversationApi.md) |
| `ConversationsV1ConversationWithParticipantsApi` | 2 | [map/operations/ConversationsV1ConversationWithParticipantsApi.md](map/operations/ConversationsV1ConversationWithParticipantsApi.md) |
| `ConversationsV1CredentialApi` | 5 | [map/operations/ConversationsV1CredentialApi.md](map/operations/ConversationsV1CredentialApi.md) |
| `ConversationsV1DeliveryReceipt` | 4 | [map/operations/ConversationsV1DeliveryReceipt.md](map/operations/ConversationsV1DeliveryReceipt.md) |
| `ConversationsV1Message` | 10 | [map/operations/ConversationsV1Message.md](map/operations/ConversationsV1Message.md) |
| `ConversationsV1Notification` | 2 | [map/operations/ConversationsV1Notification.md](map/operations/ConversationsV1Notification.md) |
| `ConversationsV1Participant` | 10 | [map/operations/ConversationsV1Participant.md](map/operations/ConversationsV1Participant.md) |
| `ConversationsV1ParticipantConversationApi` | 2 | [map/operations/ConversationsV1ParticipantConversationApi.md](map/operations/ConversationsV1ParticipantConversationApi.md) |
| `ConversationsV1RoleApi` | 10 | [map/operations/ConversationsV1RoleApi.md](map/operations/ConversationsV1RoleApi.md) |
| `ConversationsV1ServiceApi` | 4 | [map/operations/ConversationsV1ServiceApi.md](map/operations/ConversationsV1ServiceApi.md) |
| `ConversationsV1UserApi` | 10 | [map/operations/ConversationsV1UserApi.md](map/operations/ConversationsV1UserApi.md) |
| `ConversationsV1UserConversation` | 8 | [map/operations/ConversationsV1UserConversation.md](map/operations/ConversationsV1UserConversation.md) |
| `ConversationsV1Webhook` | 14 | [map/operations/ConversationsV1Webhook.md](map/operations/ConversationsV1Webhook.md) |
| `ConversationsV2ActionApi` | 2 | [map/operations/ConversationsV2ActionApi.md](map/operations/ConversationsV2ActionApi.md) |
| `ConversationsV2CommunicationApi` | 3 | [map/operations/ConversationsV2CommunicationApi.md](map/operations/ConversationsV2CommunicationApi.md) |
| `ConversationsV2ConfigurationApi` | 5 | [map/operations/ConversationsV2ConfigurationApi.md](map/operations/ConversationsV2ConfigurationApi.md) |
| `ConversationsV2ConversationApi` | 6 | [map/operations/ConversationsV2ConversationApi.md](map/operations/ConversationsV2ConversationApi.md) |
| `ConversationsV2Operation` | 1 | [map/operations/ConversationsV2Operation.md](map/operations/ConversationsV2Operation.md) |
| `ConversationsV2ParticipantApi` | 4 | [map/operations/ConversationsV2ParticipantApi.md](map/operations/ConversationsV2ParticipantApi.md) |
| `FlexV1Assessments` | 3 | [map/operations/FlexV1Assessments.md](map/operations/FlexV1Assessments.md) |
| `FlexV1ChannelApi` | 4 | [map/operations/FlexV1ChannelApi.md](map/operations/FlexV1ChannelApi.md) |
| `FlexV1ConfigurationApi` | 2 | [map/operations/FlexV1ConfigurationApi.md](map/operations/FlexV1ConfigurationApi.md) |
| `FlexV1ConfiguredPlugin` | 2 | [map/operations/FlexV1ConfiguredPlugin.md](map/operations/FlexV1ConfiguredPlugin.md) |
| `FlexV1FlexFlowApi` | 5 | [map/operations/FlexV1FlexFlowApi.md](map/operations/FlexV1FlexFlowApi.md) |
| `FlexV1InsightsAssessmentsCommentApi` | 2 | [map/operations/FlexV1InsightsAssessmentsCommentApi.md](map/operations/FlexV1InsightsAssessmentsCommentApi.md) |
| `FlexV1InsightsConversationsApi` | 1 | [map/operations/FlexV1InsightsConversationsApi.md](map/operations/FlexV1InsightsConversationsApi.md) |
| `FlexV1InsightsQuestionnairesApi` | 5 | [map/operations/FlexV1InsightsQuestionnairesApi.md](map/operations/FlexV1InsightsQuestionnairesApi.md) |
| `FlexV1InsightsQuestionnairesCategoryApi` | 4 | [map/operations/FlexV1InsightsQuestionnairesCategoryApi.md](map/operations/FlexV1InsightsQuestionnairesCategoryApi.md) |
| `FlexV1InsightsQuestionnairesQuestionApi` | 4 | [map/operations/FlexV1InsightsQuestionnairesQuestionApi.md](map/operations/FlexV1InsightsQuestionnairesQuestionApi.md) |
| `FlexV1InsightsSegmentsApi` | 1 | [map/operations/FlexV1InsightsSegmentsApi.md](map/operations/FlexV1InsightsSegmentsApi.md) |
| `FlexV1InsightsSessionApi` | 1 | [map/operations/FlexV1InsightsSessionApi.md](map/operations/FlexV1InsightsSessionApi.md) |
| `FlexV1InsightsSettingsAnswerSetsApi` | 1 | [map/operations/FlexV1InsightsSettingsAnswerSetsApi.md](map/operations/FlexV1InsightsSettingsAnswerSetsApi.md) |
| `FlexV1InsightsSettingsCommentApi` | 1 | [map/operations/FlexV1InsightsSettingsCommentApi.md](map/operations/FlexV1InsightsSettingsCommentApi.md) |
| `FlexV1InsightsUserRolesApi` | 1 | [map/operations/FlexV1InsightsUserRolesApi.md](map/operations/FlexV1InsightsUserRolesApi.md) |
| `FlexV1InteractionApi` | 3 | [map/operations/FlexV1InteractionApi.md](map/operations/FlexV1InteractionApi.md) |
| `FlexV1InteractionChannel` | 3 | [map/operations/FlexV1InteractionChannel.md](map/operations/FlexV1InteractionChannel.md) |
| `FlexV1InteractionChannelInvite` | 2 | [map/operations/FlexV1InteractionChannelInvite.md](map/operations/FlexV1InteractionChannelInvite.md) |
| `FlexV1InteractionChannelParticipant` | 3 | [map/operations/FlexV1InteractionChannelParticipant.md](map/operations/FlexV1InteractionChannelParticipant.md) |
| `FlexV1InteractionTransfer` | 3 | [map/operations/FlexV1InteractionTransfer.md](map/operations/FlexV1InteractionTransfer.md) |
| `FlexV1PluginApi` | 4 | [map/operations/FlexV1PluginApi.md](map/operations/FlexV1PluginApi.md) |
| `FlexV1PluginArchiveApi` | 1 | [map/operations/FlexV1PluginArchiveApi.md](map/operations/FlexV1PluginArchiveApi.md) |
| `FlexV1PluginConfigurationApi` | 3 | [map/operations/FlexV1PluginConfigurationApi.md](map/operations/FlexV1PluginConfigurationApi.md) |
| `FlexV1PluginConfigurationArchiveApi` | 1 | [map/operations/FlexV1PluginConfigurationArchiveApi.md](map/operations/FlexV1PluginConfigurationArchiveApi.md) |
| `FlexV1PluginReleaseApi` | 3 | [map/operations/FlexV1PluginReleaseApi.md](map/operations/FlexV1PluginReleaseApi.md) |
| `FlexV1PluginVersionArchiveApi` | 1 | [map/operations/FlexV1PluginVersionArchiveApi.md](map/operations/FlexV1PluginVersionArchiveApi.md) |
| `FlexV1PluginVersions` | 3 | [map/operations/FlexV1PluginVersions.md](map/operations/FlexV1PluginVersions.md) |
| `FlexV1ProvisioningStatusApi` | 1 | [map/operations/FlexV1ProvisioningStatusApi.md](map/operations/FlexV1ProvisioningStatusApi.md) |
| `FlexV1WebChannelApi` | 5 | [map/operations/FlexV1WebChannelApi.md](map/operations/FlexV1WebChannelApi.md) |
| `FlexV2FlexUserApi` | 2 | [map/operations/FlexV2FlexUserApi.md](map/operations/FlexV2FlexUserApi.md) |
| `FlexV2WebChannels` | 1 | [map/operations/FlexV2WebChannels.md](map/operations/FlexV2WebChannels.md) |
| `InsightsV1Annotation` | 2 | [map/operations/InsightsV1Annotation.md](map/operations/InsightsV1Annotation.md) |
| `InsightsV1CallApi` | 1 | [map/operations/InsightsV1CallApi.md](map/operations/InsightsV1CallApi.md) |
| `InsightsV1CallSummariesApi` | 1 | [map/operations/InsightsV1CallSummariesApi.md](map/operations/InsightsV1CallSummariesApi.md) |
| `InsightsV1CallSummaryApi` | 1 | [map/operations/InsightsV1CallSummaryApi.md](map/operations/InsightsV1CallSummaryApi.md) |
| `InsightsV1ConferenceApi` | 2 | [map/operations/InsightsV1ConferenceApi.md](map/operations/InsightsV1ConferenceApi.md) |
| `InsightsV1ConferenceParticipant` | 2 | [map/operations/InsightsV1ConferenceParticipant.md](map/operations/InsightsV1ConferenceParticipant.md) |
| `InsightsV1CreateAccountReport` | 1 | [map/operations/InsightsV1CreateAccountReport.md](map/operations/InsightsV1CreateAccountReport.md) |
| `InsightsV1CreateInboundPhoneNumbersReport` | 1 | [map/operations/InsightsV1CreateInboundPhoneNumbersReport.md](map/operations/InsightsV1CreateInboundPhoneNumbersReport.md) |
| `InsightsV1CreateOutboundPhoneNumbersReport` | 1 | [map/operations/InsightsV1CreateOutboundPhoneNumbersReport.md](map/operations/InsightsV1CreateOutboundPhoneNumbersReport.md) |
| `InsightsV1Event` | 1 | [map/operations/InsightsV1Event.md](map/operations/InsightsV1Event.md) |
| `InsightsV1GetAccountReport` | 1 | [map/operations/InsightsV1GetAccountReport.md](map/operations/InsightsV1GetAccountReport.md) |
| `InsightsV1GetInboundPhoneNumbersReport` | 1 | [map/operations/InsightsV1GetInboundPhoneNumbersReport.md](map/operations/InsightsV1GetInboundPhoneNumbersReport.md) |
| `InsightsV1GetOutboundPhoneNumbersReport` | 1 | [map/operations/InsightsV1GetOutboundPhoneNumbersReport.md](map/operations/InsightsV1GetOutboundPhoneNumbersReport.md) |
| `InsightsV1Metric` | 1 | [map/operations/InsightsV1Metric.md](map/operations/InsightsV1Metric.md) |
| `InsightsV1Participant` | 2 | [map/operations/InsightsV1Participant.md](map/operations/InsightsV1Participant.md) |
| `InsightsV1Room` | 2 | [map/operations/InsightsV1Room.md](map/operations/InsightsV1Room.md) |
| `InsightsV1Setting` | 2 | [map/operations/InsightsV1Setting.md](map/operations/InsightsV1Setting.md) |
| `LookupsV1PhoneNumberApi` | 1 | [map/operations/LookupsV1PhoneNumberApi.md](map/operations/LookupsV1PhoneNumberApi.md) |
| `LookupsV2PhoneNumber` | 1 | [map/operations/LookupsV2PhoneNumber.md](map/operations/LookupsV2PhoneNumber.md) |
| `MessagingV1AlphaSender` | 4 | [map/operations/MessagingV1AlphaSender.md](map/operations/MessagingV1AlphaSender.md) |
| `MessagingV1BrandRegistration` | 4 | [map/operations/MessagingV1BrandRegistration.md](map/operations/MessagingV1BrandRegistration.md) |
| `MessagingV1BrandRegistrationOtp` | 1 | [map/operations/MessagingV1BrandRegistrationOtp.md](map/operations/MessagingV1BrandRegistrationOtp.md) |
| `MessagingV1BrandVetting` | 3 | [map/operations/MessagingV1BrandVetting.md](map/operations/MessagingV1BrandVetting.md) |
| `MessagingV1ChannelSender` | 4 | [map/operations/MessagingV1ChannelSender.md](map/operations/MessagingV1ChannelSender.md) |
| `MessagingV1Deactivations` | 1 | [map/operations/MessagingV1Deactivations.md](map/operations/MessagingV1Deactivations.md) |
| `MessagingV1DestinationAlphaSender` | 4 | [map/operations/MessagingV1DestinationAlphaSender.md](map/operations/MessagingV1DestinationAlphaSender.md) |
| `MessagingV1DomainCerts` | 3 | [map/operations/MessagingV1DomainCerts.md](map/operations/MessagingV1DomainCerts.md) |
| `MessagingV1DomainConfigApi` | 2 | [map/operations/MessagingV1DomainConfigApi.md](map/operations/MessagingV1DomainConfigApi.md) |
| `MessagingV1DomainConfigMessagingServiceApi` | 1 | [map/operations/MessagingV1DomainConfigMessagingServiceApi.md](map/operations/MessagingV1DomainConfigMessagingServiceApi.md) |
| `MessagingV1DomainValidateDns` | 1 | [map/operations/MessagingV1DomainValidateDns.md](map/operations/MessagingV1DomainValidateDns.md) |
| `MessagingV1ExternalCampaignApi` | 1 | [map/operations/MessagingV1ExternalCampaignApi.md](map/operations/MessagingV1ExternalCampaignApi.md) |
| `MessagingV1LinkshorteningMessagingServiceApi` | 2 | [map/operations/MessagingV1LinkshorteningMessagingServiceApi.md](map/operations/MessagingV1LinkshorteningMessagingServiceApi.md) |
| `MessagingV1LinkshorteningMessagingServiceDomainAssociationApi` | 1 | [map/operations/MessagingV1LinkshorteningMessagingServiceDomainAssociationApi.md](map/operations/MessagingV1LinkshorteningMessagingServiceDomainAssociationApi.md) |
| `MessagingV1PhoneNumber` | 4 | [map/operations/MessagingV1PhoneNumber.md](map/operations/MessagingV1PhoneNumber.md) |
| `MessagingV1RequestManagedCertApi` | 1 | [map/operations/MessagingV1RequestManagedCertApi.md](map/operations/MessagingV1RequestManagedCertApi.md) |
| `MessagingV1ServiceApi` | 5 | [map/operations/MessagingV1ServiceApi.md](map/operations/MessagingV1ServiceApi.md) |
| `MessagingV1ShortCode` | 4 | [map/operations/MessagingV1ShortCode.md](map/operations/MessagingV1ShortCode.md) |
| `MessagingV1TollfreeVerificationApi` | 5 | [map/operations/MessagingV1TollfreeVerificationApi.md](map/operations/MessagingV1TollfreeVerificationApi.md) |
| `MessagingV1UsAppToPerson` | 5 | [map/operations/MessagingV1UsAppToPerson.md](map/operations/MessagingV1UsAppToPerson.md) |
| `MessagingV1UsAppToPersonUsecase` | 1 | [map/operations/MessagingV1UsAppToPersonUsecase.md](map/operations/MessagingV1UsAppToPersonUsecase.md) |
| `MessagingV1UsecaseApi` | 1 | [map/operations/MessagingV1UsecaseApi.md](map/operations/MessagingV1UsecaseApi.md) |
| `MessagingV2ChannelsSender` | 5 | [map/operations/MessagingV2ChannelsSender.md](map/operations/MessagingV2ChannelsSender.md) |
| `MessagingV2DomainCerts` | 1 | [map/operations/MessagingV2DomainCerts.md](map/operations/MessagingV2DomainCerts.md) |
| `MessagingV2TypingIndicator` | 1 | [map/operations/MessagingV2TypingIndicator.md](map/operations/MessagingV2TypingIndicator.md) |
| `MessagingV3TypingIndicator` | 1 | [map/operations/MessagingV3TypingIndicator.md](map/operations/MessagingV3TypingIndicator.md) |
| `NumbersV1BulkEligibilityApi` | 2 | [map/operations/NumbersV1BulkEligibilityApi.md](map/operations/NumbersV1BulkEligibilityApi.md) |
| `NumbersV1EligibilityApi` | 1 | [map/operations/NumbersV1EligibilityApi.md](map/operations/NumbersV1EligibilityApi.md) |
| `NumbersV1PortingPortInApi` | 4 | [map/operations/NumbersV1PortingPortInApi.md](map/operations/NumbersV1PortingPortInApi.md) |
| `NumbersV1PortingPortInPhoneNumberApi` | 2 | [map/operations/NumbersV1PortingPortInPhoneNumberApi.md](map/operations/NumbersV1PortingPortInPhoneNumberApi.md) |
| `NumbersV1PortingPortabilityApi` | 1 | [map/operations/NumbersV1PortingPortabilityApi.md](map/operations/NumbersV1PortingPortabilityApi.md) |
| `NumbersV1PortingWebhookConfigurationApi` | 1 | [map/operations/NumbersV1PortingWebhookConfigurationApi.md](map/operations/NumbersV1PortingWebhookConfigurationApi.md) |
| `NumbersV1PortingWebhookConfigurationDeleteApi` | 1 | [map/operations/NumbersV1PortingWebhookConfigurationDeleteApi.md](map/operations/NumbersV1PortingWebhookConfigurationDeleteApi.md) |
| `NumbersV1PortingWebhookConfigurationFetchApi` | 1 | [map/operations/NumbersV1PortingWebhookConfigurationFetchApi.md](map/operations/NumbersV1PortingWebhookConfigurationFetchApi.md) |
| `NumbersV1SenderIdRegistration` | 1 | [map/operations/NumbersV1SenderIdRegistration.md](map/operations/NumbersV1SenderIdRegistration.md) |
| `NumbersV1SenderIdRegistrationEmbeddedSession` | 1 | [map/operations/NumbersV1SenderIdRegistrationEmbeddedSession.md](map/operations/NumbersV1SenderIdRegistrationEmbeddedSession.md) |
| `NumbersV1SigningRequestConfigurationApi` | 2 | [map/operations/NumbersV1SigningRequestConfigurationApi.md](map/operations/NumbersV1SigningRequestConfigurationApi.md) |
| `NumbersV2AuthorizationDocumentApi` | 4 | [map/operations/NumbersV2AuthorizationDocumentApi.md](map/operations/NumbersV2AuthorizationDocumentApi.md) |
| `NumbersV2BulkHostedNumberOrderApi` | 2 | [map/operations/NumbersV2BulkHostedNumberOrderApi.md](map/operations/NumbersV2BulkHostedNumberOrderApi.md) |
| `NumbersV2Bundle` | 5 | [map/operations/NumbersV2Bundle.md](map/operations/NumbersV2Bundle.md) |
| `NumbersV2BundleCloneApi` | 1 | [map/operations/NumbersV2BundleCloneApi.md](map/operations/NumbersV2BundleCloneApi.md) |
| `NumbersV2BundleCopy` | 2 | [map/operations/NumbersV2BundleCopy.md](map/operations/NumbersV2BundleCopy.md) |
| `NumbersV2DependentHostedNumberOrder` | 1 | [map/operations/NumbersV2DependentHostedNumberOrder.md](map/operations/NumbersV2DependentHostedNumberOrder.md) |
| `NumbersV2EndUser` | 5 | [map/operations/NumbersV2EndUser.md](map/operations/NumbersV2EndUser.md) |
| `NumbersV2EndUserType` | 2 | [map/operations/NumbersV2EndUserType.md](map/operations/NumbersV2EndUserType.md) |
| `NumbersV2Evaluation` | 3 | [map/operations/NumbersV2Evaluation.md](map/operations/NumbersV2Evaluation.md) |
| `NumbersV2HostedNumberOrderApi` | 5 | [map/operations/NumbersV2HostedNumberOrderApi.md](map/operations/NumbersV2HostedNumberOrderApi.md) |
| `NumbersV2ItemAssignment` | 4 | [map/operations/NumbersV2ItemAssignment.md](map/operations/NumbersV2ItemAssignment.md) |
| `NumbersV2Regulation` | 2 | [map/operations/NumbersV2Regulation.md](map/operations/NumbersV2Regulation.md) |
| `NumbersV2ReplaceItems` | 1 | [map/operations/NumbersV2ReplaceItems.md](map/operations/NumbersV2ReplaceItems.md) |
| `NumbersV2SupportingDocument` | 5 | [map/operations/NumbersV2SupportingDocument.md](map/operations/NumbersV2SupportingDocument.md) |
| `NumbersV2SupportingDocumentType` | 2 | [map/operations/NumbersV2SupportingDocumentType.md](map/operations/NumbersV2SupportingDocumentType.md) |
| `NumbersV3HostedNumbersHostedNumberOrderApi` | 1 | [map/operations/NumbersV3HostedNumbersHostedNumberOrderApi.md](map/operations/NumbersV3HostedNumbersHostedNumberOrderApi.md) |
| `ProxyV1Interaction` | 3 | [map/operations/ProxyV1Interaction.md](map/operations/ProxyV1Interaction.md) |
| `ProxyV1MessageInteraction` | 3 | [map/operations/ProxyV1MessageInteraction.md](map/operations/ProxyV1MessageInteraction.md) |
| `ProxyV1Participant` | 4 | [map/operations/ProxyV1Participant.md](map/operations/ProxyV1Participant.md) |
| `ProxyV1PhoneNumber` | 5 | [map/operations/ProxyV1PhoneNumber.md](map/operations/ProxyV1PhoneNumber.md) |
| `ProxyV1ServiceApi` | 5 | [map/operations/ProxyV1ServiceApi.md](map/operations/ProxyV1ServiceApi.md) |
| `ProxyV1Session` | 5 | [map/operations/ProxyV1Session.md](map/operations/ProxyV1Session.md) |
| `StudioV1Engagement` | 4 | [map/operations/StudioV1Engagement.md](map/operations/StudioV1Engagement.md) |
| `StudioV1EngagementContext` | 1 | [map/operations/StudioV1EngagementContext.md](map/operations/StudioV1EngagementContext.md) |
| `StudioV1Execution` | 5 | [map/operations/StudioV1Execution.md](map/operations/StudioV1Execution.md) |
| `StudioV1ExecutionContext` | 1 | [map/operations/StudioV1ExecutionContext.md](map/operations/StudioV1ExecutionContext.md) |
| `StudioV1ExecutionStep` | 2 | [map/operations/StudioV1ExecutionStep.md](map/operations/StudioV1ExecutionStep.md) |
| `StudioV1ExecutionStepContext` | 1 | [map/operations/StudioV1ExecutionStepContext.md](map/operations/StudioV1ExecutionStepContext.md) |
| `StudioV1FlowApi` | 3 | [map/operations/StudioV1FlowApi.md](map/operations/StudioV1FlowApi.md) |
| `StudioV1Step` | 2 | [map/operations/StudioV1Step.md](map/operations/StudioV1Step.md) |
| `StudioV1StepContext` | 1 | [map/operations/StudioV1StepContext.md](map/operations/StudioV1StepContext.md) |
| `StudioV2Execution` | 5 | [map/operations/StudioV2Execution.md](map/operations/StudioV2Execution.md) |
| `StudioV2ExecutionContext` | 1 | [map/operations/StudioV2ExecutionContext.md](map/operations/StudioV2ExecutionContext.md) |
| `StudioV2ExecutionStep` | 2 | [map/operations/StudioV2ExecutionStep.md](map/operations/StudioV2ExecutionStep.md) |
| `StudioV2ExecutionStepContext` | 1 | [map/operations/StudioV2ExecutionStepContext.md](map/operations/StudioV2ExecutionStepContext.md) |
| `StudioV2FlowApi` | 5 | [map/operations/StudioV2FlowApi.md](map/operations/StudioV2FlowApi.md) |
| `StudioV2FlowRevision` | 2 | [map/operations/StudioV2FlowRevision.md](map/operations/StudioV2FlowRevision.md) |
| `StudioV2FlowTestUserApi` | 2 | [map/operations/StudioV2FlowTestUserApi.md](map/operations/StudioV2FlowTestUserApi.md) |
| `StudioV2FlowValidateApi` | 1 | [map/operations/StudioV2FlowValidateApi.md](map/operations/StudioV2FlowValidateApi.md) |
| `SyncV1Document` | 5 | [map/operations/SyncV1Document.md](map/operations/SyncV1Document.md) |
| `SyncV1DocumentPermission` | 4 | [map/operations/SyncV1DocumentPermission.md](map/operations/SyncV1DocumentPermission.md) |
| `SyncV1ServiceApi` | 5 | [map/operations/SyncV1ServiceApi.md](map/operations/SyncV1ServiceApi.md) |
| `SyncV1StreamMessage` | 1 | [map/operations/SyncV1StreamMessage.md](map/operations/SyncV1StreamMessage.md) |
| `SyncV1SyncList` | 5 | [map/operations/SyncV1SyncList.md](map/operations/SyncV1SyncList.md) |
| `SyncV1SyncListItem` | 5 | [map/operations/SyncV1SyncListItem.md](map/operations/SyncV1SyncListItem.md) |
| `SyncV1SyncListPermission` | 4 | [map/operations/SyncV1SyncListPermission.md](map/operations/SyncV1SyncListPermission.md) |
| `SyncV1SyncMap` | 5 | [map/operations/SyncV1SyncMap.md](map/operations/SyncV1SyncMap.md) |
| `SyncV1SyncMapItem` | 5 | [map/operations/SyncV1SyncMapItem.md](map/operations/SyncV1SyncMapItem.md) |
| `SyncV1SyncMapPermission` | 4 | [map/operations/SyncV1SyncMapPermission.md](map/operations/SyncV1SyncMapPermission.md) |
| `SyncV1SyncStream` | 5 | [map/operations/SyncV1SyncStream.md](map/operations/SyncV1SyncStream.md) |
| `TaskrouterV1Activity` | 5 | [map/operations/TaskrouterV1Activity.md](map/operations/TaskrouterV1Activity.md) |
| `TaskrouterV1Event` | 2 | [map/operations/TaskrouterV1Event.md](map/operations/TaskrouterV1Event.md) |
| `TaskrouterV1Task` | 5 | [map/operations/TaskrouterV1Task.md](map/operations/TaskrouterV1Task.md) |
| `TaskrouterV1TaskChannel` | 5 | [map/operations/TaskrouterV1TaskChannel.md](map/operations/TaskrouterV1TaskChannel.md) |
| `TaskrouterV1TaskQueue` | 5 | [map/operations/TaskrouterV1TaskQueue.md](map/operations/TaskrouterV1TaskQueue.md) |
| `TaskrouterV1TaskQueueBulkRealTimeStatistics` | 1 | [map/operations/TaskrouterV1TaskQueueBulkRealTimeStatistics.md](map/operations/TaskrouterV1TaskQueueBulkRealTimeStatistics.md) |
| `TaskrouterV1TaskQueueCumulativeStatistics` | 1 | [map/operations/TaskrouterV1TaskQueueCumulativeStatistics.md](map/operations/TaskrouterV1TaskQueueCumulativeStatistics.md) |
| `TaskrouterV1TaskQueueRealTimeStatistics` | 1 | [map/operations/TaskrouterV1TaskQueueRealTimeStatistics.md](map/operations/TaskrouterV1TaskQueueRealTimeStatistics.md) |
| `TaskrouterV1TaskQueueStatistics` | 1 | [map/operations/TaskrouterV1TaskQueueStatistics.md](map/operations/TaskrouterV1TaskQueueStatistics.md) |
| `TaskrouterV1TaskQueuesStatistics` | 1 | [map/operations/TaskrouterV1TaskQueuesStatistics.md](map/operations/TaskrouterV1TaskQueuesStatistics.md) |
| `TaskrouterV1TaskReservation` | 3 | [map/operations/TaskrouterV1TaskReservation.md](map/operations/TaskrouterV1TaskReservation.md) |
| `TaskrouterV1Worker` | 5 | [map/operations/TaskrouterV1Worker.md](map/operations/TaskrouterV1Worker.md) |
| `TaskrouterV1WorkerChannel` | 3 | [map/operations/TaskrouterV1WorkerChannel.md](map/operations/TaskrouterV1WorkerChannel.md) |
| `TaskrouterV1WorkerReservation` | 3 | [map/operations/TaskrouterV1WorkerReservation.md](map/operations/TaskrouterV1WorkerReservation.md) |
| `TaskrouterV1WorkerStatistics` | 1 | [map/operations/TaskrouterV1WorkerStatistics.md](map/operations/TaskrouterV1WorkerStatistics.md) |
| `TaskrouterV1WorkersCumulativeStatistics` | 1 | [map/operations/TaskrouterV1WorkersCumulativeStatistics.md](map/operations/TaskrouterV1WorkersCumulativeStatistics.md) |
| `TaskrouterV1WorkersRealTimeStatistics` | 1 | [map/operations/TaskrouterV1WorkersRealTimeStatistics.md](map/operations/TaskrouterV1WorkersRealTimeStatistics.md) |
| `TaskrouterV1WorkersStatistics` | 1 | [map/operations/TaskrouterV1WorkersStatistics.md](map/operations/TaskrouterV1WorkersStatistics.md) |
| `TaskrouterV1Workflow` | 5 | [map/operations/TaskrouterV1Workflow.md](map/operations/TaskrouterV1Workflow.md) |
| `TaskrouterV1WorkflowCumulativeStatistics` | 1 | [map/operations/TaskrouterV1WorkflowCumulativeStatistics.md](map/operations/TaskrouterV1WorkflowCumulativeStatistics.md) |
| `TaskrouterV1WorkflowRealTimeStatistics` | 1 | [map/operations/TaskrouterV1WorkflowRealTimeStatistics.md](map/operations/TaskrouterV1WorkflowRealTimeStatistics.md) |
| `TaskrouterV1WorkflowStatistics` | 1 | [map/operations/TaskrouterV1WorkflowStatistics.md](map/operations/TaskrouterV1WorkflowStatistics.md) |
| `TaskrouterV1WorkspaceApi` | 5 | [map/operations/TaskrouterV1WorkspaceApi.md](map/operations/TaskrouterV1WorkspaceApi.md) |
| `TaskrouterV1WorkspaceCumulativeStatistics` | 1 | [map/operations/TaskrouterV1WorkspaceCumulativeStatistics.md](map/operations/TaskrouterV1WorkspaceCumulativeStatistics.md) |
| `TaskrouterV1WorkspaceRealTimeStatistics` | 1 | [map/operations/TaskrouterV1WorkspaceRealTimeStatistics.md](map/operations/TaskrouterV1WorkspaceRealTimeStatistics.md) |
| `TaskrouterV1WorkspaceStatistics` | 1 | [map/operations/TaskrouterV1WorkspaceStatistics.md](map/operations/TaskrouterV1WorkspaceStatistics.md) |
| `TrusthubV1ComplianceInquiries` | 2 | [map/operations/TrusthubV1ComplianceInquiries.md](map/operations/TrusthubV1ComplianceInquiries.md) |
| `TrusthubV1ComplianceRegistrationInquiries` | 2 | [map/operations/TrusthubV1ComplianceRegistrationInquiries.md](map/operations/TrusthubV1ComplianceRegistrationInquiries.md) |
| `TrusthubV1ComplianceTollfreeInquiries` | 1 | [map/operations/TrusthubV1ComplianceTollfreeInquiries.md](map/operations/TrusthubV1ComplianceTollfreeInquiries.md) |
| `TrusthubV1CustomerProfiles` | 5 | [map/operations/TrusthubV1CustomerProfiles.md](map/operations/TrusthubV1CustomerProfiles.md) |
| `TrusthubV1CustomerProfilesChannelEndpointAssignment` | 4 | [map/operations/TrusthubV1CustomerProfilesChannelEndpointAssignment.md](map/operations/TrusthubV1CustomerProfilesChannelEndpointAssignment.md) |
| `TrusthubV1CustomerProfilesEntityAssignments` | 4 | [map/operations/TrusthubV1CustomerProfilesEntityAssignments.md](map/operations/TrusthubV1CustomerProfilesEntityAssignments.md) |
| `TrusthubV1CustomerProfilesEvaluations` | 3 | [map/operations/TrusthubV1CustomerProfilesEvaluations.md](map/operations/TrusthubV1CustomerProfilesEvaluations.md) |
| `TrusthubV1EndUserApi` | 5 | [map/operations/TrusthubV1EndUserApi.md](map/operations/TrusthubV1EndUserApi.md) |
| `TrusthubV1EndUserType` | 2 | [map/operations/TrusthubV1EndUserType.md](map/operations/TrusthubV1EndUserType.md) |
| `TrusthubV1PoliciesApi` | 2 | [map/operations/TrusthubV1PoliciesApi.md](map/operations/TrusthubV1PoliciesApi.md) |
| `TrusthubV1SupportingDocumentApi` | 5 | [map/operations/TrusthubV1SupportingDocumentApi.md](map/operations/TrusthubV1SupportingDocumentApi.md) |
| `TrusthubV1SupportingDocumentType` | 2 | [map/operations/TrusthubV1SupportingDocumentType.md](map/operations/TrusthubV1SupportingDocumentType.md) |
| `TrusthubV1TrustProducts` | 5 | [map/operations/TrusthubV1TrustProducts.md](map/operations/TrusthubV1TrustProducts.md) |
| `TrusthubV1TrustProductsChannelEndpointAssignment` | 4 | [map/operations/TrusthubV1TrustProductsChannelEndpointAssignment.md](map/operations/TrusthubV1TrustProductsChannelEndpointAssignment.md) |
| `TrusthubV1TrustProductsEntityAssignments` | 4 | [map/operations/TrusthubV1TrustProductsEntityAssignments.md](map/operations/TrusthubV1TrustProductsEntityAssignments.md) |
| `TrusthubV1TrustProductsEvaluations` | 3 | [map/operations/TrusthubV1TrustProductsEvaluations.md](map/operations/TrusthubV1TrustProductsEvaluations.md) |
| `TwilioInsights` | 3 | [map/operations/TwilioInsights.md](map/operations/TwilioInsights.md) |
| `V2ShortCodeApplications` | 3 | [map/operations/V2ShortCodeApplications.md](map/operations/V2ShortCodeApplications.md) |
| `VerifyV2AccessToken` | 2 | [map/operations/VerifyV2AccessToken.md](map/operations/VerifyV2AccessToken.md) |
| `VerifyV2Bucket` | 5 | [map/operations/VerifyV2Bucket.md](map/operations/VerifyV2Bucket.md) |
| `VerifyV2Challenge` | 4 | [map/operations/VerifyV2Challenge.md](map/operations/VerifyV2Challenge.md) |
| `VerifyV2Entity` | 4 | [map/operations/VerifyV2Entity.md](map/operations/VerifyV2Entity.md) |
| `VerifyV2Factor` | 4 | [map/operations/VerifyV2Factor.md](map/operations/VerifyV2Factor.md) |
| `VerifyV2FormApi` | 1 | [map/operations/VerifyV2FormApi.md](map/operations/VerifyV2FormApi.md) |
| `VerifyV2MessagingConfiguration` | 5 | [map/operations/VerifyV2MessagingConfiguration.md](map/operations/VerifyV2MessagingConfiguration.md) |
| `VerifyV2NewChallenge` | 1 | [map/operations/VerifyV2NewChallenge.md](map/operations/VerifyV2NewChallenge.md) |
| `VerifyV2NewFactor` | 2 | [map/operations/VerifyV2NewFactor.md](map/operations/VerifyV2NewFactor.md) |
| `VerifyV2Notification` | 1 | [map/operations/VerifyV2Notification.md](map/operations/VerifyV2Notification.md) |
| `VerifyV2RateLimit` | 5 | [map/operations/VerifyV2RateLimit.md](map/operations/VerifyV2RateLimit.md) |
| `VerifyV2SafelistApi` | 3 | [map/operations/VerifyV2SafelistApi.md](map/operations/VerifyV2SafelistApi.md) |
| `VerifyV2ServiceApi` | 5 | [map/operations/VerifyV2ServiceApi.md](map/operations/VerifyV2ServiceApi.md) |
| `VerifyV2Template` | 1 | [map/operations/VerifyV2Template.md](map/operations/VerifyV2Template.md) |
| `VerifyV2Verification` | 3 | [map/operations/VerifyV2Verification.md](map/operations/VerifyV2Verification.md) |
| `VerifyV2VerificationAttemptApi` | 2 | [map/operations/VerifyV2VerificationAttemptApi.md](map/operations/VerifyV2VerificationAttemptApi.md) |
| `VerifyV2VerificationAttemptsSummaryApi` | 1 | [map/operations/VerifyV2VerificationAttemptsSummaryApi.md](map/operations/VerifyV2VerificationAttemptsSummaryApi.md) |
| `VerifyV2VerificationCheck` | 1 | [map/operations/VerifyV2VerificationCheck.md](map/operations/VerifyV2VerificationCheck.md) |
| `VerifyV2Webhook` | 5 | [map/operations/VerifyV2Webhook.md](map/operations/VerifyV2Webhook.md) |
| `VideoV1Anonymize` | 1 | [map/operations/VideoV1Anonymize.md](map/operations/VideoV1Anonymize.md) |
| `VideoV1CompositionApi` | 4 | [map/operations/VideoV1CompositionApi.md](map/operations/VideoV1CompositionApi.md) |
| `VideoV1CompositionHookApi` | 5 | [map/operations/VideoV1CompositionHookApi.md](map/operations/VideoV1CompositionHookApi.md) |
| `VideoV1CompositionSettingsApi` | 2 | [map/operations/VideoV1CompositionSettingsApi.md](map/operations/VideoV1CompositionSettingsApi.md) |
| `VideoV1Participant` | 3 | [map/operations/VideoV1Participant.md](map/operations/VideoV1Participant.md) |
| `VideoV1PublishedTrack` | 2 | [map/operations/VideoV1PublishedTrack.md](map/operations/VideoV1PublishedTrack.md) |
| `VideoV1RecordingApi` | 3 | [map/operations/VideoV1RecordingApi.md](map/operations/VideoV1RecordingApi.md) |
| `VideoV1RecordingRules` | 2 | [map/operations/VideoV1RecordingRules.md](map/operations/VideoV1RecordingRules.md) |
| `VideoV1RecordingSettingsApi` | 2 | [map/operations/VideoV1RecordingSettingsApi.md](map/operations/VideoV1RecordingSettingsApi.md) |
| `VideoV1RoomApi` | 4 | [map/operations/VideoV1RoomApi.md](map/operations/VideoV1RoomApi.md) |
| `VideoV1RoomRecording` | 3 | [map/operations/VideoV1RoomRecording.md](map/operations/VideoV1RoomRecording.md) |
| `VideoV1SubscribeRules` | 2 | [map/operations/VideoV1SubscribeRules.md](map/operations/VideoV1SubscribeRules.md) |
| `VideoV1SubscribedTrack` | 2 | [map/operations/VideoV1SubscribedTrack.md](map/operations/VideoV1SubscribedTrack.md) |
| `VideoV1Transcriptions` | 4 | [map/operations/VideoV1Transcriptions.md](map/operations/VideoV1Transcriptions.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every file under `Models/` and `Errors/` declares exactly one public type, named after the file, and no two share a name — so a type name *is* its path. Take it from the operation's **Type sources** table, or build it from the kind's directory below. Never grep for a type.

| Group | Count | Directory (file = `<TypeName>.cs`) |
| --- | --- | --- |
| Records (plain `record` data models) | 838 | `Models/` |
| Unions (`OneOf`) — variant factories + `TryGet…` | 2 | `Models/OneOf/` |
| Unions (`AnyOf`) — variant factories + `TryGet…` | 3 | `Models/AnyOf/` |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — C# member names + wire values | 399 | `Models/Enums/` |
| Typed error classes (`: ApiError`, one per Case A operation) | 37 | `Errors/` |

Conventions: records are immutable, `init`-only; `required` properties must be set in the object initializer; `T?` is optional. A field's wire name is its `[JsonPropertyName]` and often differs from the C# name (`AmountInCents` ↔ `amount_in_cents`) — read it off the property, don't derive it. `OneOf`/`AnyOf` unions wrap `Optional<T>` variants — build via static factory or implicit conversion, read via `TryGet…(out …)`; `AllOf` compositions are not unions — every constituent is a `required` property, so set them all, and those constituent properties carry no `[JsonPropertyName]` and have no wire name of their own, because the generated converter flattens each constituent's own fields directly into the one parent JSON object. Enums are **not** C# enums — build with `Type.FromValue("wire")` or the static members, whose names are PascalCase even when the wire value isn't (`CollectionMethod.Invoice`, not `.invoice`).

Namespaces by content type (add `using` accordingly):

| Contents | Namespace |
| --- | --- |
| Client & options (root) | `TwilioSdk` |
| Operation controllers (`Api/`) | `TwilioSdk.Api` |
| Records (`Models/`) | `TwilioSdk.Models` |
| Enums (`Models/Enums/`) | `TwilioSdk.Models.Enums` |
| OneOf unions (`Models/OneOf/`) | `TwilioSdk.Models.OneOf` |
| AnyOf unions (`Models/AnyOf/`) | `TwilioSdk.Models.AnyOf` |
| Error classes (`Errors/`) | `TwilioSdk.Errors` |

---

## Servers & auth

**Basic auth.** Set `options.AccountSidAuthToken = new BasicAuthCredentials { Username = …, Password = … }`. This API uses [basic authentication](https://www.twilio.com/docs/glossary/what-is-basic-authentication). Use an [API key](https://www.twilio.com/docs/iam/api-keys) as the username and the API key secret as the password. You can also use your account SID and auth token, but limit their use to local testing.

**Environments.** `options.Environment` selects the target environment (`Servers/ServerEnvironment.cs`):

| Environment | Value | Hosting |
| --- | --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` | — |

**15 server groups.** Base-URL templates and override points (`options.Server.…`):

| Group | `Production` base URL | Override point |
| --- | --- | --- |
| `Default` | `https://api.twilio.com` | `options.Server.Default.Production.BaseUrl` |
| `Default1` | `https://messaging.twilio.com` | `options.Server.Default1.Production.BaseUrl` |
| `Default2` | `https://content.twilio.com` | `options.Server.Default2.Production.BaseUrl` |
| `Default3` | `https://verify.twilio.com` | `options.Server.Default3.Production.BaseUrl` |
| `Default4` | `https://lookups.twilio.com` | `options.Server.Default4.Production.BaseUrl` |
| `Default5` | `https://numbers.twilio.com` | `options.Server.Default5.Production.BaseUrl` |
| `Default6` | `https://video.twilio.com` | `options.Server.Default6.Production.BaseUrl` |
| `Default7` | `https://conversations.twilio.com` | `options.Server.Default7.Production.BaseUrl` |
| `Default8` | `https://taskrouter.twilio.com` | `options.Server.Default8.Production.BaseUrl` |
| `Default9` | `https://trusthub.twilio.com` | `options.Server.Default9.Production.BaseUrl` |
| `Default10` | `https://proxy.twilio.com` | `options.Server.Default10.Production.BaseUrl` |
| `Default11` | `https://studio.twilio.com` | `options.Server.Default11.Production.BaseUrl` |
| `Default12` | `https://sync.twilio.com` | `options.Server.Default12.Production.BaseUrl` |
| `Default13` | `https://flex-api.twilio.com` | `options.Server.Default13.Production.BaseUrl` |
| `Default14` | `https://insights.twilio.com` | `options.Server.Default14.Production.BaseUrl` |

Retry/resilience is configurable via `options.Retry` (`RetryOptions`, backed by Polly).

