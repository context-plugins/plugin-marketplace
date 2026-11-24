# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [DeliverdClient](src/Deliverd/DeliverdClient.cs)

## Actions

> Source: [Actions](src/Deliverd/Api/Actions.cs)

<details>
<summary><code>Task&lt;ApiV1ActionsResponse1&gt; GetApiV1Actions(GetApiV1ActionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Actions.GetApiV1Actions(new GetApiV1ActionsRequest());
    // TODO: Handle 'response' of type ApiV1ActionsResponse1
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ActionsRequest](src/Deliverd/Requests/Actions/GetApiV1ActionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ActionsResponse1](src/Deliverd/Models/ApiV1ActionsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ActionsResponse&gt; PostApiV1Actions(PostApiV1ActionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Actions are stable organisational vocabulary and tools are implementation details — several agents calling three differently named functions may all be performing finance.refund, and policy is written about the business action rather than the function name. Upsert, not create: this runs on every deploy, so registering the same id again is the normal case. It overwrites only the half the code owns; an administrator's title, risk and sensitivity overrides survive it, and no administrator can edit the input schema, because a schema they could loosen is a check the code no longer performs. An agent principal is refused: policy is keyed on the action id, so an agent able to name actions could name its way around the rule that governs it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Actions.PostApiV1Actions(new PostApiV1ActionsRequest());
    // TODO: Handle 'response' of type ApiV1ActionsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ActionsRequest](src/Deliverd/Requests/Actions/PostApiV1ActionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ActionsResponse](src/Deliverd/Models/ApiV1ActionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Agents

> Source: [Agents](src/Deliverd/Api/Agents.cs)

<details>
<summary><code>Task&lt;ApiV1AgentsResponse&gt; GetApiV1Agents(GetApiV1AgentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The organisation's agents and the platforms they run on. Registering one is an administrator's act in the app.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agents.GetApiV1Agents(new GetApiV1AgentsRequest());
    // TODO: Handle 'response' of type ApiV1AgentsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1AgentsRequest](src/Deliverd/Requests/Agents/GetApiV1AgentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AgentsResponse](src/Deliverd/Models/ApiV1AgentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AgentsResponse1&gt; GetApiV1AgentsById(GetApiV1AgentsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Agents.GetApiV1AgentsById(new GetApiV1AgentsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1AgentsResponse1
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1AgentsByIdRequest](src/Deliverd/Requests/Agents/GetApiV1AgentsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AgentsResponse1](src/Deliverd/Models/ApiV1AgentsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AiSystems

> Source: [AiSystems](src/Deliverd/Api/AiSystems.cs)

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1AiSystems(GetApiV1AiSystemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiSystems.GetApiV1AiSystems(new GetApiV1AiSystemsRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1AiSystemsRequest](src/Deliverd/Requests/AiSystems/GetApiV1AiSystemsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1AiSystemsById(GetApiV1AiSystemsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`system` is the record; `status` and `steps` say where it stands in its lifecycle and which steps out of it the caller may take (with every reason when not); `roles` are the members who answer for it; `history` is every move; `versions` are snapshots of what it said; `governedTaskIds` are the governed tasks naming it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiSystems.GetApiV1AiSystemsById(new GetApiV1AiSystemsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1AiSystemsByIdRequest](src/Deliverd/Requests/AiSystems/GetApiV1AiSystemsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1AiSystemsByIdTransitions(GetApiV1AiSystemsByIdTransitionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiSystems.GetApiV1AiSystemsByIdTransitions(new GetApiV1AiSystemsByIdTransitionsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1AiSystemsByIdTransitionsRequest](src/Deliverd/Requests/AiSystems/GetApiV1AiSystemsByIdTransitionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PatchApiV1AiSystemsById(PatchApiV1AiSystemsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An agent cannot lower its risk. Its status is not a field: the lifecycle moves it (`POST /api/v1/ai-systems/{id}/transitions`). Each change is a new version; values a key or an agent writes are labelled in `provenance` as imported or suggested until a person saves them. 409 when the record changed since it was read.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiSystems.PatchApiV1AiSystemsById(new PatchApiV1AiSystemsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PatchApiV1AiSystemsByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatchApiV1AiSystemsByIdRequest](src/Deliverd/Requests/AiSystems/PatchApiV1AiSystemsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PatchApiV1AiSystemsByIdError](src/Deliverd/Errors/PatchApiV1AiSystemsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1AiSystems(PostApiV1AiSystemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiSystems.PostApiV1AiSystems(new PostApiV1AiSystemsRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1AiSystemsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1AiSystemsRequest](src/Deliverd/Requests/AiSystems/PostApiV1AiSystemsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1AiSystemsError](src/Deliverd/Errors/PostApiV1AiSystemsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1AiSystemsByIdModelChange(PostApiV1AiSystemsByIdModelChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. `promptHash` and `guardrailsHash` are digests (`sha256:…`, a commit, a version tag), never the text. Every governed task using the system gets a reassessment, which closes its gate until a person completes it, and the evaluation, resilience testing, change record and compliance approval of the old release stop counting — and, under a model-risk pack, its independent validation and model documentation. Recording a first fingerprint changes nothing; changing or removing one does. `changed` names the parts that differ from what was recorded: the same release again changes nothing and records nothing, so a build step may send it on every build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiSystems.PostApiV1AiSystemsByIdModelChange(new PostApiV1AiSystemsByIdModelChangeRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1AiSystemsByIdModelChangeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1AiSystemsByIdModelChangeRequest](src/Deliverd/Requests/AiSystems/PostApiV1AiSystemsByIdModelChangeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1AiSystemsByIdModelChangeError](src/Deliverd/Errors/PostApiV1AiSystemsByIdModelChangeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1AiSystemsByIdTransitions(PostApiV1AiSystemsByIdTransitionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A key or an agent may put a proposal forward (`submit`) or take it back (`withdraw`). Approving, rejecting, returning, suspending, reinstating and retiring are a person's, in the app. A step is refused, with every reason, when the record lacks what it needs, when the caller may not take it, or when it is a decision and the caller holds a role on the record or moved it to its current status. 409 when the record changed since it was read.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiSystems.PostApiV1AiSystemsByIdTransitions(new PostApiV1AiSystemsByIdTransitionsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1AiSystemsByIdTransitionsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1AiSystemsByIdTransitionsRequest](src/Deliverd/Requests/AiSystems/PostApiV1AiSystemsByIdTransitionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1AiSystemsByIdTransitionsError](src/Deliverd/Errors/PostApiV1AiSystemsByIdTransitionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Analytics

> Source: [Analytics](src/Deliverd/Api/Analytics.cs)

<details>
<summary><code>Task&lt;ApiV1AnalyticsResponse&gt; GetApiV1Analytics(GetApiV1AnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`GET /reports/{idOrSlug}/analytics` needs to be told which report, so "what is getting read" meant walking the list and adding up. The half that cannot be reconstructed that way is `inactiveReports` — a report nobody has opened does not appear in anything you would think to ask about. Part of analytics, so Team and above; the per-report call returns a total view count on every plan.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.GetApiV1Analytics(new GetApiV1AnalyticsRequest());
    // TODO: Handle 'response' of type ApiV1AnalyticsResponse
}
catch (ApiException<GetApiV1AnalyticsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1AnalyticsRequest](src/Deliverd/Requests/Analytics/GetApiV1AnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsResponse](src/Deliverd/Models/ApiV1AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1AnalyticsError](src/Deliverd/Errors/GetApiV1AnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Approvals

> Source: [Approvals](src/Deliverd/Api/Approvals.cs)

<details>
<summary><code>Task&lt;ApiV1ApprovalsResponse1&gt; GetApiV1Approvals(GetApiV1ApprovalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Approvals.GetApiV1Approvals(new GetApiV1ApprovalsRequest());
    // TODO: Handle 'response' of type ApiV1ApprovalsResponse1
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ApprovalsRequest](src/Deliverd/Requests/Approvals/GetApiV1ApprovalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsResponse1](src/Deliverd/Models/ApiV1ApprovalsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ApprovalsResponse&gt; GetApiV1ApprovalsById(GetApiV1ApprovalsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Approvals.GetApiV1ApprovalsById(new GetApiV1ApprovalsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1ApprovalsResponse
}
catch (ApiException<GetApiV1ApprovalsByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ApprovalsByIdRequest](src/Deliverd/Requests/Approvals/GetApiV1ApprovalsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsResponse](src/Deliverd/Models/ApiV1ApprovalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ApprovalsByIdError](src/Deliverd/Errors/GetApiV1ApprovalsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ApprovalsResponse&gt; PostApiV1Approvals(PostApiV1ApprovalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a request and returns its page. The decision is a person's: read it by polling GET /api/v1/approvals/{id}, by the organisation's webhooks (approval.approved, approval.rejected, approval.expired), or by the MCP tool get_approval. Approvers are members named by email or id; the organisation's admins when omitted. The requester cannot be an approver of their own request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Approvals.PostApiV1Approvals(new PostApiV1ApprovalsRequest());
    // TODO: Handle 'response' of type ApiV1ApprovalsResponse
}
catch (ApiException<PostApiV1ApprovalsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ApprovalsRequest](src/Deliverd/Requests/Approvals/PostApiV1ApprovalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsResponse](src/Deliverd/Models/ApiV1ApprovalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ApprovalsError](src/Deliverd/Errors/PostApiV1ApprovalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ApprovalsAnswersResponse&gt; PostApiV1ApprovalsByIdAnswers(PostApiV1ApprovalsByIdAnswersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only the requester may answer. The answer is shown on the page and the asker is told.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Approvals.PostApiV1ApprovalsByIdAnswers(new PostApiV1ApprovalsByIdAnswersRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1ApprovalsAnswersResponse
}
catch (ApiException<PostApiV1ApprovalsByIdAnswersError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ApprovalsByIdAnswersRequest](src/Deliverd/Requests/Approvals/PostApiV1ApprovalsByIdAnswersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsAnswersResponse](src/Deliverd/Models/ApiV1ApprovalsAnswersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ApprovalsByIdAnswersError](src/Deliverd/Errors/PostApiV1ApprovalsByIdAnswersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ApprovalsCancelResponse&gt; PostApiV1ApprovalsByIdCancel(PostApiV1ApprovalsByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Approvals.PostApiV1ApprovalsByIdCancel(new PostApiV1ApprovalsByIdCancelRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1ApprovalsCancelResponse
}
catch (ApiException<PostApiV1ApprovalsByIdCancelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ApprovalsByIdCancelRequest](src/Deliverd/Requests/Approvals/PostApiV1ApprovalsByIdCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsCancelResponse](src/Deliverd/Models/ApiV1ApprovalsCancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ApprovalsByIdCancelError](src/Deliverd/Errors/PostApiV1ApprovalsByIdCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ApprovalsSessionsResponse&gt; PostApiV1ApprovalsByIdSessions(PostApiV1ApprovalsByIdSessionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decision sessions are how an approval is decided in your own app. `mode: "hosted"` returns a `url` to send the approver to, with an optional `returnUrl` for afterwards (`deliverd_session` and `deliverd_decision` are added to it). `mode: "embedded"` returns a `clientSecret` to mount with https://deliverd.dev/elements/v1.js, framed only by `origin`, which must be on the organisation's embedding allow-list (Organisation → Security → Embedding) or http://localhost while you develop. The `url` and `clientSecret` are returned once. Neither decides anything: the approver signs in, or confirms a code sent to their own address, before the decision bar appears — an API key is still never a person. Needs approvals:write.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Approvals.PostApiV1ApprovalsByIdSessions(new PostApiV1ApprovalsByIdSessionsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1ApprovalsSessionsResponse
}
catch (ApiException<PostApiV1ApprovalsByIdSessionsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ApprovalsByIdSessionsRequest](src/Deliverd/Requests/Approvals/PostApiV1ApprovalsByIdSessionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ApprovalsSessionsResponse](src/Deliverd/Models/ApiV1ApprovalsSessionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ApprovalsByIdSessionsError](src/Deliverd/Errors/PostApiV1ApprovalsByIdSessionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Audiences

> Source: [Audiences](src/Deliverd/Api/Audiences.cs)

<details>
<summary><code>Task&lt;ApiV1AudiencesResolveResponse&gt; PostApiV1AudiencesResolve(PostApiV1AudiencesResolveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiences.PostApiV1AudiencesResolve(new PostApiV1AudiencesResolveRequest());
    // TODO: Handle 'response' of type ApiV1AudiencesResolveResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1AudiencesResolveRequest](src/Deliverd/Requests/Audiences/PostApiV1AudiencesResolveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AudiencesResolveResponse](src/Deliverd/Models/ApiV1AudiencesResolveResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuditEvents

> Source: [AuditEvents](src/Deliverd/Api/AuditEvents.cs)

<details>
<summary><code>Task&lt;ApiV1AuditEventsResponse&gt; GetApiV1AuditEvents(GetApiV1AuditEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The organisation's audit trail, newest first, a page at a time, for a SIEM, a warehouse or an auditor's script. Each entry carries its position in the organisation's hash chain (`chainSeq`), the hash before it (`prevHash`) and its own (`rowHash`). Needs `audit:read` and a key bound to an owner, an administrator or a security administrator, read on every call; an agent key is refused (`403 agent_not_permitted`), as is anybody else (`403 not_permitted`). To tail the log, pass `afterSeq` (the last `chainSeq` you have): entries then come oldest first by chain position, which cannot miss an entry written late with an earlier time, as `since` can. For a live feed, subscribe a webhook endpoint to `audit.event` instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuditEvents.GetApiV1AuditEvents(new GetApiV1AuditEventsRequest());
    // TODO: Handle 'response' of type ApiV1AuditEventsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1AuditEventsRequest](src/Deliverd/Requests/AuditEvents/GetApiV1AuditEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AuditEventsResponse](src/Deliverd/Models/ApiV1AuditEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Collections

> Source: [Collections](src/Deliverd/Api/Collections.cs)

<details>
<summary><code>Task&lt;ApiV1CollectionsResponse1&gt; GetApiV1Collections(GetApiV1CollectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Collections.GetApiV1Collections(new GetApiV1CollectionsRequest());
    // TODO: Handle 'response' of type ApiV1CollectionsResponse1
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CollectionsRequest](src/Deliverd/Requests/Collections/GetApiV1CollectionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CollectionsResponse1](src/Deliverd/Models/ApiV1CollectionsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CollectionsResponse&gt; GetApiV1CollectionsById(GetApiV1CollectionsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Collections.GetApiV1CollectionsById(new GetApiV1CollectionsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1CollectionsResponse
}
catch (ApiException<GetApiV1CollectionsByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CollectionsByIdRequest](src/Deliverd/Requests/Collections/GetApiV1CollectionsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CollectionsResponse](src/Deliverd/Models/ApiV1CollectionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CollectionsByIdError](src/Deliverd/Errors/GetApiV1CollectionsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CollectionsResponse&gt; PostApiV1Collections(PostApiV1CollectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a request and returns the page people fill in. The answers are theirs: read them by polling GET /api/v1/collections/{id}, by the organisation's webhooks (collection.completed), or by the MCP tool get_collection. There is no endpoint that submits an answer — a key is not a person. Respondents are named by email or id and must be active members or guests the organisation already knows; anyone else is refused. Answers are checked against the kind of question that asked for them, and a required question blocks submission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Collections.PostApiV1Collections(new PostApiV1CollectionsRequest());
    // TODO: Handle 'response' of type ApiV1CollectionsResponse
}
catch (ApiException<PostApiV1CollectionsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1CollectionsRequest](src/Deliverd/Requests/Collections/PostApiV1CollectionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CollectionsResponse](src/Deliverd/Models/ApiV1CollectionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1CollectionsError](src/Deliverd/Errors/PostApiV1CollectionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CollectionsCancelResponse&gt; PostApiV1CollectionsByIdCancel(PostApiV1CollectionsByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Collections.PostApiV1CollectionsByIdCancel(new PostApiV1CollectionsByIdCancelRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1CollectionsCancelResponse
}
catch (ApiException<PostApiV1CollectionsByIdCancelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1CollectionsByIdCancelRequest](src/Deliverd/Requests/Collections/PostApiV1CollectionsByIdCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CollectionsCancelResponse](src/Deliverd/Models/ApiV1CollectionsCancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1CollectionsByIdCancelError](src/Deliverd/Errors/PostApiV1CollectionsByIdCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Comments

> Source: [Comments](src/Deliverd/Api/Comments.cs)

<details>
<summary><code>Task&lt;ApiV1CommentsResponse&gt; GetApiV1Comments(GetApiV1CommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

"Is anything waiting on me?", without naming a report first. `GET /reports/{idOrSlug}/comments` answers it one report at a time, which means walking every report to find the two with feedback on them.

Newest activity first, with the quoted passage and who wrote it — fetch the thread itself from the report's own endpoint once you know where to look. Threads on archived reports are left out: the URL does not serve, so nothing can be done about them until it is unarchived.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Comments.GetApiV1Comments(new GetApiV1CommentsRequest());
    // TODO: Handle 'response' of type ApiV1CommentsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CommentsRequest](src/Deliverd/Requests/Comments/GetApiV1CommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentsResponse](src/Deliverd/Models/ApiV1CommentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1CommentsByThreadIdResolve(PostApiV1CommentsByThreadIdResolveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a thread resolved, or reopens it with `reopen`. The note is for the reader who raised it, so say what changed rather than that it was handled — resolving without a new version is allowed and is worth explaining when you do it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Comments.PostApiV1CommentsByThreadIdResolve(new PostApiV1CommentsByThreadIdResolveRequest
    {
        ThreadId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1CommentsByThreadIdResolveRequest](src/Deliverd/Requests/Comments/PostApiV1CommentsByThreadIdResolveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DecisionSessions

> Source: [DecisionSessions](src/Deliverd/Api/DecisionSessions.cs)

<details>
<summary><code>Task&lt;ApiV1DecisionSessionsResponse&gt; GetApiV1DecisionSessionsById(GetApiV1DecisionSessionsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`open`, `verified` (the approver confirmed who they are), `complete` (they decided, here or anywhere else) or `expired`, with their decision and the request's own status. Never the secret. Needs approvals:read.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionSessions.GetApiV1DecisionSessionsById(new GetApiV1DecisionSessionsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1DecisionSessionsResponse
}
catch (ApiException<GetApiV1DecisionSessionsByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DecisionSessionsByIdRequest](src/Deliverd/Requests/DecisionSessions/GetApiV1DecisionSessionsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DecisionSessionsResponse](src/Deliverd/Models/ApiV1DecisionSessionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DecisionSessionsByIdError](src/Deliverd/Errors/GetApiV1DecisionSessionsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1DecisionSessionsExpireResponse&gt; PostApiV1DecisionSessionsByIdExpire(PostApiV1DecisionSessionsByIdExpireRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A decision already made through it stays made. Needs approvals:write.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DecisionSessions.PostApiV1DecisionSessionsByIdExpire(
        new PostApiV1DecisionSessionsByIdExpireRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type ApiV1DecisionSessionsExpireResponse
}
catch (ApiException<PostApiV1DecisionSessionsByIdExpireError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DecisionSessionsByIdExpireRequest](src/Deliverd/Requests/DecisionSessions/PostApiV1DecisionSessionsByIdExpireRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DecisionSessionsExpireResponse](src/Deliverd/Models/ApiV1DecisionSessionsExpireResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DecisionSessionsByIdExpireError](src/Deliverd/Errors/PostApiV1DecisionSessionsByIdExpireError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Drafts

> Source: [Drafts](src/Deliverd/Api/Drafts.cs)

<details>
<summary><code>Task&lt;ApiV1DraftsResponse&gt; PostApiV1Drafts(PostApiV1DraftsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an AI with no Deliverd connection. Send an HTML document (JSON `{ html, title?, sourceTool? }` or a raw `text/html` body) and give the person the `claimUrl` that comes back. They sign in, or create a free account, and publish it with one click; it is private to them until they share it. Nothing is served from a draft before then. Drafts are scanned for credentials, capped at 2 MB, rate limited per address, single use, and expire after 24 hours. Answers `413 too_large`, `422 scan_blocked` or `429 rate_limited` when refused.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Drafts.PostApiV1Drafts(new PostApiV1DraftsRequest());
    // TODO: Handle 'response' of type ApiV1DraftsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DraftsRequest](src/Deliverd/Requests/Drafts/PostApiV1DraftsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1DraftsResponse](src/Deliverd/Models/ApiV1DraftsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Evidence

> Source: [Evidence](src/Deliverd/Api/Evidence.cs)

<details>
<summary><code>Task&lt;ApiV1EvidenceVerifyResponse&gt; PostApiV1EvidenceVerify(PostApiV1EvidenceVerifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send an evidence pack exactly as the JSON export produced it. The answer says whether its digest recomputes (the file matches itself) and whether its Ed25519 signature checks out against this deployment's current key, published at `/.well-known/deliverd-evidence-key`. Nothing is stored. `deliverd verify ` makes the same check offline, which does not rely on asking us.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Evidence.PostApiV1EvidenceVerify(new PostApiV1EvidenceVerifyRequest());
    // TODO: Handle 'response' of type ApiV1EvidenceVerifyResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1EvidenceVerifyRequest](src/Deliverd/Requests/Evidence/PostApiV1EvidenceVerifyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EvidenceVerifyResponse](src/Deliverd/Models/ApiV1EvidenceVerifyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Flows

> Source: [Flows](src/Deliverd/Api/Flows.cs)

<details>
<summary><code>Task&lt;ApiV1FlowsResponse1&gt; GetApiV1Flows(GetApiV1FlowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Flows.GetApiV1Flows(new GetApiV1FlowsRequest());
    // TODO: Handle 'response' of type ApiV1FlowsResponse1
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1FlowsRequest](src/Deliverd/Requests/Flows/GetApiV1FlowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FlowsResponse1](src/Deliverd/Models/ApiV1FlowsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1FlowsResponse&gt; GetApiV1FlowsById(GetApiV1FlowsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The timeline is every audited step across the flow and everything in it, in the order it happened. allSettled says nothing is outstanding right now; it is not a claim that the work is finished, because a flow is extended as it goes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Flows.GetApiV1FlowsById(new GetApiV1FlowsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1FlowsResponse
}
catch (ApiException<GetApiV1FlowsByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1FlowsByIdRequest](src/Deliverd/Requests/Flows/GetApiV1FlowsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FlowsResponse](src/Deliverd/Models/ApiV1FlowsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1FlowsByIdError](src/Deliverd/Errors/GetApiV1FlowsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1FlowsByIdEvidence(GetApiV1FlowsByIdEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The whole record of one piece of work: every approval, review and request for information with who was asked and what they said, the report's version history, and the timeline across all of it. Requires reports:read, approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Flows.GetApiV1FlowsByIdEvidence(new GetApiV1FlowsByIdEvidenceRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<GetApiV1FlowsByIdEvidenceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1FlowsByIdEvidenceRequest](src/Deliverd/Requests/Flows/GetApiV1FlowsByIdEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1FlowsByIdEvidenceError](src/Deliverd/Errors/GetApiV1FlowsByIdEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1FlowsResponse&gt; PostApiV1Flows(PostApiV1FlowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A flow groups the approvals, reviews, collections and reports that belong to one job, so the history reads as one sequence rather than four unrelated tables. Nothing is attached here — a member joins by naming flowId when it is created. It is a grouping and not a scheduler: nothing waits on a flow and nothing is blocked by one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Flows.PostApiV1Flows(new PostApiV1FlowsRequest());
    // TODO: Handle 'response' of type ApiV1FlowsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1FlowsRequest](src/Deliverd/Requests/Flows/PostApiV1FlowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FlowsResponse](src/Deliverd/Models/ApiV1FlowsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1FlowsCancelResponse&gt; PostApiV1FlowsByIdCancel(PostApiV1FlowsByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The flow and its members stay as evidence of what was started and dropped. Cancelling a flow cancels nothing inside it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Flows.PostApiV1FlowsByIdCancel(new PostApiV1FlowsByIdCancelRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1FlowsCancelResponse
}
catch (ApiException<PostApiV1FlowsByIdCancelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1FlowsByIdCancelRequest](src/Deliverd/Requests/Flows/PostApiV1FlowsByIdCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FlowsCancelResponse](src/Deliverd/Models/ApiV1FlowsCancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1FlowsByIdCancelError](src/Deliverd/Errors/PostApiV1FlowsByIdCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1FlowsCompleteResponse&gt; PostApiV1FlowsByIdComplete(PostApiV1FlowsByIdCompleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only whoever started the flow may, and it stops taking new members. Allowed with members still outstanding; how many is recorded and sent with the flow.completed event.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Flows.PostApiV1FlowsByIdComplete(new PostApiV1FlowsByIdCompleteRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1FlowsCompleteResponse
}
catch (ApiException<PostApiV1FlowsByIdCompleteError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1FlowsByIdCompleteRequest](src/Deliverd/Requests/Flows/PostApiV1FlowsByIdCompleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1FlowsCompleteResponse](src/Deliverd/Models/ApiV1FlowsCompleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1FlowsByIdCompleteError](src/Deliverd/Errors/PostApiV1FlowsByIdCompleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Gates

> Source: [Gates](src/Deliverd/Api/Gates.cs)

<details>
<summary><code>Task&lt;ApiV1GatesResponse&gt; GetApiV1GatesById(GetApiV1GatesByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gates.GetApiV1GatesById(new GetApiV1GatesByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1GatesResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GatesByIdRequest](src/Deliverd/Requests/Gates/GetApiV1GatesByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesResponse](src/Deliverd/Models/ApiV1GatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1GatesByIdEvidence(GetApiV1GatesByIdEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The act, the policy, the scope, who was asked and under what authority, what each said, what the agent reported, and in words what Deliverd did not check. `?format=csv` is the timeline alone. Needs `approvals:read` as well.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gates.GetApiV1GatesByIdEvidence(new GetApiV1GatesByIdEvidenceRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GatesByIdEvidenceRequest](src/Deliverd/Requests/Gates/GetApiV1GatesByIdEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1GatesResponse&gt; PostApiV1Gates(PostApiV1GatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Declare the action you are about to perform and the arguments you will perform it with; your organisation's policy answers. Three outcomes, one field to branch on: `allowed: true` with status `allowed` (a rule permitted it), `allowed: false` with status `denied` (a rule refused it, and `reason` says which), or status `pending` — nobody has decided yet, an ordinary approval has been raised, and `GET /gates/{id}` or the SDK's `wait()` will tell you. A denial is 200, not 403: it is a result you act on, not an error — an agent told no behaved correctly by asking. Fails closed throughout: an unregistered action, input its schema does not describe, and a policy that cannot be read all refuse or ask a person. `externalId` is required, unlike every other POST here. A random per-attempt key protects a retried HTTP request but not a retried decision, and a crashed agent re-running its refund step would otherwise raise a second approval for the same money — only you know which two calls are the same unit of work. An agent key is welcome: registering actions and writing policy both refuse one, but an agent calling this is submitting to the rule rather than writing it. Since 0087 a gate is also a scoped permission: name the `destination`, the `artifact` and the `classification`, and the answer carries `decision` (ALLOW, APPROVAL_REQUIRED, REVIEW_REQUIRED, DENY), `canExecute`, and the window and use count of the permission. An approval covers that scope and nothing else. `canExecute: true` is the organisation's authorisation only: the platform the agent runs on may still ask for confirmation or refuse.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gates.PostApiV1Gates(new PostApiV1GatesRequest());
    // TODO: Handle 'response' of type ApiV1GatesResponse
}
catch (ApiException<PostApiV1GatesError> ex)
{
    if (ex.Error.TryGetApiV1Gates423Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Gates423Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1GatesRequest](src/Deliverd/Requests/Gates/PostApiV1GatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesResponse](src/Deliverd/Models/ApiV1GatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1GatesError](src/Deliverd/Errors/PostApiV1GatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1GatesCancelResponse&gt; PostApiV1GatesByIdCancel(PostApiV1GatesByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Withdraw a request still waiting on a person, or a permission you have not used. Only the agent that asked may. A used permission cannot be withdrawn.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gates.PostApiV1GatesByIdCancel(new PostApiV1GatesByIdCancelRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1GatesCancelResponse
}
catch (ApiException<PostApiV1GatesByIdCancelError> ex)
{
    if (ex.Error.TryGetApiV1GatesCancel403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1GatesCancel403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1GatesByIdCancelRequest](src/Deliverd/Requests/Gates/PostApiV1GatesByIdCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesCancelResponse](src/Deliverd/Models/ApiV1GatesCancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1GatesByIdCancelError](src/Deliverd/Errors/PostApiV1GatesByIdCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1GatesExecutionResponse&gt; PostApiV1GatesByIdExecution(PostApiV1GatesByIdExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`started` claims a use before you act; `completed` or `failed` finishes that claim. A `completed` with no `claimId` claims and reports in one. Checked against what was authorised: another artifact hash is `approval_invalidated`, another destination is `destination_mismatch`. A spent, lapsed, revoked or withdrawn permission is refused with a code saying which. What you report is recorded as your report: `hash_matched` when Deliverd checked the hash, `reported` when there was nothing to check; `verified` is reserved for acts Deliverd performed itself.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gates.PostApiV1GatesByIdExecution(new PostApiV1GatesByIdExecutionRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1GatesExecutionResponse
}
catch (ApiException<PostApiV1GatesByIdExecutionError> ex)
{
    if (ex.Error.TryGetApiV1GatesExecution403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1GatesExecution403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1GatesByIdExecutionRequest](src/Deliverd/Requests/Gates/PostApiV1GatesByIdExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesExecutionResponse](src/Deliverd/Models/ApiV1GatesExecutionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1GatesByIdExecutionError](src/Deliverd/Errors/PostApiV1GatesByIdExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1GatesReleaseResponse&gt; PostApiV1GatesByIdRelease(PostApiV1GatesByIdReleaseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The staged report version the gate names goes live, if the gate still authorises it and the report lives where the gate said. The organisation's publishing policy still applies: a hold is satisfied only by a gate a person approved. The receipt is `verified` — Deliverd did it. Needs `reports:write` as well.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gates.PostApiV1GatesByIdRelease(new PostApiV1GatesByIdReleaseRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1GatesReleaseResponse
}
catch (ApiException<PostApiV1GatesByIdReleaseError> ex)
{
    if (ex.Error.TryGetApiV1GatesRelease403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1GatesRelease403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1GatesByIdReleaseRequest](src/Deliverd/Requests/Gates/PostApiV1GatesByIdReleaseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesReleaseResponse](src/Deliverd/Models/ApiV1GatesReleaseResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1GatesByIdReleaseError](src/Deliverd/Errors/PostApiV1GatesByIdReleaseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1GatesVerifyTokenResponse&gt; PostApiV1GatesVerifyToken(PostApiV1GatesVerifyTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Whether a gate's `decisionToken` is this deployment's signature over this action and input, for your organisation, and unexpired. For a call site with no verifier of its own: the TypeScript and Python SDKs check locally with the key at `/.well-known/deliverd-evidence-key`. A refused token is a 200 with `valid: false` and the `reason`. It does not spend a use: report the execution for that.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gates.PostApiV1GatesVerifyToken(new PostApiV1GatesVerifyTokenRequest());
    // TODO: Handle 'response' of type ApiV1GatesVerifyTokenResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1GatesVerifyTokenRequest](src/Deliverd/Requests/Gates/PostApiV1GatesVerifyTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GatesVerifyTokenResponse](src/Deliverd/Models/ApiV1GatesVerifyTokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GovernanceApi

> Source: [GovernanceApi](src/Deliverd/Api/GovernanceApi.cs)

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1GovernanceFrameworks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The built-in packs (NIST AI RMF, ISO/IEC 42001, EU AI Act, UK AI principles, DORA, SR 26-2, PRA SS1/23 and FCA AI good practice) with their requirements and versions, the organisation's own frameworks, and which are applied at which version. A pack maps requirements onto controls for review; it is not legal advice.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.GetApiV1GovernanceFrameworks();
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1GovernanceFrameworksMapping(GetApiV1GovernanceFrameworksMappingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With `taskId`, how far that governed task's completed controls cover each requirement. A mapping, never a compliance verdict.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.GetApiV1GovernanceFrameworksMapping(
        new GetApiV1GovernanceFrameworksMappingRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GovernanceFrameworksMappingRequest](src/Deliverd/Requests/GovernanceApi/GetApiV1GovernanceFrameworksMappingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1GovernanceIctRegister(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DORA's register of information, for the providers behind the organisation's AI systems: who keeps it (`entity`), the `providers`, the `arrangements` (contracts) with the AI systems that run under each, what each entry still lacks (`gaps`), the `concentration` on each provider, and the AI systems not yet in the register.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.GetApiV1GovernanceIctRegister();
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1GovernanceIctRegisterExport(GetApiV1GovernanceIctRegisterExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

B_01.01, B_02.01, B_02.02, B_05.01, B_06.01 and B_07.01 of Implementing Regulation (EU) 2024/2956, with the regulation's column codes. JSON is every template (or `template`) with its columns and rows; `format=csv` is one template, headed by its column codes. Values nobody recorded are empty. For the organisation's own register to take in, not the submission itself.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.GetApiV1GovernanceIctRegisterExport(
        new GetApiV1GovernanceIctRegisterExportRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<GetApiV1GovernanceIctRegisterExportError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GovernanceIctRegisterExportRequest](src/Deliverd/Requests/GovernanceApi/GetApiV1GovernanceIctRegisterExportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1GovernanceIctRegisterExportError](src/Deliverd/Errors/GetApiV1GovernanceIctRegisterExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1GovernanceIncidentsResponse&gt; GetApiV1GovernanceIncidents(GetApiV1GovernanceIncidentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paged with `limit` and `cursor`; `nextCursor` is null at the end. Incidents against a task you cannot read are left out.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.GetApiV1GovernanceIncidents(new GetApiV1GovernanceIncidentsRequest());
    // TODO: Handle 'response' of type ApiV1GovernanceIncidentsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GovernanceIncidentsRequest](src/Deliverd/Requests/GovernanceApi/GetApiV1GovernanceIncidentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1GovernanceIncidentsResponse](src/Deliverd/Models/ApiV1GovernanceIncidentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1GovernanceIncidentsById(GetApiV1GovernanceIncidentsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The incident, its DORA classification (`dora`: the facts, `major`, each criterion and the reason), its reports with their sign-off status, and `schedule`: which report is due next and by when. Nothing is due unless it is classified major.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.GetApiV1GovernanceIncidentsById(new GetApiV1GovernanceIncidentsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<GetApiV1GovernanceIncidentsByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GovernanceIncidentsByIdRequest](src/Deliverd/Requests/GovernanceApi/GetApiV1GovernanceIncidentsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1GovernanceIncidentsByIdError](src/Deliverd/Errors/GetApiV1GovernanceIncidentsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1GovernancePolicies(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Governed tasks record the version they were evaluated against. Publishing a version is done by a person in Deliverd.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.GetApiV1GovernancePolicies();
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1GovernanceSummary(GetApiV1GovernanceSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Systems, governed tasks, outstanding controls, pending approvals, expired exceptions, open incidents and what needs review. `jurisdiction` and `framework` filters are Enterprise. Never a compliance percentage.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.GetApiV1GovernanceSummary(new GetApiV1GovernanceSummaryRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<GetApiV1GovernanceSummaryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1GovernanceSummaryRequest](src/Deliverd/Requests/GovernanceApi/GetApiV1GovernanceSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1GovernanceSummaryError](src/Deliverd/Errors/GetApiV1GovernanceSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1GovernanceAuthorityEvaluate(PostApiV1GovernanceAuthorityEvaluateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. By the organisation's authority policy and the agent's own, which can only be stricter. `mode` is allowed, approval or denied. Records nothing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.PostApiV1GovernanceAuthorityEvaluate(
        new PostApiV1GovernanceAuthorityEvaluateRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1GovernanceAuthorityEvaluateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1GovernanceAuthorityEvaluateRequest](src/Deliverd/Requests/GovernanceApi/PostApiV1GovernanceAuthorityEvaluateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1GovernanceAuthorityEvaluateError](src/Deliverd/Errors/PostApiV1GovernanceAuthorityEvaluateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1GovernanceFrameworks(PostApiV1GovernanceFrameworksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. Saved as a draft; it applies only once a person publishes and adopts it. A published version is never edited — a change is a new version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.PostApiV1GovernanceFrameworks(new PostApiV1GovernanceFrameworksRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1GovernanceFrameworksError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1GovernanceFrameworksRequest](src/Deliverd/Requests/GovernanceApi/PostApiV1GovernanceFrameworksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1GovernanceFrameworksError](src/Deliverd/Errors/PostApiV1GovernanceFrameworksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1GovernanceIncidents(PostApiV1GovernanceIncidentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Against a governed task, an AI system, or both. High or critical closes the task's governance gate until a person resolves it. Permanent: it cannot be edited or withdrawn.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.PostApiV1GovernanceIncidents(new PostApiV1GovernanceIncidentsRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1GovernanceIncidentsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1GovernanceIncidentsRequest](src/Deliverd/Requests/GovernanceApi/PostApiV1GovernanceIncidentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1GovernanceIncidentsError](src/Deliverd/Errors/PostApiV1GovernanceIncidentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1GovernanceIncidentsByIdReports(PostApiV1GovernanceIncidentsByIdReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

initial, intermediate or final on a major incident, in that order; or reclassification, for one notified as major and now not. Creates an approval for a person to sign it off. Needs approvals:write as well as tasks:write.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GovernanceApi.PostApiV1GovernanceIncidentsByIdReports(
        new PostApiV1GovernanceIncidentsByIdReportsRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1GovernanceIncidentsByIdReportsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1GovernanceIncidentsByIdReportsRequest](src/Deliverd/Requests/GovernanceApi/PostApiV1GovernanceIncidentsByIdReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1GovernanceIncidentsByIdReportsError](src/Deliverd/Errors/PostApiV1GovernanceIncidentsByIdReportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Knowledge

> Source: [Knowledge](src/Deliverd/Api/Knowledge.cs)

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1Knowledge(GetApiV1KnowledgeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ranked by relevance to `q`, or newest first without it. Confirmed entries unless `status` says otherwise: only those are to be relied on. `more` is true when the list was cut at `limit`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Knowledge.GetApiV1Knowledge(new GetApiV1KnowledgeRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1KnowledgeRequest](src/Deliverd/Requests/Knowledge/GetApiV1KnowledgeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; GetApiV1KnowledgeAgentsMd(GetApiV1KnowledgeAgentsMdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For a tool that reads files rather than calling tools. A snapshot that says where the live version is.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Knowledge.GetApiV1KnowledgeAgentsMd(new GetApiV1KnowledgeAgentsMdRequest());
    // TODO: Handle 'response' of type string
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1KnowledgeAgentsMdRequest](src/Deliverd/Requests/Knowledge/GetApiV1KnowledgeAgentsMdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1KnowledgeById(GetApiV1KnowledgeByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Knowledge.GetApiV1KnowledgeById(new GetApiV1KnowledgeByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<GetApiV1KnowledgeByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1KnowledgeByIdRequest](src/Deliverd/Requests/Knowledge/GetApiV1KnowledgeByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1KnowledgeByIdError](src/Deliverd/Errors/GetApiV1KnowledgeByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; GetApiV1KnowledgeExport(GetApiV1KnowledgeExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything the caller may see, as Markdown that imports back (the default) or JSON. Audited.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Knowledge.GetApiV1KnowledgeExport(new GetApiV1KnowledgeExportRequest());
    // TODO: Handle 'response' of type string
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1KnowledgeExportRequest](src/Deliverd/Requests/Knowledge/GetApiV1KnowledgeExportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PatchApiV1KnowledgeById(PatchApiV1KnowledgeByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only while it is proposed, and only by a person or the agent that proposed it. A confirmed entry's words never change: propose a revision.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Knowledge.PatchApiV1KnowledgeById(new PatchApiV1KnowledgeByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PatchApiV1KnowledgeByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatchApiV1KnowledgeByIdRequest](src/Deliverd/Requests/Knowledge/PatchApiV1KnowledgeByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PatchApiV1KnowledgeByIdError](src/Deliverd/Errors/PatchApiV1KnowledgeByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1Knowledge(PostApiV1KnowledgeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A proposal until a person confirms it in Deliverd; no key confirms anything. A secret is refused; personal data is said back as `screening`. With `supersedesId` it is a revision that replaces the confirmed entry once confirmed. With `externalId`, an open entry under the same one is returned instead (`resumed: true`, status 200).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Knowledge.PostApiV1Knowledge(new PostApiV1KnowledgeRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1KnowledgeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1KnowledgeRequest](src/Deliverd/Requests/Knowledge/PostApiV1KnowledgeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1KnowledgeError](src/Deliverd/Errors/PostApiV1KnowledgeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1KnowledgeImport(PostApiV1KnowledgeImportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A Deliverd export, or a notes file an agent tool keeps (AGENTS.md, CLAUDE.md): each heading becomes one proposed entry. Entries already there by title or id are skipped and said so.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Knowledge.PostApiV1KnowledgeImport(new PostApiV1KnowledgeImportRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1KnowledgeImportError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1KnowledgeImportRequest](src/Deliverd/Requests/Knowledge/PostApiV1KnowledgeImportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1KnowledgeImportError](src/Deliverd/Errors/PostApiV1KnowledgeImportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Playbooks

> Source: [Playbooks](src/Deliverd/Api/Playbooks.cs)

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1Playbooks(GetApiV1PlaybooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One row per playbook: its newest version, and `inForce`, the version that runs. Approved prompts are playbooks of `kind` prompt; `?kind=` keeps one or the other.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playbooks.GetApiV1Playbooks(new GetApiV1PlaybooksRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1PlaybooksRequest](src/Deliverd/Requests/Playbooks/GetApiV1PlaybooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1PlaybooksById(GetApiV1PlaybooksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playbooks.GetApiV1PlaybooksById(new GetApiV1PlaybooksByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<GetApiV1PlaybooksByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1PlaybooksByIdRequest](src/Deliverd/Requests/Playbooks/GetApiV1PlaybooksByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1PlaybooksByIdError](src/Deliverd/Errors/GetApiV1PlaybooksByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PatchApiV1PlaybooksById(PatchApiV1PlaybooksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only before it has been put to anybody. After that, draft the next version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playbooks.PatchApiV1PlaybooksById(new PatchApiV1PlaybooksByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PatchApiV1PlaybooksByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatchApiV1PlaybooksByIdRequest](src/Deliverd/Requests/Playbooks/PatchApiV1PlaybooksByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PatchApiV1PlaybooksByIdError](src/Deliverd/Errors/PatchApiV1PlaybooksByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1Playbooks(PostApiV1PlaybooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Steps, each with the rule that applies before it acts: `none`, `gate` (with the `action` to check), `approval` or `review`. Or `prompt` instead of steps, for an approved prompt: its words with `{input}` placeholders, an owner and a review date. Nobody runs a draft: a governing person publishes it in the app, or an approval of it is approved.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playbooks.PostApiV1Playbooks(new PostApiV1PlaybooksRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1PlaybooksError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PlaybooksRequest](src/Deliverd/Requests/Playbooks/PostApiV1PlaybooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1PlaybooksError](src/Deliverd/Errors/PostApiV1PlaybooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1PlaybooksByIdApproval(PostApiV1PlaybooksByIdApprovalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A Deliverd approval of the playbook; approved, it goes in force. Needs `approvals:write` and `tasks:write`. Its content is fixed from here.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playbooks.PostApiV1PlaybooksByIdApproval(new PostApiV1PlaybooksByIdApprovalRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1PlaybooksByIdApprovalError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PlaybooksByIdApprovalRequest](src/Deliverd/Requests/Playbooks/PostApiV1PlaybooksByIdApprovalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1PlaybooksByIdApprovalError](src/Deliverd/Errors/PostApiV1PlaybooksByIdApprovalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1PlaybooksByIdStart(PostApiV1PlaybooksByIdStartRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the version in force as an objective, with a side task per step holding its instruction and the call its rule needs. Naming an older version runs the one in force (`ranOlderVersion`). Missing required inputs are refused with `details.missingInputs`. With `externalId`, an open run is returned instead (status 200).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playbooks.PostApiV1PlaybooksByIdStart(new PostApiV1PlaybooksByIdStartRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1PlaybooksByIdStartError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PlaybooksByIdStartRequest](src/Deliverd/Requests/Playbooks/PostApiV1PlaybooksByIdStartRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1PlaybooksByIdStartError](src/Deliverd/Errors/PostApiV1PlaybooksByIdStartError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1PlaybooksByIdUse(PostApiV1PlaybooksByIdUseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The version in force of the prompt, with the inputs put in, and its limitations. Each use is recorded against the version. Naming an older version hands out the one in force (`ranOlderVersion`). Required inputs not given are listed in `missingInputs` and their placeholders left in the words. Needs `tasks:read`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playbooks.PostApiV1PlaybooksByIdUse(new PostApiV1PlaybooksByIdUseRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1PlaybooksByIdUseError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PlaybooksByIdUseRequest](src/Deliverd/Requests/Playbooks/PostApiV1PlaybooksByIdUseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1PlaybooksByIdUseError](src/Deliverd/Errors/PostApiV1PlaybooksByIdUseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1PlaybooksByIdVersions(PostApiV1PlaybooksByIdVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The version in force keeps running until this one is put in force.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playbooks.PostApiV1PlaybooksByIdVersions(new PostApiV1PlaybooksByIdVersionsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1PlaybooksByIdVersionsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PlaybooksByIdVersionsRequest](src/Deliverd/Requests/Playbooks/PostApiV1PlaybooksByIdVersionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1PlaybooksByIdVersionsError](src/Deliverd/Errors/PostApiV1PlaybooksByIdVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Policies

> Source: [Policies](src/Deliverd/Api/Policies.cs)

<details>
<summary><code>Task&lt;ApiV1PoliciesResponse1&gt; GetApiV1Policies(GetApiV1PoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.GetApiV1Policies(new GetApiV1PoliciesRequest());
    // TODO: Handle 'response' of type ApiV1PoliciesResponse1
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1PoliciesRequest](src/Deliverd/Requests/Policies/GetApiV1PoliciesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesResponse1](src/Deliverd/Models/ApiV1PoliciesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PoliciesResponse&gt; PostApiV1Policies(PostApiV1PoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A policy is an identity that survives editing; a version is an immutable rule set. Pass `rules` to store them as version 1 and `activate: true` to put that version in force, so a push is one request rather than three that can fail between each other. Not an upsert, unlike registering an action: a second policy of the same name is refused, because overwriting one would silently replace the rules an organisation is running under. The key's holder must be an owner or an administrator — writing a rule is how authority is granted, so the scope alone is not enough — and an agent principal is refused outright, since policy decides whether an agent needs a person.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.PostApiV1Policies(new PostApiV1PoliciesRequest());
    // TODO: Handle 'response' of type ApiV1PoliciesResponse
}
catch (ApiException<PostApiV1PoliciesError> ex)
{
    if (ex.Error.TryGetApiV1Policies400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Policies400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PoliciesRequest](src/Deliverd/Requests/Policies/PostApiV1PoliciesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesResponse](src/Deliverd/Models/ApiV1PoliciesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1PoliciesError](src/Deliverd/Errors/PostApiV1PoliciesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PoliciesActivateResponse&gt; PostApiV1PoliciesByIdActivate(PostApiV1PoliciesByIdActivateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Supersedes whichever version was active. A superseded version cannot be revived: copy its rules into a new version instead, because bringing one back would change what every decision pointing at it meant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.PostApiV1PoliciesByIdActivate(new PostApiV1PoliciesByIdActivateRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1PoliciesActivateResponse
}
catch (ApiException<PostApiV1PoliciesByIdActivateError> ex)
{
    if (ex.Error.TryGetApiV1PoliciesActivate403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PoliciesActivate403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PoliciesByIdActivateRequest](src/Deliverd/Requests/Policies/PostApiV1PoliciesByIdActivateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesActivateResponse](src/Deliverd/Models/ApiV1PoliciesActivateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1PoliciesByIdActivateError](src/Deliverd/Errors/PostApiV1PoliciesByIdActivateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PoliciesVersionsResponse&gt; PostApiV1PoliciesByIdVersions(PostApiV1PoliciesByIdVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The whole rule set, not a patch — a version has to be readable on its own, because it is what a past decision points at. It lands as a draft unless `activate` is set. Rules are validated against the action registry now rather than at activation: a condition naming a field the action's schema does not declare is refused here, since a rule that silently matches nothing looks exactly like one that has not fired yet. A version that has been in force can never be edited — the database refuses it, not only this endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.PostApiV1PoliciesByIdVersions(new PostApiV1PoliciesByIdVersionsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1PoliciesVersionsResponse
}
catch (ApiException<PostApiV1PoliciesByIdVersionsError> ex)
{
    if (ex.Error.TryGetApiV1PoliciesVersions400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PoliciesVersions400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PoliciesByIdVersionsRequest](src/Deliverd/Requests/Policies/PostApiV1PoliciesByIdVersionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesVersionsResponse](src/Deliverd/Models/ApiV1PoliciesVersionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1PoliciesByIdVersionsError](src/Deliverd/Errors/PostApiV1PoliciesByIdVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PoliciesReplayResponse&gt; PostApiV1PoliciesReplay(PostApiV1PoliciesReplayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-evaluates the organisation's recorded gate requests from the last `days` (default 30, newest 5,000) twice: under the rules in force, and with the proposal standing in for its policy's version in force. The proposal is a stored version (`policyId` and `version`) or a policy file not yet pushed (`name` and `rules`). Reports how many decisions change and which way, and the requests a person rejected that would now be allowed. `fail` applies `failOn`, for CI. Policy rules only: ethics checks are not replayed. Nothing is written.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.PostApiV1PoliciesReplay(new PostApiV1PoliciesReplayRequest());
    // TODO: Handle 'response' of type ApiV1PoliciesReplayResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PoliciesReplayRequest](src/Deliverd/Requests/Policies/PostApiV1PoliciesReplayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesReplayResponse](src/Deliverd/Models/ApiV1PoliciesReplayResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PoliciesSimulateResponse&gt; PostApiV1PoliciesSimulate(PostApiV1PoliciesSimulateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates a request against the rules in force and returns the decision and the rule that made it. Not scoped to one policy, because enforcement flattens every active version into one rule set and takes the first decisive rule by priority — simulating one policy in isolation would report that its rule fires when a higher-priority deny elsewhere is what a real request would meet. It runs the same evaluation enforcement runs, so the action must exist and the input must satisfy its schema here exactly as in production. Nothing is recorded: a simulation that wrote a decision row would put invented traffic into the autonomy rate.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.PostApiV1PoliciesSimulate(new PostApiV1PoliciesSimulateRequest());
    // TODO: Handle 'response' of type ApiV1PoliciesSimulateResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PoliciesSimulateRequest](src/Deliverd/Requests/Policies/PostApiV1PoliciesSimulateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesSimulateResponse](src/Deliverd/Models/ApiV1PoliciesSimulateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PoliciesTestResponse&gt; PostApiV1PoliciesTest(PostApiV1PoliciesTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates each test case against the proposal, with every other policy in force as it is, after validating its input against the action's schema as a real request would be. A case passes when the effect, and the deciding rule when `expect.rule` is given, match. Nothing is written.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.PostApiV1PoliciesTest(new PostApiV1PoliciesTestRequest());
    // TODO: Handle 'response' of type ApiV1PoliciesTestResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1PoliciesTestRequest](src/Deliverd/Requests/Policies/PostApiV1PoliciesTestRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PoliciesTestResponse](src/Deliverd/Models/ApiV1PoliciesTestResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/Deliverd/Api/Reports.cs)

<details>
<summary><code>Task&lt;ApiV1ReportsCommentsResponse2&gt; DeleteApiV1ReportsByIdOrSlugCommentsByCommentId(DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Take back a comment this credential posted. Your own last comment in a thread, while the thread is open: once somebody has replied it stays, so their reply is never left answering something no longer on the page. Retracting the only comment in a thread takes the thread and its highlight with it, and removes any images attached to the comment. It unsends nothing — the report's owner may have been emailed when it was posted. `commentId` comes from the `POST` above or from `GET /reports/{idOrSlug}/comments`, which marks the one message this credential can still take back.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentId(
        new DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest
        {
            IdOrSlug = "some example string",
            CommentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type ApiV1ReportsCommentsResponse2
}
catch (ApiException<DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest](src/Deliverd/Requests/Reports/DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsCommentsResponse2](src/Deliverd/Models/ApiV1ReportsCommentsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError](src/Deliverd/Errors/DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteApiV1ReportsByIdOrSlugDataByName(DeleteApiV1ReportsByIdOrSlugDataByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Reports.DeleteApiV1ReportsByIdOrSlugDataByName(new DeleteApiV1ReportsByIdOrSlugDataByNameRequest
    {
        IdOrSlug = "some example string",
        Name = "some example string",
    });
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1ReportsByIdOrSlugDataByNameRequest](src/Deliverd/Requests/Reports/DeleteApiV1ReportsByIdOrSlugDataByNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsShareResponse1&gt; DeleteApiV1ReportsByIdOrSlugShare(DeleteApiV1ReportsByIdOrSlugShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Take access away from the same audience phrase that granted it. By audience rather than by grant id because that is all a caller has: the audience on `GET /reports/{idOrSlug}` carries each grant's *principal* id, never the grant row's. The owner's access cannot be revoked, and an audience that never had access is a refusal rather than a no-op — a caller told "revoked" for a grant that was not there would report the door shut while it is open.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.DeleteApiV1ReportsByIdOrSlugShare(new DeleteApiV1ReportsByIdOrSlugShareRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsShareResponse1
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1ReportsByIdOrSlugShareRequest](src/Deliverd/Requests/Reports/DeleteApiV1ReportsByIdOrSlugShareRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsShareResponse1](src/Deliverd/Models/ApiV1ReportsShareResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsResponse&gt; GetApiV1Reports(GetApiV1ReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetApiV1Reports(new GetApiV1ReportsRequest());
    // TODO: Handle 'response' of type ApiV1ReportsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ReportsRequest](src/Deliverd/Requests/Reports/GetApiV1ReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsResponse](src/Deliverd/Models/ApiV1ReportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsResponse4&gt; GetApiV1ReportsByIdOrSlug(GetApiV1ReportsByIdOrSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetApiV1ReportsByIdOrSlug(new GetApiV1ReportsByIdOrSlugRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsResponse4
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ReportsByIdOrSlugRequest](src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsResponse4](src/Deliverd/Models/ApiV1ReportsResponse4.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsAnalyticsResponse&gt; GetApiV1ReportsByIdOrSlugAnalytics(GetApiV1ReportsByIdOrSlugAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The same figures the report page shows. Total views are on every plan; unique, internal and external viewers, the 30-day series, per-version views and recent readers need the analytics entitlement and come back null or empty without it. Reader names appear only when the organisation's sharing policy shows viewer identities.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetApiV1ReportsByIdOrSlugAnalytics(new GetApiV1ReportsByIdOrSlugAnalyticsRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsAnalyticsResponse
}
catch (ApiException<GetApiV1ReportsByIdOrSlugAnalyticsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ReportsByIdOrSlugAnalyticsRequest](src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugAnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsAnalyticsResponse](src/Deliverd/Models/ApiV1ReportsAnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ReportsByIdOrSlugAnalyticsError](src/Deliverd/Errors/GetApiV1ReportsByIdOrSlugAnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsCommentsResponse&gt; GetApiV1ReportsByIdOrSlugComments(GetApiV1ReportsByIdOrSlugCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Threads with the quoted passage and a plain-text excerpt of the surrounding content in the *current* version, so a client can find what to change without fetching the file. `anchorStatus` says whether the commented text still exists: `anchored` and `shifted` mean it does; `stale` means it was edited away, and the excerpt then comes from the version the comment was written against.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetApiV1ReportsByIdOrSlugComments(new GetApiV1ReportsByIdOrSlugCommentsRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsCommentsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ReportsByIdOrSlugCommentsRequest](src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsCommentsResponse](src/Deliverd/Models/ApiV1ReportsCommentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsDataResponse&gt; GetApiV1ReportsByIdOrSlugData(GetApiV1ReportsByIdOrSlugDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetApiV1ReportsByIdOrSlugData(new GetApiV1ReportsByIdOrSlugDataRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsDataResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ReportsByIdOrSlugDataRequest](src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsDataResponse](src/Deliverd/Models/ApiV1ReportsDataResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1ReportsByIdOrSlugEvidence(GetApiV1ReportsByIdOrSlugEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The whole record of one piece of work: every approval, review and request for information with who was asked and what they said, the report's version history, and the timeline across all of it. Requires reports:read, approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken. For a report the steps are the approvals, reviews and requests that point at it, which is the subject an auditor usually names and works for work done before flows existed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetApiV1ReportsByIdOrSlugEvidence(new GetApiV1ReportsByIdOrSlugEvidenceRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<GetApiV1ReportsByIdOrSlugEvidenceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ReportsByIdOrSlugEvidenceRequest](src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ReportsByIdOrSlugEvidenceError](src/Deliverd/Errors/GetApiV1ReportsByIdOrSlugEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsVersionsResponse2&gt; GetApiV1ReportsByIdOrSlugVersions(GetApiV1ReportsByIdOrSlugVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetApiV1ReportsByIdOrSlugVersions(new GetApiV1ReportsByIdOrSlugVersionsRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsVersionsResponse2
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ReportsByIdOrSlugVersionsRequest](src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugVersionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsVersionsResponse2](src/Deliverd/Models/ApiV1ReportsVersionsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsResponse3&gt; PatchApiV1ReportsByIdOrSlug(PatchApiV1ReportsByIdOrSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the title, the address, or both. Changing the address keeps the old one: it permanently redirects to the new URL, so links already shared keep working. `previousSlug` names the address that was kept, or null when only the title changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PatchApiV1ReportsByIdOrSlug(new PatchApiV1ReportsByIdOrSlugRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsResponse3
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatchApiV1ReportsByIdOrSlugRequest](src/Deliverd/Requests/Reports/PatchApiV1ReportsByIdOrSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsResponse3](src/Deliverd/Models/ApiV1ReportsResponse3.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsResponse1&gt; PostApiV1Reports(PostApiV1ReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish from an uploadId, inline HTML content, or inline files. Creates the report on first publish; new versions after that. `taskId` keeps the report with a Task Graph task: it is listed on the task and returned in the task's context. A later publish naming another task moves it there, and one naming none leaves it where it is. Naming a task needs `tasks:read` on the key and the Tasks plan feature (`402 feature_unavailable` without it).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PostApiV1Reports(new PostApiV1ReportsRequest());
    // TODO: Handle 'response' of type ApiV1ReportsResponse1
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReportsRequest](src/Deliverd/Requests/Reports/PostApiV1ReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsResponse1](src/Deliverd/Models/ApiV1ReportsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsArchiveResponse&gt; PostApiV1ReportsByIdOrSlugArchive(PostApiV1ReportsByIdOrSlugArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archiving stops the URL serving: a reader following a link they already hold is told the report is no longer available. Nothing is deleted and the audience is kept, so `{"archived": false}` restores it exactly as it was. The body is optional and defaults to archiving.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PostApiV1ReportsByIdOrSlugArchive(new PostApiV1ReportsByIdOrSlugArchiveRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsArchiveResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReportsByIdOrSlugArchiveRequest](src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugArchiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsArchiveResponse](src/Deliverd/Models/ApiV1ReportsArchiveResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsCommentsResponse1&gt; PostApiV1ReportsByIdOrSlugComments(PostApiV1ReportsByIdOrSlugCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Omit `quote` for a comment about the report as a whole. Include it and the comment attaches to that passage and highlights it, the way a reader's selection does. The quote must occur exactly once in the current version; otherwise the request is refused rather than placed on a guess.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PostApiV1ReportsByIdOrSlugComments(new PostApiV1ReportsByIdOrSlugCommentsRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsCommentsResponse1
}
catch (ApiException<PostApiV1ReportsByIdOrSlugCommentsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReportsByIdOrSlugCommentsRequest](src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsCommentsResponse1](src/Deliverd/Models/ApiV1ReportsCommentsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ReportsByIdOrSlugCommentsError](src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsCopyResponse&gt; PostApiV1ReportsByIdOrSlugCopy(PostApiV1ReportsByIdOrSlugCopyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Duplicate a report's current version into a new report you own — the primitive behind duplicating a report and behind using one as a template. The copy carries the content, the classification and any datasets; it carries **no** audience, comments or share links, and starts private to you. Requires that you can already read the source and may publish. Agent keys are refused: a copy lands outside an agent's allow-list.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PostApiV1ReportsByIdOrSlugCopy(new PostApiV1ReportsByIdOrSlugCopyRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsCopyResponse
}
catch (ApiException<PostApiV1ReportsByIdOrSlugCopyError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReportsByIdOrSlugCopyRequest](src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugCopyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsCopyResponse](src/Deliverd/Models/ApiV1ReportsCopyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ReportsByIdOrSlugCopyError](src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugCopyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsRevisionBriefsResponse&gt; PostApiV1ReportsByIdOrSlugRevisionBriefs(PostApiV1ReportsByIdOrSlugRevisionBriefsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One prompt an agent can revise the report from: each open thread's quoted passage, the surrounding text in the current version, the conversation, and signed links to the images readers attached, ending with how to publish the next version and close each thread. Composing a brief is recorded on the report. Pass `threadIds` to include only some open threads.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PostApiV1ReportsByIdOrSlugRevisionBriefs(
        new PostApiV1ReportsByIdOrSlugRevisionBriefsRequest { IdOrSlug = "some example string" });
    // TODO: Handle 'response' of type ApiV1ReportsRevisionBriefsResponse
}
catch (ApiException<PostApiV1ReportsByIdOrSlugRevisionBriefsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReportsByIdOrSlugRevisionBriefsRequest](src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugRevisionBriefsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsRevisionBriefsResponse](src/Deliverd/Models/ApiV1ReportsRevisionBriefsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ReportsByIdOrSlugRevisionBriefsError](src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugRevisionBriefsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsRollbackResponse&gt; PostApiV1ReportsByIdOrSlugRollback(PostApiV1ReportsByIdOrSlugRollbackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Serve an earlier version again at the same URL. Name it by number — the `currentVersion` and `latestVersion` every other endpoint returns — or by `versionId` from the versions list. Nothing is deleted: roll forward the same way.

Datasets are not versioned, so a rollback restores the markup and not the numbers it renders.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PostApiV1ReportsByIdOrSlugRollback(new PostApiV1ReportsByIdOrSlugRollbackRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsRollbackResponse
}
catch (ApiException<PostApiV1ReportsByIdOrSlugRollbackError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReportsByIdOrSlugRollbackRequest](src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugRollbackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsRollbackResponse](src/Deliverd/Models/ApiV1ReportsRollbackResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ReportsByIdOrSlugRollbackError](src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugRollbackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsSendResponse&gt; PostApiV1ReportsByIdOrSlugSend(PostApiV1ReportsByIdOrSlugSendRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Distinct from `POST …/share`, which grants access to people the organisation already knows. This takes bare email addresses, creates the guest records behind them, grants access and emails each recipient a link with the sender's covering note.

**Not a mailing list.** Each recipient gets their own link tied to their own guest record, which is what makes the audit trail and the per-reader analytics mean anything — and why the list is capped at 50. The link keeps working as the report is updated, so there is no new file to send next time.

Governed by everything a share is, because it grants through the same function: the `share_external` publishing policy — which the seeded confidential-and-restricted rule denies outright — the agent's own allow-list, the expiry clamp, the audit trail and the `report.shared` webhook. A recipient who already had access is emailed again rather than skipped: re-sending to somebody who says they never got it is the point.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PostApiV1ReportsByIdOrSlugSend(new PostApiV1ReportsByIdOrSlugSendRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsSendResponse
}
catch (ApiException<PostApiV1ReportsByIdOrSlugSendError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReportsByIdOrSlugSendRequest](src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugSendRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsSendResponse](src/Deliverd/Models/ApiV1ReportsSendResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ReportsByIdOrSlugSendError](src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugSendError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsShareResponse&gt; PostApiV1ReportsByIdOrSlugShare(PostApiV1ReportsByIdOrSlugShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`capability` is what the audience may do: `view` (the default) or `comment`. A grant that already exists is only ever raised, never lowered, by granting again.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PostApiV1ReportsByIdOrSlugShare(new PostApiV1ReportsByIdOrSlugShareRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsShareResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReportsByIdOrSlugShareRequest](src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugShareRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsShareResponse](src/Deliverd/Models/ApiV1ReportsShareResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsVersionsResponse&gt; PostApiV1ReportsByIdOrSlugVersions(PostApiV1ReportsByIdOrSlugVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PostApiV1ReportsByIdOrSlugVersions(new PostApiV1ReportsByIdOrSlugVersionsRequest
    {
        IdOrSlug = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ReportsVersionsResponse
}
catch (ApiException<PostApiV1ReportsByIdOrSlugVersionsError> ex)
{
    if (ex.Error.TryGetApiV1ReportsVersions409Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1ReportsVersions409Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReportsByIdOrSlugVersionsRequest](src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugVersionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsVersionsResponse](src/Deliverd/Models/ApiV1ReportsVersionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ReportsByIdOrSlugVersionsError](src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReportsDataResponse1&gt; PutApiV1ReportsByIdOrSlugDataByName(PutApiV1ReportsByIdOrSlugDataByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Data the published report fetches at view time, so a dashboard can show current numbers without republishing. The body is JSON, stored verbatim, up to 5 MB. Served behind the same access check as the report and never edge-cached.

**A dataset is mutable and a version is not.** Rolling the report back does not roll the data back — the earlier markup renders today's numbers.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.PutApiV1ReportsByIdOrSlugDataByName(
        new PutApiV1ReportsByIdOrSlugDataByNameRequest
        {
            IdOrSlug = "some example string",
            Name = "some example string",
        });
    // TODO: Handle 'response' of type ApiV1ReportsDataResponse1
}
catch (ApiException<PutApiV1ReportsByIdOrSlugDataByNameError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutApiV1ReportsByIdOrSlugDataByNameRequest](src/Deliverd/Requests/Reports/PutApiV1ReportsByIdOrSlugDataByNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReportsDataResponse1](src/Deliverd/Models/ApiV1ReportsDataResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PutApiV1ReportsByIdOrSlugDataByNameError](src/Deliverd/Errors/PutApiV1ReportsByIdOrSlugDataByNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reviews

> Source: [Reviews](src/Deliverd/Api/Reviews.cs)

<details>
<summary><code>Task&lt;ApiV1ReviewsResponse1&gt; GetApiV1Reviews(GetApiV1ReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reviews.GetApiV1Reviews(new GetApiV1ReviewsRequest());
    // TODO: Handle 'response' of type ApiV1ReviewsResponse1
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ReviewsRequest](src/Deliverd/Requests/Reviews/GetApiV1ReviewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReviewsResponse1](src/Deliverd/Models/ApiV1ReviewsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReviewsResponse&gt; GetApiV1ReviewsById(GetApiV1ReviewsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reviews.GetApiV1ReviewsById(new GetApiV1ReviewsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1ReviewsResponse
}
catch (ApiException<GetApiV1ReviewsByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ReviewsByIdRequest](src/Deliverd/Requests/Reviews/GetApiV1ReviewsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReviewsResponse](src/Deliverd/Models/ApiV1ReviewsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ReviewsByIdError](src/Deliverd/Errors/GetApiV1ReviewsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReviewsResponse&gt; PostApiV1Reviews(PostApiV1ReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a review and returns its page. The verdict is a person's: read it by polling GET /api/v1/reviews/{id}, by the organisation's webhooks (review.approved, review.changes_requested), or by the MCP tool get_review. There is no endpoint that records a verdict — a key is not a person. Reviewers are named by email or id and must be active members or guests who can already open the report; anyone else is refused. The requester cannot review their own request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reviews.PostApiV1Reviews(new PostApiV1ReviewsRequest());
    // TODO: Handle 'response' of type ApiV1ReviewsResponse
}
catch (ApiException<PostApiV1ReviewsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReviewsRequest](src/Deliverd/Requests/Reviews/PostApiV1ReviewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReviewsResponse](src/Deliverd/Models/ApiV1ReviewsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ReviewsError](src/Deliverd/Errors/PostApiV1ReviewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ReviewsCancelResponse&gt; PostApiV1ReviewsByIdCancel(PostApiV1ReviewsByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reviews.PostApiV1ReviewsByIdCancel(new PostApiV1ReviewsByIdCancelRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1ReviewsCancelResponse
}
catch (ApiException<PostApiV1ReviewsByIdCancelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ReviewsByIdCancelRequest](src/Deliverd/Requests/Reviews/PostApiV1ReviewsByIdCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ReviewsCancelResponse](src/Deliverd/Models/ApiV1ReviewsCancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ReviewsByIdCancelError](src/Deliverd/Errors/PostApiV1ReviewsByIdCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RiskIndicators

> Source: [RiskIndicators](src/Deliverd/Api/RiskIndicators.cs)

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1RiskIndicators(GetApiV1RiskIndicatorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Each indicator the appetite turns on: its figure for the month against the limits it was judged by (`green`, `amber`, `red` or `not_measurable`), the two months before, the trend, where a measured indicator stands this month so far, whether a submitted figure is still owed, and the corrective action the month opened. Lower is better for every indicator. Deliverd never stops an agent on a figure.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RiskIndicators.GetApiV1RiskIndicators(new GetApiV1RiskIndicatorsRequest());
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<GetApiV1RiskIndicatorsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1RiskIndicatorsRequest](src/Deliverd/Requests/RiskIndicators/GetApiV1RiskIndicatorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1RiskIndicatorsError](src/Deliverd/Errors/GetApiV1RiskIndicatorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1RiskIndicatorsByKeyReadings(PostApiV1RiskIndicatorsByKeyReadingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an indicator whose figure comes from outside Deliverd: access reviews, output sampling, downtime, training. Give `value`, or `numerator` and `denominator` for a ratio, and `evidence` saying where it comes from. Judged against the limits in force when it is saved. A key gives a month's first figure; correcting one is a person's, in the app, with a reason. 409 when a figure already stands.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RiskIndicators.PostApiV1RiskIndicatorsByKeyReadings(
        new PostApiV1RiskIndicatorsByKeyReadingsRequest { Key = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1RiskIndicatorsByKeyReadingsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1RiskIndicatorsByKeyReadingsRequest](src/Deliverd/Requests/RiskIndicators/PostApiV1RiskIndicatorsByKeyReadingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1RiskIndicatorsByKeyReadingsError](src/Deliverd/Errors/PostApiV1RiskIndicatorsByKeyReadingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Schedules

> Source: [Schedules](src/Deliverd/Api/Schedules.cs)

<details>
<summary><code>Task DeleteApiV1SchedulesById(DeleteApiV1SchedulesByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The report and its versions are untouched. Use `PATCH` with `{"enabled": false}` to pause one instead, which keeps the record that it existed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Schedules.DeleteApiV1SchedulesById(new DeleteApiV1SchedulesByIdRequest { Id = "some example string" });
}
catch (ApiException<DeleteApiV1SchedulesByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1SchedulesByIdRequest](src/Deliverd/Requests/Schedules/DeleteApiV1SchedulesByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1SchedulesByIdError](src/Deliverd/Errors/DeleteApiV1SchedulesByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SchedulesResponse&gt; GetApiV1Schedules(GetApiV1SchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An agent key sees only its own schedules. `due=1` narrows to the ones waiting on a publish: a schedule is due once it has fired and the report has had no new version since, and publishing clears it — there is nothing to acknowledge.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Schedules.GetApiV1Schedules(new GetApiV1SchedulesRequest());
    // TODO: Handle 'response' of type ApiV1SchedulesResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1SchedulesRequest](src/Deliverd/Requests/Schedules/GetApiV1SchedulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SchedulesResponse](src/Deliverd/Models/ApiV1SchedulesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SchedulesResponse1&gt; PatchApiV1SchedulesById(PatchApiV1SchedulesByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changing the recurrence re-times the next run, so a weekly publish moved from Friday to Monday does not fire once more on the Friday. Turning one back on does the same, because a schedule that has been off for a month carries a next run a month in the past.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Schedules.PatchApiV1SchedulesById(new PatchApiV1SchedulesByIdRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1SchedulesResponse1
}
catch (ApiException<PatchApiV1SchedulesByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatchApiV1SchedulesByIdRequest](src/Deliverd/Requests/Schedules/PatchApiV1SchedulesByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SchedulesResponse1](src/Deliverd/Models/ApiV1SchedulesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PatchApiV1SchedulesByIdError](src/Deliverd/Errors/PatchApiV1SchedulesByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SchedulesResponse1&gt; PostApiV1Schedules(PostApiV1SchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`recurrence` is a five-field cron expression evaluated in UTC, and it has to have a next occurrence — `0 0 30 2 *` is five well-formed fields and a date that never arrives, and is refused rather than stored.

An **agent key is refused**: a schedule is an instruction *to* an agent, so setting one is a person's decision. The schedule says when the agent is asked for a new version, not who hears about one — publishing emails the report's audience either way. Nothing publishes by itself: the agent polls `GET /schedules?due=1` and does the work.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Schedules.PostApiV1Schedules(new PostApiV1SchedulesRequest());
    // TODO: Handle 'response' of type ApiV1SchedulesResponse1
}
catch (ApiException<PostApiV1SchedulesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1SchedulesRequest](src/Deliverd/Requests/Schedules/PostApiV1SchedulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SchedulesResponse1](src/Deliverd/Models/ApiV1SchedulesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1SchedulesError](src/Deliverd/Errors/PostApiV1SchedulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Screen

> Source: [Screen](src/Deliverd/Api/Screen.cs)

<details>
<summary><code>Task&lt;ApiV1ScreenResponse&gt; PostApiV1Screen(PostApiV1ScreenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finds email addresses, phone numbers, IBANs, card numbers, national identifiers, secrets, special-category data and the organisation's own terms, and decides against what the AI register approves the model (`aiSystemId`) to receive: `allow`, `redact` (send `redactedText`), `ask` (a person decides through the approval in `approval`; send the original only once it is approved) or `deny`. Send `text`, screened in memory and never stored, or `counts`, what the SDK found on the caller's machine, so the text never leaves it. Every check is audited with counts and the verdict, never a value. On the Free plan the check is report-only (`mode: report_only`): it runs and is audited, `verdict` is always `allow`, and `wouldBe` says what a paid plan would have done. A net, not a guarantee: names are not reliably found.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Screen.PostApiV1Screen(new PostApiV1ScreenRequest());
    // TODO: Handle 'response' of type ApiV1ScreenResponse
}
catch (ApiException<PostApiV1ScreenError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ScreenRequest](src/Deliverd/Requests/Screen/PostApiV1ScreenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ScreenResponse](src/Deliverd/Models/ApiV1ScreenResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ScreenError](src/Deliverd/Errors/PostApiV1ScreenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/Deliverd/Api/Tasks.cs)

<details>
<summary><code>Task&lt;ApiV1TasksResponse2&gt; GetApiV1Tasks(GetApiV1TasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Most recently active first. Side tasks are reached through the objective they belong to.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetApiV1Tasks(new GetApiV1TasksRequest());
    // TODO: Handle 'response' of type ApiV1TasksResponse2
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1TasksRequest](src/Deliverd/Requests/Tasks/GetApiV1TasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksResponse2](src/Deliverd/Models/ApiV1TasksResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TasksResponse&gt; GetApiV1TasksById(GetApiV1TasksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetApiV1TasksById(new GetApiV1TasksByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1TasksResponse
}
catch (ApiException<GetApiV1TasksByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1TasksByIdRequest](src/Deliverd/Requests/Tasks/GetApiV1TasksByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksResponse](src/Deliverd/Models/ApiV1TasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1TasksByIdError](src/Deliverd/Errors/GetApiV1TasksByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1TasksByIdContext(GetApiV1TasksByIdContextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The objective, where the task stands, confirmed and suggested decisions, open questions, constraints, side-task results, the next action, the reports published for the task (`reports`: up to ten live ones, newest first, each `{ id, title, url, version, publishedAt }`), and a paragraph to re-anchor on.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetApiV1TasksByIdContext(new GetApiV1TasksByIdContextRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1TasksByIdContextRequest](src/Deliverd/Requests/Tasks/GetApiV1TasksByIdContextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1TasksByIdContextGiven(GetApiV1TasksByIdContextGivenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every time knowledge or a playbook was handed to the task or the tasks under it, newest first, with who confirmed each entry.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetApiV1TasksByIdContextGiven(new GetApiV1TasksByIdContextGivenRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1TasksByIdContextGivenRequest](src/Deliverd/Requests/Tasks/GetApiV1TasksByIdContextGivenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1TasksByIdGovernance(GetApiV1TasksByIdGovernanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The profile, AI system, every control with its state and how it is met, the evidence, readiness and the gate answer. A side task's id answers for its objective.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetApiV1TasksByIdGovernance(new GetApiV1TasksByIdGovernanceRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<GetApiV1TasksByIdGovernanceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1TasksByIdGovernanceRequest](src/Deliverd/Requests/Tasks/GetApiV1TasksByIdGovernanceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1TasksByIdGovernanceError](src/Deliverd/Errors/GetApiV1TasksByIdGovernanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TasksGovernanceGateResponse&gt; GetApiV1TasksByIdGovernanceGate(GetApiV1TasksByIdGovernanceGateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`allowed`, `reason`, `missingControls` and `blockers` — an open reassessment, an overdue review or a high or critical incident, which only a person clears. With `?action=` (Enterprise) it also asks agent authority: `authority.mode` is allowed, approval or denied. Every check is recorded.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetApiV1TasksByIdGovernanceGate(new GetApiV1TasksByIdGovernanceGateRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1TasksGovernanceGateResponse
}
catch (ApiException<GetApiV1TasksByIdGovernanceGateError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1TasksByIdGovernanceGateRequest](src/Deliverd/Requests/Tasks/GetApiV1TasksByIdGovernanceGateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksGovernanceGateResponse](src/Deliverd/Models/ApiV1TasksGovernanceGateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1TasksByIdGovernanceGateError](src/Deliverd/Errors/GetApiV1TasksByIdGovernanceGateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; GetApiV1TasksByIdGovernancePack(GetApiV1TasksByIdGovernancePackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Profile, AI system, controls, evidence, task graph, decisions, approvals and the audit timeline, with a sha256 digest. `?format=html` to read and print. It assists audit; it does not certify compliance with any law. Every export is audited.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetApiV1TasksByIdGovernancePack(new GetApiV1TasksByIdGovernancePackRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1TasksByIdGovernancePackRequest](src/Deliverd/Requests/Tasks/GetApiV1TasksByIdGovernancePackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TasksGraphResponse&gt; GetApiV1TasksByIdGraph(GetApiV1TasksByIdGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetApiV1TasksByIdGraph(new GetApiV1TasksByIdGraphRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1TasksGraphResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1TasksByIdGraphRequest](src/Deliverd/Requests/Tasks/GetApiV1TasksByIdGraphRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksGraphResponse](src/Deliverd/Models/ApiV1TasksGraphResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TasksResponse&gt; PatchApiV1TasksById(PatchApiV1TasksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

State patches merge: fields left out stay. Changing the objective itself is refused to an agent; only a person changes what the work is for.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PatchApiV1TasksById(new PatchApiV1TasksByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1TasksResponse
}
catch (ApiException<PatchApiV1TasksByIdError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatchApiV1TasksByIdRequest](src/Deliverd/Requests/Tasks/PatchApiV1TasksByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksResponse](src/Deliverd/Models/ApiV1TasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PatchApiV1TasksByIdError](src/Deliverd/Errors/PatchApiV1TasksByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PatchApiV1TasksByIdGovernance(PatchApiV1TasksByIdGovernanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Controls are recomputed. An agent may raise risk or add facts; only a person lowers risk, weakens oversight or clears a fact (403 not_permitted).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PatchApiV1TasksByIdGovernance(new PatchApiV1TasksByIdGovernanceRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PatchApiV1TasksByIdGovernanceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatchApiV1TasksByIdGovernanceRequest](src/Deliverd/Requests/Tasks/PatchApiV1TasksByIdGovernanceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PatchApiV1TasksByIdGovernanceError](src/Deliverd/Errors/PatchApiV1TasksByIdGovernanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TasksResponse&gt; PostApiV1Tasks(PostApiV1TasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What the work is ultimately for, kept apart from the conversation and returned at the top of every context. With externalId, an open objective the caller already started under it is returned instead (resumed: true, status 200).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1Tasks(new PostApiV1TasksRequest());
    // TODO: Handle 'response' of type ApiV1TasksResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksResponse](src/Deliverd/Models/ApiV1TasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1TasksByIdApply(PostApiV1TasksByIdApplyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applied carries decisions up as suggestions (confirmed only when a person applies in Deliverd), adds a summary, merges open questions and takes the next action. Answers with the parent's context and a message that returns to the objective.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdApply(new PostApiV1TasksByIdApplyRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1TasksByIdApplyError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdApplyRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdApplyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdApplyError](src/Deliverd/Errors/PostApiV1TasksByIdApplyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TasksCancelResponse&gt; PostApiV1TasksByIdCancel(PostApiV1TasksByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancelling an objective cancels the side tasks still open under it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdCancel(new PostApiV1TasksByIdCancelRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1TasksCancelResponse
}
catch (ApiException<PostApiV1TasksByIdCancelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdCancelRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksCancelResponse](src/Deliverd/Models/ApiV1TasksCancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdCancelError](src/Deliverd/Errors/PostApiV1TasksByIdCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TasksCompleteResponse&gt; PostApiV1TasksByIdComplete(PostApiV1TasksByIdCompleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdComplete(new PostApiV1TasksByIdCompleteRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1TasksCompleteResponse
}
catch (ApiException<PostApiV1TasksByIdCompleteError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdCompleteRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdCompleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksCompleteResponse](src/Deliverd/Models/ApiV1TasksCompleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdCompleteError](src/Deliverd/Errors/PostApiV1TasksByIdCompleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1TasksByIdFindings(PostApiV1TasksByIdFindingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A decision is stored as a suggestion until a person confirms it or an approval decides it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdFindings(new PostApiV1TasksByIdFindingsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdFindingsRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdFindingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1TasksByIdFindingsByFindingIdApproval(PostApiV1TasksByIdFindingsByFindingIdApprovalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An ordinary approval request on the objective's flow. Approved confirms the decision; rejected rejects it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdFindingsByFindingIdApproval(
        new PostApiV1TasksByIdFindingsByFindingIdApprovalRequest
        {
            Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            FindingId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1TasksByIdFindingsByFindingIdApprovalError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdFindingsByFindingIdApprovalRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdFindingsByFindingIdApprovalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdFindingsByFindingIdApprovalError](src/Deliverd/Errors/PostApiV1TasksByIdFindingsByFindingIdApprovalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1TasksByIdFindingsByFindingIdKnowledge(PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Keeps the finding and its task as the entry's source. Still a proposal until a person confirms it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledge(
        new PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest
        {
            Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            FindingId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1TasksByIdFindingsByFindingIdKnowledgeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdFindingsByFindingIdKnowledgeError](src/Deliverd/Errors/PostApiV1TasksByIdFindingsByFindingIdKnowledgeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1TasksByIdGovernance(PostApiV1TasksByIdGovernanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Put an objective under Compliance Mode with what is known of its profile. Idempotent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdGovernance(new PostApiV1TasksByIdGovernanceRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1TasksByIdGovernanceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdGovernanceRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdGovernanceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdGovernanceError](src/Deliverd/Errors/PostApiV1TasksByIdGovernanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1TasksByIdGovernanceControlsByKeyApproval(PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An ordinary approval through the organisation's approval process. The control is satisfied when it is approved. Needs approvals:write.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApproval(
        new PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest
        {
            Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Key = "some example string",
        });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1TasksByIdGovernanceControlsByKeyApprovalError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdGovernanceControlsByKeyApprovalError](src/Deliverd/Errors/PostApiV1TasksByIdGovernanceControlsByKeyApprovalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1TasksByIdGovernanceEvidence(PostApiV1TasksByIdGovernanceEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mapped to the controls it speaks to; one item may satisfy several. Approval controls are not satisfied by evidence. Scored evidence carries `results` (what was measured), a tool's own `report` (promptfoo, Inspect, garak, Weave, Braintrust, JUnit and more), turned into results here, or a `pull` from the organisation's connected Langfuse, LangSmith, Braintrust or Weave: the newest experiment or evaluation with the name, read with keys the caller never holds. `release` names the release the results tested — `provider`, `model`, `modelVersion`, `promptHash`, `guardrailsHash`, digests never the text — and is kept on the run: evidence naming another release than the AI system now runs does not count, and says so (`otherRelease`); evidence naming none counts as before. A control with thresholds is met only when its newest scored evidence of this release meets them. A pull answers 404 when the tool is not connected or has no such experiment, 409 `connection_refused` when the tool refuses the stored key, and 502 `upstream_unavailable` when it cannot be read.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdGovernanceEvidence(
        new PostApiV1TasksByIdGovernanceEvidenceRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1TasksByIdGovernanceEvidenceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdGovernanceEvidenceRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdGovernanceEvidenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdGovernanceEvidenceError](src/Deliverd/Errors/PostApiV1TasksByIdGovernanceEvidenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1TasksByIdGovernanceReassessments(PostApiV1TasksByIdGovernanceReassessmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enterprise. The gate stays closed until a person completes the reassessment in Deliverd.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdGovernanceReassessments(
        new PostApiV1TasksByIdGovernanceReassessmentsRequest
        {
            Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<PostApiV1TasksByIdGovernanceReassessmentsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdGovernanceReassessmentsRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdGovernanceReassessmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdGovernanceReassessmentsError](src/Deliverd/Errors/PostApiV1TasksByIdGovernanceReassessmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, object&gt;&gt; PostApiV1TasksByIdLinks(PostApiV1TasksByIdLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An edge beyond parent and child: depends_on, blocks, related_to, supersedes or resulted_in.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdLinks(new PostApiV1TasksByIdLinksRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdLinksRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdLinksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, object&gt;</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TasksReopenResponse&gt; PostApiV1TasksByIdReopen(PostApiV1TasksByIdReopenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The earlier result is kept in previousResults.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdReopen(new PostApiV1TasksByIdReopenRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1TasksReopenResponse
}
catch (ApiException<PostApiV1TasksByIdReopenError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdReopenRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdReopenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksReopenResponse](src/Deliverd/Models/ApiV1TasksReopenResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdReopenError](src/Deliverd/Errors/PostApiV1TasksByIdReopenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TasksSideTasksResponse&gt; PostApiV1TasksByIdSideTasks(PostApiV1TasksByIdSideTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

It begins with a snapshot of the parent: objective, state, decisions and constraints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostApiV1TasksByIdSideTasks(new PostApiV1TasksByIdSideTasksRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1TasksSideTasksResponse
}
catch (ApiException<PostApiV1TasksByIdSideTasksError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1TasksByIdSideTasksRequest](src/Deliverd/Requests/Tasks/PostApiV1TasksByIdSideTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TasksSideTasksResponse](src/Deliverd/Models/ApiV1TasksSideTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1TasksByIdSideTasksError](src/Deliverd/Errors/PostApiV1TasksByIdSideTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](src/Deliverd/Api/Templates.cs)

<details>
<summary><code>Task&lt;ApiV1TemplatesResponse&gt; GetApiV1Templates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reports the organisation offers as starting points. Copy one with POST /reports/{idOrSlug}/copy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.GetApiV1Templates();
    // TODO: Handle 'response' of type ApiV1TemplatesResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TemplatesResponse](src/Deliverd/Models/ApiV1TemplatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Uploads

> Source: [Uploads](src/Deliverd/Api/Uploads.cs)

<details>
<summary><code>Task&lt;ApiV1UploadsResponse&gt; PostApiV1Uploads(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Uploads.PostApiV1Uploads();
    // TODO: Handle 'response' of type ApiV1UploadsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadsResponse](src/Deliverd/Models/ApiV1UploadsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhookEndpoints

> Source: [WebhookEndpoints](src/Deliverd/Api/WebhookEndpoints.cs)

<details>
<summary><code>Task DeleteApiV1WebhookEndpointsById(DeleteApiV1WebhookEndpointsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Its delivery log goes with it. `PATCH` with `{"enabled": false}` stops deliveries and keeps both.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.WebhookEndpoints.DeleteApiV1WebhookEndpointsById(new DeleteApiV1WebhookEndpointsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteApiV1WebhookEndpointsByIdError> ex)
{
    if (ex.Error.TryGetApiV1WebhookEndpoints403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1WebhookEndpoints403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1WebhookEndpointsByIdRequest](src/Deliverd/Requests/WebhookEndpoints/DeleteApiV1WebhookEndpointsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1WebhookEndpointsByIdError](src/Deliverd/Errors/DeleteApiV1WebhookEndpointsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1WebhookEndpointsResponse&gt; GetApiV1WebhookEndpoints(GetApiV1WebhookEndpointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The organisation's endpoints, newest first, with their delivery health. Never their signing secrets — those are returned once, when an endpoint is created. Owners and administrators only; an agent key is refused.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhookEndpoints.GetApiV1WebhookEndpoints(new GetApiV1WebhookEndpointsRequest());
    // TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse
}
catch (ApiException<GetApiV1WebhookEndpointsError> ex)
{
    if (ex.Error.TryGetApiV1WebhookEndpoints403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1WebhookEndpoints403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1WebhookEndpointsRequest](src/Deliverd/Requests/WebhookEndpoints/GetApiV1WebhookEndpointsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WebhookEndpointsResponse](src/Deliverd/Models/ApiV1WebhookEndpointsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1WebhookEndpointsError](src/Deliverd/Errors/GetApiV1WebhookEndpointsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1WebhookEndpointsResponse2&gt; GetApiV1WebhookEndpointsById(GetApiV1WebhookEndpointsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With its delivery health. Never its signing secret.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhookEndpoints.GetApiV1WebhookEndpointsById(new GetApiV1WebhookEndpointsByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse2
}
catch (ApiException<GetApiV1WebhookEndpointsByIdError> ex)
{
    if (ex.Error.TryGetApiV1WebhookEndpoints403Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1WebhookEndpoints403Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1WebhookEndpointsByIdRequest](src/Deliverd/Requests/WebhookEndpoints/GetApiV1WebhookEndpointsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WebhookEndpointsResponse2](src/Deliverd/Models/ApiV1WebhookEndpointsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[GetApiV1WebhookEndpointsByIdError](src/Deliverd/Errors/GetApiV1WebhookEndpointsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1WebhookEndpointsResponse2&gt; PatchApiV1WebhookEndpointsById(PatchApiV1WebhookEndpointsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Only the fields sent change; at least one is required. Turning an endpoint back on clears its run of failures, as the console's switch does. The signing secret cannot be changed: delete the endpoint and add it again for a new one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhookEndpoints.PatchApiV1WebhookEndpointsById(
        new PatchApiV1WebhookEndpointsByIdRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse2
}
catch (ApiException<PatchApiV1WebhookEndpointsByIdError> ex)
{
    if (ex.Error.TryGetApiV1WebhookEndpoints400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1WebhookEndpoints400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatchApiV1WebhookEndpointsByIdRequest](src/Deliverd/Requests/WebhookEndpoints/PatchApiV1WebhookEndpointsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WebhookEndpointsResponse2](src/Deliverd/Models/ApiV1WebhookEndpointsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PatchApiV1WebhookEndpointsByIdError](src/Deliverd/Errors/PatchApiV1WebhookEndpointsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1WebhookEndpointsResponse1&gt; PostApiV1WebhookEndpoints(PostApiV1WebhookEndpointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every event the endpoint subscribes to then arrives as a signed POST. `events` empty or absent means every event, including ones added later, except the opt-in ones (the gate.* lifecycle, task.blocked, side_task.completed, context.changed, audit.event), which arrive only when named.

The response carries **`secret`, on this response only**. No other call returns it and it cannot be retrieved afterwards; delete the endpoint and add it again if it is lost. A retry carrying the same `Idempotency-Key` gets this same response back.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhookEndpoints.PostApiV1WebhookEndpoints(new PostApiV1WebhookEndpointsRequest());
    // TODO: Handle 'response' of type ApiV1WebhookEndpointsResponse1
}
catch (ApiException<PostApiV1WebhookEndpointsError> ex)
{
    if (ex.Error.TryGetApiV1WebhookEndpoints400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1WebhookEndpoints400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1WebhookEndpointsRequest](src/Deliverd/Requests/WebhookEndpoints/PostApiV1WebhookEndpointsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WebhookEndpointsResponse1](src/Deliverd/Models/ApiV1WebhookEndpointsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1WebhookEndpointsError](src/Deliverd/Errors/PostApiV1WebhookEndpointsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1WebhookEndpointsTestResponse&gt; PostApiV1WebhookEndpointsByIdTest(PostApiV1WebhookEndpointsByIdTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Posts the event now, with the same signature and headers as a real delivery, `"test": true` beside `event` and obviously fake ids in `data`. One shot: never retried, and never counted toward the failures that switch an endpoint off. `delivered: false` is an answer about the endpoint, not a failure of this call. The body is optional.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhookEndpoints.PostApiV1WebhookEndpointsByIdTest(
        new PostApiV1WebhookEndpointsByIdTestRequest { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type ApiV1WebhookEndpointsTestResponse
}
catch (ApiException<PostApiV1WebhookEndpointsByIdTestError> ex)
{
    if (ex.Error.TryGetApiV1WebhookEndpointsTest400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1WebhookEndpointsTest400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1WebhookEndpointsByIdTestRequest](src/Deliverd/Requests/WebhookEndpoints/PostApiV1WebhookEndpointsByIdTestRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WebhookEndpointsTestResponse](src/Deliverd/Models/ApiV1WebhookEndpointsTestResponse.cs)</code>

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[PostApiV1WebhookEndpointsByIdTestError](src/Deliverd/Errors/PostApiV1WebhookEndpointsByIdTestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/Deliverd/Api/Workspaces.cs)

<details>
<summary><code>Task GetApiV1Workspaces(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Workspaces.GetApiV1Workspaces();
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Deliverd/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Deliverd/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

