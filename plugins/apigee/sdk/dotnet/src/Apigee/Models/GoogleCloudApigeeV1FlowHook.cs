using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1FlowHook
{
    /// <summary>
    /// Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to <c>true</c> to continue execution. Set to <c>false</c> to stop execution if the flow hook throws an exception. Defaults to <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("continueOnError")]
    public bool? ContinueOnError { get; init; }

    /// <summary>
    /// Description of the flow hook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Output only. Where in the API call flow the flow hook is invoked. Must be one of <c>PreProxyFlowHook</c>, <c>PostProxyFlowHook</c>, <c>PreTargetFlowHook</c>, or <c>PostTargetFlowHook</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flowHookPoint")]
    public string? FlowHookPoint { get; init; }

    /// <summary>
    /// Shared flow attached to this flow hook, or empty if there is none attached.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sharedFlow")]
    public string? SharedFlow { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
