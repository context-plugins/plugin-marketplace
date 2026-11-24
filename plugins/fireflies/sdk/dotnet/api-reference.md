# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [FirefliesAiClient](src/FirefliesAi/FirefliesAiClient.cs)

<details>
<summary><code>Task&lt;GraphQlResponse&gt; GraphqlOperation(GraphqlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

All Fireflies API operations are performed via GraphQL POST requests to this single endpoint. The body must contain a `query` string (GraphQL query or mutation) and optionally a `variables` object. See the Fireflies documentation for the full schema of available queries and mutations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GraphqlOperation(new GraphqlOperationRequest
    {
        Body = new GraphQlRequest
        {
            Query = "query Transcript($id: String!) {\n  transcript(id: $id) {\n    id\n    title\n    date\n    duration\n    host_email\n    organizer_email\n    participants\n    transcript_url\n    audio_url\n    video_url\n    summary {\n      overview\n      action_items\n      keywords\n      gist\n      short_summary\n      meeting_type\n      topics_discussed\n    }\n    sentences {\n      index\n      speaker_name\n      text\n      start_time\n      end_time\n    }\n  }\n}\n",
        },
    });
    // TODO: Handle 'response' of type GraphQlResponse
}
catch (ApiException<GraphqlOperationError> ex)
{
    if (ex.Error.TryGetGraphQlErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type GraphQlErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GraphqlOperationRequest](src/FirefliesAi/Requests/GraphqlOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GraphQlResponse](src/FirefliesAi/Models/GraphQlResponse.cs)</code>

**OnError**: <code>[ApiException](src/FirefliesAi/Core/Exceptions/ApiException.cs)&lt;[GraphqlOperationError](src/FirefliesAi/Errors/GraphqlOperationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

