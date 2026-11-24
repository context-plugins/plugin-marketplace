# Reference

> Source: [FirefliesAiClient](src/client.ts)

<details>
<summary><code>graphqlOperation(request: FirefliesAiClient.GraphqlOperationRequest, options?: RequestOptions): ApiPromise&lt;GraphQlResponse, FirefliesAiClient.GraphqlOperationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

All Fireflies API operations are performed via GraphQL POST requests to this single endpoint. The body must contain a `query` string (GraphQL query or mutation) and optionally a `variables` object. See the Fireflies documentation for the full schema of available queries and mutations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.graphqlOperation({
    body: {
      query:
        "query Transcript($id: String!) {\n  transcript(id: $id) {\n    id\n    title\n    date\n    duration\n    host_email\n    organizer_email\n    participants\n    transcript_url\n    audio_url\n    video_url\n    summary {\n      overview\n      action_items\n      keywords\n      gist\n      short_summary\n      meeting_type\n      topics_discussed\n    }\n    sentences {\n      index\n      speaker_name\n      text\n      start_time\n      end_time\n    }\n  }\n}\n",
      variables: {},
    },
  });
  // TODO: Handle 'response' of type GraphQlResponse
} catch (err) {
  // TODO: Handle 'err' of type FirefliesAiClient.GraphqlOperationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .graphqlOperation({
    body: {
      query:
        "query Transcript($id: String!) {\n  transcript(id: $id) {\n    id\n    title\n    date\n    duration\n    host_email\n    organizer_email\n    participants\n    transcript_url\n    audio_url\n    video_url\n    summary {\n      overview\n      action_items\n      keywords\n      gist\n      short_summary\n      meeting_type\n      topics_discussed\n    }\n    sentences {\n      index\n      speaker_name\n      text\n      start_time\n      end_time\n    }\n  }\n}\n",
      variables: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GraphQlResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GraphQlRequest](src/models/graph-ql-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.graphqlOperation(request)`

- **OnSuccess**: <code>[GraphQlResponse](src/models/graph-ql-response.ts)</code>
- **OnError**: throws <code>[FirefliesAiClient.GraphqlOperationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.graphqlOperation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GraphQlResponse, FirefliesAiClient.GraphqlOperationError&gt;</code>, with `result.value` of type <code>[GraphQlResponse](src/models/graph-ql-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FirefliesAiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

