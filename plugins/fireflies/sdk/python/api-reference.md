# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [FirefliesAiClient](fireflies_ai/client.py)

<details>
<summary><code>def graphql_operation(body: GraphQlRequest | GraphQlRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> GraphQlResponse</code></summary>

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

**Sync**

```python
try:
    response = client.graphql_operation(
        GraphQlRequest(
            query="query Transcript($id: String!) {\n  transcript(id: $id) {\n    id\n    title\n    date\n    duration\n    host_email\n    organizer_email\n    participants\n    transcript_url\n    audio_url\n    video_url\n    summary {\n      overview\n      action_items\n      keywords\n      gist\n      short_summary\n      meeting_type\n      topics_discussed\n    }\n    sentences {\n      index\n      speaker_name\n      text\n      start_time\n      end_time\n    }\n  }\n}\n",
            variables={},
        ),
    )
    # TODO: Handle 'response' of type GraphQlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GraphqlOperationErrorBody
```

**Async**

```python
try:
    response = await async_client.graphql_operation(
        GraphQlRequest(
            query="query Transcript($id: String!) {\n  transcript(id: $id) {\n    id\n    title\n    date\n    duration\n    host_email\n    organizer_email\n    participants\n    transcript_url\n    audio_url\n    video_url\n    summary {\n      overview\n      action_items\n      keywords\n      gist\n      short_summary\n      meeting_type\n      topics_discussed\n    }\n    sentences {\n      index\n      speaker_name\n      text\n      start_time\n      end_time\n    }\n  }\n}\n",
            variables={},
        ),
    )
    # TODO: Handle 'response' of type GraphQlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GraphqlOperationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GraphQlRequest](fireflies_ai/models/graph_ql_request.py) \| [GraphQlRequestDict](fireflies_ai/models/graph_ql_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fireflies_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GraphQlResponse](fireflies_ai/models/graph_ql_response.py)</code> -- GraphQL response (errors may still be present in the response body)

**OnError**: <code>[ApiError](fireflies_ai/core/exceptions.py)&#91;[GraphqlOperationErrorBody](fireflies_ai/errors/graphql_operation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[GraphQlErrorResponse](fireflies_ai/models/graph_ql_error_response.py)</code> |
| 429, 500 | <code>[RawError](fireflies_ai/core/results.py)</code> |
| anything unmapped | <code>[RawError](fireflies_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

