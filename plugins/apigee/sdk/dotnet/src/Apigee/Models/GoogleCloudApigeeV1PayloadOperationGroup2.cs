using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. Configuration used to group Apigee proxies with payload-based operations and quotas. Unlike <c>operation_group</c>, which matches on the URL path, this grouping matches on operation identifiers extracted from the request payload (for example, JSON-RPC method and tool names). This enables fine-grained authorization and quota enforcement for protocols such as MCP where multiple operations share a single endpoint. <b>Note:</b> The <c>proxies</c> and <c>api_resources</c> settings cannot be specified for both the API product and payload operation group; otherwise the call will fail.
/// </summary>
public record GoogleCloudApigeeV1PayloadOperationGroup2
{
    /// <summary>
    /// Required. List of payload operation configurations for Apigee API proxies that are associated with this API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationConfigs")]
    public IReadOnlyList<GoogleCloudApigeeV1PayloadOperationConfig>? OperationConfigs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
