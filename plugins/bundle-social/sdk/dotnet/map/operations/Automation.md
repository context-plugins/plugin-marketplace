<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automation — operations

Accessor: `client.Automation` · Source: `src/BundleSocial/Api/Automation.cs` · 17 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AutomationActivateFlow

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationActivateFlow(AutomationActivateFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AutomationsActivateResponse`
- **Error**: `ApiException<AutomationActivateFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationsActivate400Error1([NotNullWhen(true)] out ApiV1AutomationsActivate400Error1? value)` [400] · `TryGetApiV1AutomationsActivate401Error1([NotNullWhen(true)] out ApiV1AutomationsActivate401Error1? value)` [401] · `TryGetApiV1AutomationsActivate403Error1([NotNullWhen(true)] out ApiV1AutomationsActivate403Error1? value)` [403] · `TryGetApiV1AutomationsActivate404Error1([NotNullWhen(true)] out ApiV1AutomationsActivate404Error1? value)` [404] · `TryGetApiV1AutomationsActivate429Error1([NotNullWhen(true)] out ApiV1AutomationsActivate429Error1? value)` [429] · `TryGetApiV1AutomationsActivate500Error1([NotNullWhen(true)] out ApiV1AutomationsActivate500Error1? value)` [500] · `TryGetApiV1AutomationsActivate502Error1([NotNullWhen(true)] out ApiV1AutomationsActivate502Error1? value)` [502] · `TryGetApiV1AutomationsActivate503Error1([NotNullWhen(true)] out ApiV1AutomationsActivate503Error1? value)` [503] · `TryGetApiV1AutomationsActivate504Error1([NotNullWhen(true)] out ApiV1AutomationsActivate504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationActivateFlowRequest` | `src/BundleSocial/Requests/Automation/AutomationActivateFlowRequest.cs` |
| `ApiV1AutomationsActivateResponse` | `src/BundleSocial/Models/ApiV1AutomationsActivateResponse.cs` |
| `AutomationActivateFlowError` | `src/BundleSocial/Errors/AutomationActivateFlowError.cs` |
| `ApiV1AutomationsActivate400Error1` | `src/BundleSocial/Models/ApiV1AutomationsActivate400Error1.cs` |
| `ApiV1AutomationsActivate401Error1` | `src/BundleSocial/Models/ApiV1AutomationsActivate401Error1.cs` |
| `ApiV1AutomationsActivate403Error1` | `src/BundleSocial/Models/ApiV1AutomationsActivate403Error1.cs` |
| `ApiV1AutomationsActivate404Error1` | `src/BundleSocial/Models/ApiV1AutomationsActivate404Error1.cs` |
| `ApiV1AutomationsActivate429Error1` | `src/BundleSocial/Models/ApiV1AutomationsActivate429Error1.cs` |
| `ApiV1AutomationsActivate500Error1` | `src/BundleSocial/Models/ApiV1AutomationsActivate500Error1.cs` |
| `ApiV1AutomationsActivate502Error1` | `src/BundleSocial/Models/ApiV1AutomationsActivate502Error1.cs` |
| `ApiV1AutomationsActivate503Error1` | `src/BundleSocial/Models/ApiV1AutomationsActivate503Error1.cs` |
| `ApiV1AutomationsActivate504Error1` | `src/BundleSocial/Models/ApiV1AutomationsActivate504Error1.cs` |

### AutomationArchiveFlow

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationArchiveFlow(AutomationArchiveFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AutomationsArchiveResponse`
- **Error**: `ApiException<AutomationArchiveFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationsArchive400Error1([NotNullWhen(true)] out ApiV1AutomationsArchive400Error1? value)` [400] · `TryGetApiV1AutomationsArchive401Error1([NotNullWhen(true)] out ApiV1AutomationsArchive401Error1? value)` [401] · `TryGetApiV1AutomationsArchive403Error1([NotNullWhen(true)] out ApiV1AutomationsArchive403Error1? value)` [403] · `TryGetApiV1AutomationsArchive404Error1([NotNullWhen(true)] out ApiV1AutomationsArchive404Error1? value)` [404] · `TryGetApiV1AutomationsArchive429Error1([NotNullWhen(true)] out ApiV1AutomationsArchive429Error1? value)` [429] · `TryGetApiV1AutomationsArchive500Error1([NotNullWhen(true)] out ApiV1AutomationsArchive500Error1? value)` [500] · `TryGetApiV1AutomationsArchive502Error1([NotNullWhen(true)] out ApiV1AutomationsArchive502Error1? value)` [502] · `TryGetApiV1AutomationsArchive503Error1([NotNullWhen(true)] out ApiV1AutomationsArchive503Error1? value)` [503] · `TryGetApiV1AutomationsArchive504Error1([NotNullWhen(true)] out ApiV1AutomationsArchive504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationArchiveFlowRequest` | `src/BundleSocial/Requests/Automation/AutomationArchiveFlowRequest.cs` |
| `ApiV1AutomationsArchiveResponse` | `src/BundleSocial/Models/ApiV1AutomationsArchiveResponse.cs` |
| `AutomationArchiveFlowError` | `src/BundleSocial/Errors/AutomationArchiveFlowError.cs` |
| `ApiV1AutomationsArchive400Error1` | `src/BundleSocial/Models/ApiV1AutomationsArchive400Error1.cs` |
| `ApiV1AutomationsArchive401Error1` | `src/BundleSocial/Models/ApiV1AutomationsArchive401Error1.cs` |
| `ApiV1AutomationsArchive403Error1` | `src/BundleSocial/Models/ApiV1AutomationsArchive403Error1.cs` |
| `ApiV1AutomationsArchive404Error1` | `src/BundleSocial/Models/ApiV1AutomationsArchive404Error1.cs` |
| `ApiV1AutomationsArchive429Error1` | `src/BundleSocial/Models/ApiV1AutomationsArchive429Error1.cs` |
| `ApiV1AutomationsArchive500Error1` | `src/BundleSocial/Models/ApiV1AutomationsArchive500Error1.cs` |
| `ApiV1AutomationsArchive502Error1` | `src/BundleSocial/Models/ApiV1AutomationsArchive502Error1.cs` |
| `ApiV1AutomationsArchive503Error1` | `src/BundleSocial/Models/ApiV1AutomationsArchive503Error1.cs` |
| `ApiV1AutomationsArchive504Error1` | `src/BundleSocial/Models/ApiV1AutomationsArchive504Error1.cs` |

### AutomationCopyFlows

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationCopyFlows(AutomationCopyFlowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1AutomationsCopyResponse`
- **Error**: `ApiException<AutomationCopyFlowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationsCopy400Error1([NotNullWhen(true)] out ApiV1AutomationsCopy400Error1? value)` [400] · `TryGetApiV1AutomationsCopy401Error1([NotNullWhen(true)] out ApiV1AutomationsCopy401Error1? value)` [401] · `TryGetApiV1AutomationsCopy403Error1([NotNullWhen(true)] out ApiV1AutomationsCopy403Error1? value)` [403] · `TryGetApiV1AutomationsCopy404Error1([NotNullWhen(true)] out ApiV1AutomationsCopy404Error1? value)` [404] · `TryGetApiV1AutomationsCopy429Error1([NotNullWhen(true)] out ApiV1AutomationsCopy429Error1? value)` [429] · `TryGetApiV1AutomationsCopy500Error1([NotNullWhen(true)] out ApiV1AutomationsCopy500Error1? value)` [500] · `TryGetApiV1AutomationsCopy502Error1([NotNullWhen(true)] out ApiV1AutomationsCopy502Error1? value)` [502] · `TryGetApiV1AutomationsCopy503Error1([NotNullWhen(true)] out ApiV1AutomationsCopy503Error1? value)` [503] · `TryGetApiV1AutomationsCopy504Error1([NotNullWhen(true)] out ApiV1AutomationsCopy504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationCopyFlowsRequest` | `src/BundleSocial/Requests/Automation/AutomationCopyFlowsRequest.cs` |
| `ApiV1AutomationsCopyRequest` | `src/BundleSocial/Models/ApiV1AutomationsCopyRequest.cs` |
| `ApiV1AutomationsCopyResponse` | `src/BundleSocial/Models/ApiV1AutomationsCopyResponse.cs` |
| `AutomationCopyFlowsError` | `src/BundleSocial/Errors/AutomationCopyFlowsError.cs` |
| `ApiV1AutomationsCopy400Error1` | `src/BundleSocial/Models/ApiV1AutomationsCopy400Error1.cs` |
| `ApiV1AutomationsCopy401Error1` | `src/BundleSocial/Models/ApiV1AutomationsCopy401Error1.cs` |
| `ApiV1AutomationsCopy403Error1` | `src/BundleSocial/Models/ApiV1AutomationsCopy403Error1.cs` |
| `ApiV1AutomationsCopy404Error1` | `src/BundleSocial/Models/ApiV1AutomationsCopy404Error1.cs` |
| `ApiV1AutomationsCopy429Error1` | `src/BundleSocial/Models/ApiV1AutomationsCopy429Error1.cs` |
| `ApiV1AutomationsCopy500Error1` | `src/BundleSocial/Models/ApiV1AutomationsCopy500Error1.cs` |
| `ApiV1AutomationsCopy502Error1` | `src/BundleSocial/Models/ApiV1AutomationsCopy502Error1.cs` |
| `ApiV1AutomationsCopy503Error1` | `src/BundleSocial/Models/ApiV1AutomationsCopy503Error1.cs` |
| `ApiV1AutomationsCopy504Error1` | `src/BundleSocial/Models/ApiV1AutomationsCopy504Error1.cs` |

### AutomationCreateFlow

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationCreateFlow(AutomationCreateFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1AutomationsResponse1`
- **Error**: `ApiException<AutomationCreateFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Automations400Error1([NotNullWhen(true)] out ApiV1Automations400Error1? value)` [400] · `TryGetApiV1Automations401Error1([NotNullWhen(true)] out ApiV1Automations401Error1? value)` [401] · `TryGetApiV1Automations403Error1([NotNullWhen(true)] out ApiV1Automations403Error1? value)` [403] · `TryGetApiV1Automations404Error1([NotNullWhen(true)] out ApiV1Automations404Error1? value)` [404] · `TryGetApiV1Automations429Error1([NotNullWhen(true)] out ApiV1Automations429Error1? value)` [429] · `TryGetApiV1Automations500Error1([NotNullWhen(true)] out ApiV1Automations500Error1? value)` [500] · `TryGetApiV1Automations502Error1([NotNullWhen(true)] out ApiV1Automations502Error1? value)` [502] · `TryGetApiV1Automations503Error1([NotNullWhen(true)] out ApiV1Automations503Error1? value)` [503] · `TryGetApiV1Automations504Error1([NotNullWhen(true)] out ApiV1Automations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationCreateFlowRequest` | `src/BundleSocial/Requests/Automation/AutomationCreateFlowRequest.cs` |
| `ApiV1AutomationsRequest` | `src/BundleSocial/Models/ApiV1AutomationsRequest.cs` |
| `ApiV1AutomationsResponse1` | `src/BundleSocial/Models/ApiV1AutomationsResponse1.cs` |
| `AutomationCreateFlowError` | `src/BundleSocial/Errors/AutomationCreateFlowError.cs` |
| `ApiV1Automations400Error1` | `src/BundleSocial/Models/ApiV1Automations400Error1.cs` |
| `ApiV1Automations401Error1` | `src/BundleSocial/Models/ApiV1Automations401Error1.cs` |
| `ApiV1Automations403Error1` | `src/BundleSocial/Models/ApiV1Automations403Error1.cs` |
| `ApiV1Automations404Error1` | `src/BundleSocial/Models/ApiV1Automations404Error1.cs` |
| `ApiV1Automations429Error1` | `src/BundleSocial/Models/ApiV1Automations429Error1.cs` |
| `ApiV1Automations500Error1` | `src/BundleSocial/Models/ApiV1Automations500Error1.cs` |
| `ApiV1Automations502Error1` | `src/BundleSocial/Models/ApiV1Automations502Error1.cs` |
| `ApiV1Automations503Error1` | `src/BundleSocial/Models/ApiV1Automations503Error1.cs` |
| `ApiV1Automations504Error1` | `src/BundleSocial/Models/ApiV1Automations504Error1.cs` |

### AutomationDeleteFlow

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationDeleteFlow(AutomationDeleteFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AutomationsResponse1`
- **Error**: `ApiException<AutomationDeleteFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Automations400Error1([NotNullWhen(true)] out ApiV1Automations400Error1? value)` [400] · `TryGetApiV1Automations401Error1([NotNullWhen(true)] out ApiV1Automations401Error1? value)` [401] · `TryGetApiV1Automations403Error1([NotNullWhen(true)] out ApiV1Automations403Error1? value)` [403] · `TryGetApiV1Automations404Error1([NotNullWhen(true)] out ApiV1Automations404Error1? value)` [404] · `TryGetApiV1Automations429Error1([NotNullWhen(true)] out ApiV1Automations429Error1? value)` [429] · `TryGetApiV1Automations500Error1([NotNullWhen(true)] out ApiV1Automations500Error1? value)` [500] · `TryGetApiV1Automations502Error1([NotNullWhen(true)] out ApiV1Automations502Error1? value)` [502] · `TryGetApiV1Automations503Error1([NotNullWhen(true)] out ApiV1Automations503Error1? value)` [503] · `TryGetApiV1Automations504Error1([NotNullWhen(true)] out ApiV1Automations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationDeleteFlowRequest` | `src/BundleSocial/Requests/Automation/AutomationDeleteFlowRequest.cs` |
| `ApiV1AutomationsResponse1` | `src/BundleSocial/Models/ApiV1AutomationsResponse1.cs` |
| `AutomationDeleteFlowError` | `src/BundleSocial/Errors/AutomationDeleteFlowError.cs` |
| `ApiV1Automations400Error1` | `src/BundleSocial/Models/ApiV1Automations400Error1.cs` |
| `ApiV1Automations401Error1` | `src/BundleSocial/Models/ApiV1Automations401Error1.cs` |
| `ApiV1Automations403Error1` | `src/BundleSocial/Models/ApiV1Automations403Error1.cs` |
| `ApiV1Automations404Error1` | `src/BundleSocial/Models/ApiV1Automations404Error1.cs` |
| `ApiV1Automations429Error1` | `src/BundleSocial/Models/ApiV1Automations429Error1.cs` |
| `ApiV1Automations500Error1` | `src/BundleSocial/Models/ApiV1Automations500Error1.cs` |
| `ApiV1Automations502Error1` | `src/BundleSocial/Models/ApiV1Automations502Error1.cs` |
| `ApiV1Automations503Error1` | `src/BundleSocial/Models/ApiV1Automations503Error1.cs` |
| `ApiV1Automations504Error1` | `src/BundleSocial/Models/ApiV1Automations504Error1.cs` |

### AutomationGetExecution

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationGetExecution(AutomationGetExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AutomationExecutionsResponse`
- **Error**: `ApiException<AutomationGetExecutionError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationExecutions400Error1([NotNullWhen(true)] out ApiV1AutomationExecutions400Error1? value)` [400] · `TryGetApiV1AutomationExecutions401Error1([NotNullWhen(true)] out ApiV1AutomationExecutions401Error1? value)` [401] · `TryGetApiV1AutomationExecutions403Error1([NotNullWhen(true)] out ApiV1AutomationExecutions403Error1? value)` [403] · `TryGetApiV1AutomationExecutions404Error1([NotNullWhen(true)] out ApiV1AutomationExecutions404Error1? value)` [404] · `TryGetApiV1AutomationExecutions429Error1([NotNullWhen(true)] out ApiV1AutomationExecutions429Error1? value)` [429] · `TryGetApiV1AutomationExecutions500Error1([NotNullWhen(true)] out ApiV1AutomationExecutions500Error1? value)` [500] · `TryGetApiV1AutomationExecutions502Error1([NotNullWhen(true)] out ApiV1AutomationExecutions502Error1? value)` [502] · `TryGetApiV1AutomationExecutions503Error1([NotNullWhen(true)] out ApiV1AutomationExecutions503Error1? value)` [503] · `TryGetApiV1AutomationExecutions504Error1([NotNullWhen(true)] out ApiV1AutomationExecutions504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationGetExecutionRequest` | `src/BundleSocial/Requests/Automation/AutomationGetExecutionRequest.cs` |
| `ApiV1AutomationExecutionsResponse` | `src/BundleSocial/Models/ApiV1AutomationExecutionsResponse.cs` |
| `AutomationGetExecutionError` | `src/BundleSocial/Errors/AutomationGetExecutionError.cs` |
| `ApiV1AutomationExecutions400Error1` | `src/BundleSocial/Models/ApiV1AutomationExecutions400Error1.cs` |
| `ApiV1AutomationExecutions401Error1` | `src/BundleSocial/Models/ApiV1AutomationExecutions401Error1.cs` |
| `ApiV1AutomationExecutions403Error1` | `src/BundleSocial/Models/ApiV1AutomationExecutions403Error1.cs` |
| `ApiV1AutomationExecutions404Error1` | `src/BundleSocial/Models/ApiV1AutomationExecutions404Error1.cs` |
| `ApiV1AutomationExecutions429Error1` | `src/BundleSocial/Models/ApiV1AutomationExecutions429Error1.cs` |
| `ApiV1AutomationExecutions500Error1` | `src/BundleSocial/Models/ApiV1AutomationExecutions500Error1.cs` |
| `ApiV1AutomationExecutions502Error1` | `src/BundleSocial/Models/ApiV1AutomationExecutions502Error1.cs` |
| `ApiV1AutomationExecutions503Error1` | `src/BundleSocial/Models/ApiV1AutomationExecutions503Error1.cs` |
| `ApiV1AutomationExecutions504Error1` | `src/BundleSocial/Models/ApiV1AutomationExecutions504Error1.cs` |

### AutomationGetFlow

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationGetFlow(AutomationGetFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AutomationsResponse1`
- **Error**: `ApiException<AutomationGetFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Automations400Error1([NotNullWhen(true)] out ApiV1Automations400Error1? value)` [400] · `TryGetApiV1Automations401Error1([NotNullWhen(true)] out ApiV1Automations401Error1? value)` [401] · `TryGetApiV1Automations403Error1([NotNullWhen(true)] out ApiV1Automations403Error1? value)` [403] · `TryGetApiV1Automations404Error1([NotNullWhen(true)] out ApiV1Automations404Error1? value)` [404] · `TryGetApiV1Automations429Error1([NotNullWhen(true)] out ApiV1Automations429Error1? value)` [429] · `TryGetApiV1Automations500Error1([NotNullWhen(true)] out ApiV1Automations500Error1? value)` [500] · `TryGetApiV1Automations502Error1([NotNullWhen(true)] out ApiV1Automations502Error1? value)` [502] · `TryGetApiV1Automations503Error1([NotNullWhen(true)] out ApiV1Automations503Error1? value)` [503] · `TryGetApiV1Automations504Error1([NotNullWhen(true)] out ApiV1Automations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationGetFlowRequest` | `src/BundleSocial/Requests/Automation/AutomationGetFlowRequest.cs` |
| `ApiV1AutomationsResponse1` | `src/BundleSocial/Models/ApiV1AutomationsResponse1.cs` |
| `AutomationGetFlowError` | `src/BundleSocial/Errors/AutomationGetFlowError.cs` |
| `ApiV1Automations400Error1` | `src/BundleSocial/Models/ApiV1Automations400Error1.cs` |
| `ApiV1Automations401Error1` | `src/BundleSocial/Models/ApiV1Automations401Error1.cs` |
| `ApiV1Automations403Error1` | `src/BundleSocial/Models/ApiV1Automations403Error1.cs` |
| `ApiV1Automations404Error1` | `src/BundleSocial/Models/ApiV1Automations404Error1.cs` |
| `ApiV1Automations429Error1` | `src/BundleSocial/Models/ApiV1Automations429Error1.cs` |
| `ApiV1Automations500Error1` | `src/BundleSocial/Models/ApiV1Automations500Error1.cs` |
| `ApiV1Automations502Error1` | `src/BundleSocial/Models/ApiV1Automations502Error1.cs` |
| `ApiV1Automations503Error1` | `src/BundleSocial/Models/ApiV1Automations503Error1.cs` |
| `ApiV1Automations504Error1` | `src/BundleSocial/Models/ApiV1Automations504Error1.cs` |

### AutomationGetFlowExecutions

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationGetFlowExecutions(AutomationGetFlowExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `flowVersionId` ← `FlowVersionId`, `triggerId` ← `TriggerId`, `socialAccountId` ← `SocialAccountId`, `platform` ← `Platform`, `status` ← `Status`, `conversationId` ← `ConversationId`, `fetchedCommentId` ← `FetchedCommentId`, `offset` ← `Offset`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1AutomationsExecutionsResponse`
- **Error**: `ApiException<AutomationGetFlowExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationsExecutions400Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions400Error1? value)` [400] · `TryGetApiV1AutomationsExecutions401Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions401Error1? value)` [401] · `TryGetApiV1AutomationsExecutions403Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions403Error1? value)` [403] · `TryGetApiV1AutomationsExecutions404Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions404Error1? value)` [404] · `TryGetApiV1AutomationsExecutions429Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions429Error1? value)` [429] · `TryGetApiV1AutomationsExecutions500Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions500Error1? value)` [500] · `TryGetApiV1AutomationsExecutions502Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions502Error1? value)` [502] · `TryGetApiV1AutomationsExecutions503Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions503Error1? value)` [503] · `TryGetApiV1AutomationsExecutions504Error1([NotNullWhen(true)] out ApiV1AutomationsExecutions504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationGetFlowExecutionsRequest` | `src/BundleSocial/Requests/Automation/AutomationGetFlowExecutionsRequest.cs` |
| `Platform` | `src/BundleSocial/Models/Enums/Platform.cs` |
| `Status31` | `src/BundleSocial/Models/Enums/Status31.cs` |
| `ApiV1AutomationsExecutionsResponse` | `src/BundleSocial/Models/ApiV1AutomationsExecutionsResponse.cs` |
| `AutomationGetFlowExecutionsError` | `src/BundleSocial/Errors/AutomationGetFlowExecutionsError.cs` |
| `ApiV1AutomationsExecutions400Error1` | `src/BundleSocial/Models/ApiV1AutomationsExecutions400Error1.cs` |
| `ApiV1AutomationsExecutions401Error1` | `src/BundleSocial/Models/ApiV1AutomationsExecutions401Error1.cs` |
| `ApiV1AutomationsExecutions403Error1` | `src/BundleSocial/Models/ApiV1AutomationsExecutions403Error1.cs` |
| `ApiV1AutomationsExecutions404Error1` | `src/BundleSocial/Models/ApiV1AutomationsExecutions404Error1.cs` |
| `ApiV1AutomationsExecutions429Error1` | `src/BundleSocial/Models/ApiV1AutomationsExecutions429Error1.cs` |
| `ApiV1AutomationsExecutions500Error1` | `src/BundleSocial/Models/ApiV1AutomationsExecutions500Error1.cs` |
| `ApiV1AutomationsExecutions502Error1` | `src/BundleSocial/Models/ApiV1AutomationsExecutions502Error1.cs` |
| `ApiV1AutomationsExecutions503Error1` | `src/BundleSocial/Models/ApiV1AutomationsExecutions503Error1.cs` |
| `ApiV1AutomationsExecutions504Error1` | `src/BundleSocial/Models/ApiV1AutomationsExecutions504Error1.cs` |

### AutomationGetFlows

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationGetFlows(AutomationGetFlowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `status` ← `Status`, `platformScope` ← `PlatformScope`, `socialAccountId` ← `SocialAccountId`, `offset` ← `Offset`, `limit` ← `Limit`
- **Returns**: `ApiV1AutomationsResponse`
- **Error**: `ApiException<AutomationGetFlowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Automations400Error1([NotNullWhen(true)] out ApiV1Automations400Error1? value)` [400] · `TryGetApiV1Automations401Error1([NotNullWhen(true)] out ApiV1Automations401Error1? value)` [401] · `TryGetApiV1Automations403Error1([NotNullWhen(true)] out ApiV1Automations403Error1? value)` [403] · `TryGetApiV1Automations404Error1([NotNullWhen(true)] out ApiV1Automations404Error1? value)` [404] · `TryGetApiV1Automations429Error1([NotNullWhen(true)] out ApiV1Automations429Error1? value)` [429] · `TryGetApiV1Automations500Error1([NotNullWhen(true)] out ApiV1Automations500Error1? value)` [500] · `TryGetApiV1Automations502Error1([NotNullWhen(true)] out ApiV1Automations502Error1? value)` [502] · `TryGetApiV1Automations503Error1([NotNullWhen(true)] out ApiV1Automations503Error1? value)` [503] · `TryGetApiV1Automations504Error1([NotNullWhen(true)] out ApiV1Automations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationGetFlowsRequest` | `src/BundleSocial/Requests/Automation/AutomationGetFlowsRequest.cs` |
| `StatusBundleSocialAutomationApi` | `src/BundleSocial/Models/Enums/StatusBundleSocialAutomationApi.cs` |
| `PlatformScope` | `src/BundleSocial/Models/Enums/PlatformScope.cs` |
| `ApiV1AutomationsResponse` | `src/BundleSocial/Models/ApiV1AutomationsResponse.cs` |
| `AutomationGetFlowsError` | `src/BundleSocial/Errors/AutomationGetFlowsError.cs` |
| `ApiV1Automations400Error1` | `src/BundleSocial/Models/ApiV1Automations400Error1.cs` |
| `ApiV1Automations401Error1` | `src/BundleSocial/Models/ApiV1Automations401Error1.cs` |
| `ApiV1Automations403Error1` | `src/BundleSocial/Models/ApiV1Automations403Error1.cs` |
| `ApiV1Automations404Error1` | `src/BundleSocial/Models/ApiV1Automations404Error1.cs` |
| `ApiV1Automations429Error1` | `src/BundleSocial/Models/ApiV1Automations429Error1.cs` |
| `ApiV1Automations500Error1` | `src/BundleSocial/Models/ApiV1Automations500Error1.cs` |
| `ApiV1Automations502Error1` | `src/BundleSocial/Models/ApiV1Automations502Error1.cs` |
| `ApiV1Automations503Error1` | `src/BundleSocial/Models/ApiV1Automations503Error1.cs` |
| `ApiV1Automations504Error1` | `src/BundleSocial/Models/ApiV1Automations504Error1.cs` |

### AutomationGetProviderSettings

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationGetProviderSettings(AutomationGetProviderSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `platform` ← `Platform`, `socialAccountId` ← `SocialAccountId`, `type` ← `Type`, `status` ← `Status`, `offset` ← `Offset`, `limit` ← `Limit`
- **Returns**: `ApiV1AutomationProviderSettingsResponse`
- **Error**: `ApiException<AutomationGetProviderSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationProviderSettings400Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings400Error1? value)` [400] · `TryGetApiV1AutomationProviderSettings401Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings401Error1? value)` [401] · `TryGetApiV1AutomationProviderSettings403Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings403Error1? value)` [403] · `TryGetApiV1AutomationProviderSettings404Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings404Error1? value)` [404] · `TryGetApiV1AutomationProviderSettings429Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings429Error1? value)` [429] · `TryGetApiV1AutomationProviderSettings500Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings500Error1? value)` [500] · `TryGetApiV1AutomationProviderSettings502Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings502Error1? value)` [502] · `TryGetApiV1AutomationProviderSettings503Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings503Error1? value)` [503] · `TryGetApiV1AutomationProviderSettings504Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationGetProviderSettingsRequest` | `src/BundleSocial/Requests/Automation/AutomationGetProviderSettingsRequest.cs` |
| `Platform` | `src/BundleSocial/Models/Enums/Platform.cs` |
| `Type112` | `src/BundleSocial/Models/Enums/Type112.cs` |
| `Status59` | `src/BundleSocial/Models/Enums/Status59.cs` |
| `ApiV1AutomationProviderSettingsResponse` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsResponse.cs` |
| `AutomationGetProviderSettingsError` | `src/BundleSocial/Errors/AutomationGetProviderSettingsError.cs` |
| `ApiV1AutomationProviderSettings400Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings400Error1.cs` |
| `ApiV1AutomationProviderSettings401Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings401Error1.cs` |
| `ApiV1AutomationProviderSettings403Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings403Error1.cs` |
| `ApiV1AutomationProviderSettings404Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings404Error1.cs` |
| `ApiV1AutomationProviderSettings429Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings429Error1.cs` |
| `ApiV1AutomationProviderSettings500Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings500Error1.cs` |
| `ApiV1AutomationProviderSettings502Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings502Error1.cs` |
| `ApiV1AutomationProviderSettings503Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings503Error1.cs` |
| `ApiV1AutomationProviderSettings504Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings504Error1.cs` |

### AutomationPauseFlow

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationPauseFlow(AutomationPauseFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AutomationsPauseResponse`
- **Error**: `ApiException<AutomationPauseFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationsPause400Error1([NotNullWhen(true)] out ApiV1AutomationsPause400Error1? value)` [400] · `TryGetApiV1AutomationsPause401Error1([NotNullWhen(true)] out ApiV1AutomationsPause401Error1? value)` [401] · `TryGetApiV1AutomationsPause403Error1([NotNullWhen(true)] out ApiV1AutomationsPause403Error1? value)` [403] · `TryGetApiV1AutomationsPause404Error1([NotNullWhen(true)] out ApiV1AutomationsPause404Error1? value)` [404] · `TryGetApiV1AutomationsPause429Error1([NotNullWhen(true)] out ApiV1AutomationsPause429Error1? value)` [429] · `TryGetApiV1AutomationsPause500Error1([NotNullWhen(true)] out ApiV1AutomationsPause500Error1? value)` [500] · `TryGetApiV1AutomationsPause502Error1([NotNullWhen(true)] out ApiV1AutomationsPause502Error1? value)` [502] · `TryGetApiV1AutomationsPause503Error1([NotNullWhen(true)] out ApiV1AutomationsPause503Error1? value)` [503] · `TryGetApiV1AutomationsPause504Error1([NotNullWhen(true)] out ApiV1AutomationsPause504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationPauseFlowRequest` | `src/BundleSocial/Requests/Automation/AutomationPauseFlowRequest.cs` |
| `ApiV1AutomationsPauseResponse` | `src/BundleSocial/Models/ApiV1AutomationsPauseResponse.cs` |
| `AutomationPauseFlowError` | `src/BundleSocial/Errors/AutomationPauseFlowError.cs` |
| `ApiV1AutomationsPause400Error1` | `src/BundleSocial/Models/ApiV1AutomationsPause400Error1.cs` |
| `ApiV1AutomationsPause401Error1` | `src/BundleSocial/Models/ApiV1AutomationsPause401Error1.cs` |
| `ApiV1AutomationsPause403Error1` | `src/BundleSocial/Models/ApiV1AutomationsPause403Error1.cs` |
| `ApiV1AutomationsPause404Error1` | `src/BundleSocial/Models/ApiV1AutomationsPause404Error1.cs` |
| `ApiV1AutomationsPause429Error1` | `src/BundleSocial/Models/ApiV1AutomationsPause429Error1.cs` |
| `ApiV1AutomationsPause500Error1` | `src/BundleSocial/Models/ApiV1AutomationsPause500Error1.cs` |
| `ApiV1AutomationsPause502Error1` | `src/BundleSocial/Models/ApiV1AutomationsPause502Error1.cs` |
| `ApiV1AutomationsPause503Error1` | `src/BundleSocial/Models/ApiV1AutomationsPause503Error1.cs` |
| `ApiV1AutomationsPause504Error1` | `src/BundleSocial/Models/ApiV1AutomationsPause504Error1.cs` |

### AutomationPublishFlow

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationPublishFlow(AutomationPublishFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AutomationsPublishResponse`
- **Error**: `ApiException<AutomationPublishFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationsPublish400Error1([NotNullWhen(true)] out ApiV1AutomationsPublish400Error1? value)` [400] · `TryGetApiV1AutomationsPublish401Error1([NotNullWhen(true)] out ApiV1AutomationsPublish401Error1? value)` [401] · `TryGetApiV1AutomationsPublish403Error1([NotNullWhen(true)] out ApiV1AutomationsPublish403Error1? value)` [403] · `TryGetApiV1AutomationsPublish404Error1([NotNullWhen(true)] out ApiV1AutomationsPublish404Error1? value)` [404] · `TryGetApiV1AutomationsPublish429Error1([NotNullWhen(true)] out ApiV1AutomationsPublish429Error1? value)` [429] · `TryGetApiV1AutomationsPublish500Error1([NotNullWhen(true)] out ApiV1AutomationsPublish500Error1? value)` [500] · `TryGetApiV1AutomationsPublish502Error1([NotNullWhen(true)] out ApiV1AutomationsPublish502Error1? value)` [502] · `TryGetApiV1AutomationsPublish503Error1([NotNullWhen(true)] out ApiV1AutomationsPublish503Error1? value)` [503] · `TryGetApiV1AutomationsPublish504Error1([NotNullWhen(true)] out ApiV1AutomationsPublish504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationPublishFlowRequest` | `src/BundleSocial/Requests/Automation/AutomationPublishFlowRequest.cs` |
| `ApiV1AutomationsPublishRequest` | `src/BundleSocial/Models/ApiV1AutomationsPublishRequest.cs` |
| `ApiV1AutomationsPublishResponse` | `src/BundleSocial/Models/ApiV1AutomationsPublishResponse.cs` |
| `AutomationPublishFlowError` | `src/BundleSocial/Errors/AutomationPublishFlowError.cs` |
| `ApiV1AutomationsPublish400Error1` | `src/BundleSocial/Models/ApiV1AutomationsPublish400Error1.cs` |
| `ApiV1AutomationsPublish401Error1` | `src/BundleSocial/Models/ApiV1AutomationsPublish401Error1.cs` |
| `ApiV1AutomationsPublish403Error1` | `src/BundleSocial/Models/ApiV1AutomationsPublish403Error1.cs` |
| `ApiV1AutomationsPublish404Error1` | `src/BundleSocial/Models/ApiV1AutomationsPublish404Error1.cs` |
| `ApiV1AutomationsPublish429Error1` | `src/BundleSocial/Models/ApiV1AutomationsPublish429Error1.cs` |
| `ApiV1AutomationsPublish500Error1` | `src/BundleSocial/Models/ApiV1AutomationsPublish500Error1.cs` |
| `ApiV1AutomationsPublish502Error1` | `src/BundleSocial/Models/ApiV1AutomationsPublish502Error1.cs` |
| `ApiV1AutomationsPublish503Error1` | `src/BundleSocial/Models/ApiV1AutomationsPublish503Error1.cs` |
| `ApiV1AutomationsPublish504Error1` | `src/BundleSocial/Models/ApiV1AutomationsPublish504Error1.cs` |

### AutomationSendRichMessage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationSendRichMessage(AutomationSendRichMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ConversationId`
- **Returns**: `ApiV1AutomationRichMessagesConversationsResponse`
- **Error**: `ApiException<AutomationSendRichMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationRichMessagesConversations400Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations400Error1? value)` [400] · `TryGetApiV1AutomationRichMessagesConversations401Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations401Error1? value)` [401] · `TryGetApiV1AutomationRichMessagesConversations403Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations403Error1? value)` [403] · `TryGetApiV1AutomationRichMessagesConversations404Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations404Error1? value)` [404] · `TryGetApiV1AutomationRichMessagesConversations429Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations429Error1? value)` [429] · `TryGetApiV1AutomationRichMessagesConversations500Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations500Error1? value)` [500] · `TryGetApiV1AutomationRichMessagesConversations502Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations502Error1? value)` [502] · `TryGetApiV1AutomationRichMessagesConversations503Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations503Error1? value)` [503] · `TryGetApiV1AutomationRichMessagesConversations504Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationSendRichMessageRequest` | `src/BundleSocial/Requests/Automation/AutomationSendRichMessageRequest.cs` |
| `ApiV1AutomationRichMessagesConversationsRequest` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversationsRequest.cs` |
| `ApiV1AutomationRichMessagesConversationsResponse` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversationsResponse.cs` |
| `AutomationSendRichMessageError` | `src/BundleSocial/Errors/AutomationSendRichMessageError.cs` |
| `ApiV1AutomationRichMessagesConversations400Error1` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversations400Error1.cs` |
| `ApiV1AutomationRichMessagesConversations401Error1` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversations401Error1.cs` |
| `ApiV1AutomationRichMessagesConversations403Error1` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversations403Error1.cs` |
| `ApiV1AutomationRichMessagesConversations404Error1` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversations404Error1.cs` |
| `ApiV1AutomationRichMessagesConversations429Error1` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversations429Error1.cs` |
| `ApiV1AutomationRichMessagesConversations500Error1` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversations500Error1.cs` |
| `ApiV1AutomationRichMessagesConversations502Error1` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversations502Error1.cs` |
| `ApiV1AutomationRichMessagesConversations503Error1` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversations503Error1.cs` |
| `ApiV1AutomationRichMessagesConversations504Error1` | `src/BundleSocial/Models/ApiV1AutomationRichMessagesConversations504Error1.cs` |

### AutomationSyncProviderSetting

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationSyncProviderSetting(AutomationSyncProviderSettingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AutomationProviderSettingsSyncResponse`
- **Error**: `ApiException<AutomationSyncProviderSettingError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationProviderSettingsSync400Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync400Error1? value)` [400] · `TryGetApiV1AutomationProviderSettingsSync401Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync401Error1? value)` [401] · `TryGetApiV1AutomationProviderSettingsSync403Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync403Error1? value)` [403] · `TryGetApiV1AutomationProviderSettingsSync404Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync404Error1? value)` [404] · `TryGetApiV1AutomationProviderSettingsSync429Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync429Error1? value)` [429] · `TryGetApiV1AutomationProviderSettingsSync500Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync500Error1? value)` [500] · `TryGetApiV1AutomationProviderSettingsSync502Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync502Error1? value)` [502] · `TryGetApiV1AutomationProviderSettingsSync503Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync503Error1? value)` [503] · `TryGetApiV1AutomationProviderSettingsSync504Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettingsSync504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationSyncProviderSettingRequest` | `src/BundleSocial/Requests/Automation/AutomationSyncProviderSettingRequest.cs` |
| `ApiV1AutomationProviderSettingsSyncResponse` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsSyncResponse.cs` |
| `AutomationSyncProviderSettingError` | `src/BundleSocial/Errors/AutomationSyncProviderSettingError.cs` |
| `ApiV1AutomationProviderSettingsSync400Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsSync400Error1.cs` |
| `ApiV1AutomationProviderSettingsSync401Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsSync401Error1.cs` |
| `ApiV1AutomationProviderSettingsSync403Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsSync403Error1.cs` |
| `ApiV1AutomationProviderSettingsSync404Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsSync404Error1.cs` |
| `ApiV1AutomationProviderSettingsSync429Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsSync429Error1.cs` |
| `ApiV1AutomationProviderSettingsSync500Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsSync500Error1.cs` |
| `ApiV1AutomationProviderSettingsSync502Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsSync502Error1.cs` |
| `ApiV1AutomationProviderSettingsSync503Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsSync503Error1.cs` |
| `ApiV1AutomationProviderSettingsSync504Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsSync504Error1.cs` |

### AutomationTestFlow

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationTestFlow(AutomationTestFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AutomationsTestResponse`
- **Error**: `ApiException<AutomationTestFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationsTest400Error1([NotNullWhen(true)] out ApiV1AutomationsTest400Error1? value)` [400] · `TryGetApiV1AutomationsTest401Error1([NotNullWhen(true)] out ApiV1AutomationsTest401Error1? value)` [401] · `TryGetApiV1AutomationsTest403Error1([NotNullWhen(true)] out ApiV1AutomationsTest403Error1? value)` [403] · `TryGetApiV1AutomationsTest404Error1([NotNullWhen(true)] out ApiV1AutomationsTest404Error1? value)` [404] · `TryGetApiV1AutomationsTest429Error1([NotNullWhen(true)] out ApiV1AutomationsTest429Error1? value)` [429] · `TryGetApiV1AutomationsTest500Error1([NotNullWhen(true)] out ApiV1AutomationsTest500Error1? value)` [500] · `TryGetApiV1AutomationsTest502Error1([NotNullWhen(true)] out ApiV1AutomationsTest502Error1? value)` [502] · `TryGetApiV1AutomationsTest503Error1([NotNullWhen(true)] out ApiV1AutomationsTest503Error1? value)` [503] · `TryGetApiV1AutomationsTest504Error1([NotNullWhen(true)] out ApiV1AutomationsTest504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationTestFlowRequest` | `src/BundleSocial/Requests/Automation/AutomationTestFlowRequest.cs` |
| `ApiV1AutomationsTestRequest` | `src/BundleSocial/Models/ApiV1AutomationsTestRequest.cs` |
| `ApiV1AutomationsTestResponse` | `src/BundleSocial/Models/ApiV1AutomationsTestResponse.cs` |
| `AutomationTestFlowError` | `src/BundleSocial/Errors/AutomationTestFlowError.cs` |
| `ApiV1AutomationsTest400Error1` | `src/BundleSocial/Models/ApiV1AutomationsTest400Error1.cs` |
| `ApiV1AutomationsTest401Error1` | `src/BundleSocial/Models/ApiV1AutomationsTest401Error1.cs` |
| `ApiV1AutomationsTest403Error1` | `src/BundleSocial/Models/ApiV1AutomationsTest403Error1.cs` |
| `ApiV1AutomationsTest404Error1` | `src/BundleSocial/Models/ApiV1AutomationsTest404Error1.cs` |
| `ApiV1AutomationsTest429Error1` | `src/BundleSocial/Models/ApiV1AutomationsTest429Error1.cs` |
| `ApiV1AutomationsTest500Error1` | `src/BundleSocial/Models/ApiV1AutomationsTest500Error1.cs` |
| `ApiV1AutomationsTest502Error1` | `src/BundleSocial/Models/ApiV1AutomationsTest502Error1.cs` |
| `ApiV1AutomationsTest503Error1` | `src/BundleSocial/Models/ApiV1AutomationsTest503Error1.cs` |
| `ApiV1AutomationsTest504Error1` | `src/BundleSocial/Models/ApiV1AutomationsTest504Error1.cs` |

### AutomationUpdateFlow

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationUpdateFlow(AutomationUpdateFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1AutomationsResponse1`
- **Error**: `ApiException<AutomationUpdateFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Automations400Error1([NotNullWhen(true)] out ApiV1Automations400Error1? value)` [400] · `TryGetApiV1Automations401Error1([NotNullWhen(true)] out ApiV1Automations401Error1? value)` [401] · `TryGetApiV1Automations403Error1([NotNullWhen(true)] out ApiV1Automations403Error1? value)` [403] · `TryGetApiV1Automations404Error1([NotNullWhen(true)] out ApiV1Automations404Error1? value)` [404] · `TryGetApiV1Automations429Error1([NotNullWhen(true)] out ApiV1Automations429Error1? value)` [429] · `TryGetApiV1Automations500Error1([NotNullWhen(true)] out ApiV1Automations500Error1? value)` [500] · `TryGetApiV1Automations502Error1([NotNullWhen(true)] out ApiV1Automations502Error1? value)` [502] · `TryGetApiV1Automations503Error1([NotNullWhen(true)] out ApiV1Automations503Error1? value)` [503] · `TryGetApiV1Automations504Error1([NotNullWhen(true)] out ApiV1Automations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationUpdateFlowRequest` | `src/BundleSocial/Requests/Automation/AutomationUpdateFlowRequest.cs` |
| `ApiV1AutomationsRequest1` | `src/BundleSocial/Models/ApiV1AutomationsRequest1.cs` |
| `ApiV1AutomationsResponse1` | `src/BundleSocial/Models/ApiV1AutomationsResponse1.cs` |
| `AutomationUpdateFlowError` | `src/BundleSocial/Errors/AutomationUpdateFlowError.cs` |
| `ApiV1Automations400Error1` | `src/BundleSocial/Models/ApiV1Automations400Error1.cs` |
| `ApiV1Automations401Error1` | `src/BundleSocial/Models/ApiV1Automations401Error1.cs` |
| `ApiV1Automations403Error1` | `src/BundleSocial/Models/ApiV1Automations403Error1.cs` |
| `ApiV1Automations404Error1` | `src/BundleSocial/Models/ApiV1Automations404Error1.cs` |
| `ApiV1Automations429Error1` | `src/BundleSocial/Models/ApiV1Automations429Error1.cs` |
| `ApiV1Automations500Error1` | `src/BundleSocial/Models/ApiV1Automations500Error1.cs` |
| `ApiV1Automations502Error1` | `src/BundleSocial/Models/ApiV1Automations502Error1.cs` |
| `ApiV1Automations503Error1` | `src/BundleSocial/Models/ApiV1Automations503Error1.cs` |
| `ApiV1Automations504Error1` | `src/BundleSocial/Models/ApiV1Automations504Error1.cs` |

### AutomationUpsertProviderSetting

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AutomationUpsertProviderSetting(AutomationUpsertProviderSettingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SocialAccountId`, `Type`
- **Returns**: `ApiV1AutomationProviderSettingsResponse1`
- **Error**: `ApiException<AutomationUpsertProviderSettingError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1AutomationProviderSettings400Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings400Error1? value)` [400] · `TryGetApiV1AutomationProviderSettings401Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings401Error1? value)` [401] · `TryGetApiV1AutomationProviderSettings403Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings403Error1? value)` [403] · `TryGetApiV1AutomationProviderSettings404Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings404Error1? value)` [404] · `TryGetApiV1AutomationProviderSettings429Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings429Error1? value)` [429] · `TryGetApiV1AutomationProviderSettings500Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings500Error1? value)` [500] · `TryGetApiV1AutomationProviderSettings502Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings502Error1? value)` [502] · `TryGetApiV1AutomationProviderSettings503Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings503Error1? value)` [503] · `TryGetApiV1AutomationProviderSettings504Error1([NotNullWhen(true)] out ApiV1AutomationProviderSettings504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AutomationUpsertProviderSettingRequest` | `src/BundleSocial/Requests/Automation/AutomationUpsertProviderSettingRequest.cs` |
| `Type112` | `src/BundleSocial/Models/Enums/Type112.cs` |
| `ApiV1AutomationProviderSettingsRequest` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsRequest.cs` |
| `ApiV1AutomationProviderSettingsResponse1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettingsResponse1.cs` |
| `AutomationUpsertProviderSettingError` | `src/BundleSocial/Errors/AutomationUpsertProviderSettingError.cs` |
| `ApiV1AutomationProviderSettings400Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings400Error1.cs` |
| `ApiV1AutomationProviderSettings401Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings401Error1.cs` |
| `ApiV1AutomationProviderSettings403Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings403Error1.cs` |
| `ApiV1AutomationProviderSettings404Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings404Error1.cs` |
| `ApiV1AutomationProviderSettings429Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings429Error1.cs` |
| `ApiV1AutomationProviderSettings500Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings500Error1.cs` |
| `ApiV1AutomationProviderSettings502Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings502Error1.cs` |
| `ApiV1AutomationProviderSettings503Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings503Error1.cs` |
| `ApiV1AutomationProviderSettings504Error1` | `src/BundleSocial/Models/ApiV1AutomationProviderSettings504Error1.cs` |

