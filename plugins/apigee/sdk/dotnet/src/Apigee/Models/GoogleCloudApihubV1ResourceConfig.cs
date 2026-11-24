using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The configuration of resources created for a given plugin instance action.
/// </summary>
public record GoogleCloudApihubV1ResourceConfig
{
    /// <summary>
    /// Output only. The pubsub topic to publish the data to. Format is projects/{project}/topics/{topic}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pubsubTopic")]
    public string? PubsubTopic { get; init; }

    /// <summary>
    /// Output only. The type of the action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionType")]
    public ActionType? ActionType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
