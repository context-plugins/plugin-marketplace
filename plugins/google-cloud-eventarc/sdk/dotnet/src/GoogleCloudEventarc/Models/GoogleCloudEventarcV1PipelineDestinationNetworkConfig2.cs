using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Optional. Network config is used to configure how Pipeline resolves and connects to a destination.
/// </summary>
public record GoogleCloudEventarcV1PipelineDestinationNetworkConfig2
{
    /// <summary>
    /// Required. Name of the NetworkAttachment that allows access to the consumer VPC. Format: <c>projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkAttachment")]
    public string? NetworkAttachment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
