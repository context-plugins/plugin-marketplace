using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Object filter to apply the rules to.
/// </summary>
public record ObjectFilter
{
    /// <summary>
    /// Specific source object identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceObjectIdentifier")]
    public SourceObjectIdentifier1? SourceObjectIdentifier { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
