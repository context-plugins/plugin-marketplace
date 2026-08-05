# ObservabilityMetadata — operations

Accessor: `client.ObservabilityMetadata` · Source: `Api/ObservabilityMetadata.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RetrievesMetadataForTheGivenRule
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/topics/{topic_name}/rules/{rule_name}/metadata` (Default)
- **Notes**: Retrieves metadata like enum values for each field and trigger in the given rule
- **Signature**: `RetrievesMetadataForTheGivenRule(Guid orgId, string topicName, string ruleName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RuleMetadata`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
