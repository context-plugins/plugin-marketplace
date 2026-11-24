using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// PSC Interface Config.
/// </summary>
public record PscInterfaceConfig1
{
    /// <summary>
    /// Required. Fully qualified name of the Network Attachment that Datastream will connect to. Format: <c>projects/{project}/regions/{region}/networkAttachments/{name}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkAttachment")]
    public string? NetworkAttachment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
