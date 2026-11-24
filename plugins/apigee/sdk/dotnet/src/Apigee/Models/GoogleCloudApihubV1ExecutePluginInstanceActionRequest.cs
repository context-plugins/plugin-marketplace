using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The ExecutePluginInstanceAction method's request.
/// </summary>
public record GoogleCloudApihubV1ExecutePluginInstanceActionRequest
{
    /// <summary>
    /// Required. The execution details for the action to execute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionExecutionDetail")]
    public GoogleCloudApihubV1ActionExecutionDetail2? ActionExecutionDetail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
