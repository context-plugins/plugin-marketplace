using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Node group identification and configuration information.
/// </summary>
public record AuxiliaryNodeGroup
{
    /// <summary>
    /// Required. Node group configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nodeGroup")]
    public NodeGroup2? NodeGroup { get; init; }

    /// <summary>
    /// Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nodeGroupId")]
    public string? NodeGroupId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
