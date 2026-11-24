using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The request for importing an AdaptiveMt file along with its sentences.
/// </summary>
public record ImportAdaptiveMtFileRequest
{
    /// <summary>
    /// Inline file source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileInputSource")]
    public FileInputSource2? FileInputSource { get; init; }

    /// <summary>
    /// Google Cloud Storage file source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsInputSource")]
    public GcsInputSource1? GcsInputSource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
