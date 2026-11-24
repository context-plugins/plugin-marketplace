using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Optional. Network config is used to configure how Eventarc resolves and connect to a destination. This should only be used with HttpEndpoint destination type.
/// </summary>
public record NetworkConfig2
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
