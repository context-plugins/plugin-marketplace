using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1FlowHookConfig
{
    /// <summary>
    /// Name of the flow hook in the following format: <c>organizations/{org}/environments/{env}/flowhooks/{point}</c>. Valid <c>point</c> values include: <c>PreProxyFlowHook</c>, <c>PostProxyFlowHook</c>, <c>PreTargetFlowHook</c>, and <c>PostTargetFlowHook</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Name of the shared flow to invoke in the following format: <c>organizations/{org}/sharedflows/{sharedflow}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sharedFlowName")]
    public string? SharedFlowName { get; init; }

    /// <summary>
    /// Flag that specifies whether the flow should abort after an error in the flow hook. Defaults to <c>true</c> (continue on error).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("continueOnError")]
    public bool? ContinueOnError { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
