using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record AnomalySourceMetadata
{
    /// <summary>
    /// The source of the anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Source")]
    public string? Source { get; init; }

    /// <summary>
    /// The name of the anomaly's resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceResourceName")]
    public string? SourceResourceName { get; init; }

    /// <summary>
    /// The anomaly's resource type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceResourceType")]
    public string? SourceResourceType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
