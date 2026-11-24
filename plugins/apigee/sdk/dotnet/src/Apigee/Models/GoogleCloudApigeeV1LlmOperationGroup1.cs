using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. Configuration used to group Apigee proxies with resources, method types, LLM model and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources, specific LLM model and how many calls can be made (using the <c>quota</c> setting). <b>Note:</b> The <c>api_resources</c> setting cannot be specified for both the API product and llm operation group; otherwise the call will fail.
/// </summary>
public record GoogleCloudApigeeV1LlmOperationGroup1
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
