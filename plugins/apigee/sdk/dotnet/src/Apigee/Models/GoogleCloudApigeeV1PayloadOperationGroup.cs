using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// List of payload operation configuration details associated with Apigee API proxies. Payload operations enable governance of protocols where operations are embedded in the request body (such as JSON-RPC) rather than defined by the URL path.
/// </summary>
public record GoogleCloudApigeeV1PayloadOperationGroup
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
