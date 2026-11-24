using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Output configuration for datasets.
/// </summary>
public record DatasetOutputConfig
{
    /// <summary>
    /// Google Cloud Storage destination to write the output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsDestination")]
    public GcsOutputDestination2? GcsDestination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
