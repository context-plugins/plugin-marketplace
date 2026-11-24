using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// List of LLM operation configuration details associated with Apigee API proxies.
/// </summary>
public record GoogleCloudApigeeV1LlmOperationGroup
{
    /// <summary>
    /// Required. List of LLM operation configurations for either Apigee API proxies that are associated with this API product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationConfigs")]
    public IReadOnlyList<GoogleCloudApigeeV1LlmOperationConfig>? OperationConfigs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
