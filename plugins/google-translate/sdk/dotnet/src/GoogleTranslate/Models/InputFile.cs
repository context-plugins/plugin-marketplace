using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// An input file.
/// </summary>
public record InputFile
{
    /// <summary>
    /// Google Cloud Storage file source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsSource")]
    public GcsInputSource1? GcsSource { get; init; }

    /// <summary>
    /// Optional. Usage of the file contents. Options are TRAIN|VALIDATION|TEST, or UNASSIGNED (by default) for auto split.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public string? Usage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
