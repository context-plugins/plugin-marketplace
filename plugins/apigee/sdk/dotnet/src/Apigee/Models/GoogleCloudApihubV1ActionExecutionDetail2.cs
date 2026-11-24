using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. The execution details for the action to execute.
/// </summary>
public record GoogleCloudApihubV1ActionExecutionDetail2
{
    /// <summary>
    /// Required. The action id of the plugin to execute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionId")]
    public string? ActionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
