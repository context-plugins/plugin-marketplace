using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Required. The config for the output content.
/// </summary>
public record DatasetOutputConfig1
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
