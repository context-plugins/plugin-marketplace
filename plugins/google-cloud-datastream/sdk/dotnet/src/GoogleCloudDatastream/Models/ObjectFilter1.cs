using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Required. Object filter to apply the customization rules to.
/// </summary>
public record ObjectFilter1
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
