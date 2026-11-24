using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Network Configuration that can be inherited by other protos.
/// </summary>
public record NetworkConfig
{
    /// <summary>
    /// Required. Name of the NetworkAttachment that allows access to the customer's VPC. Format: <c>projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkAttachment")]
    public string? NetworkAttachment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
