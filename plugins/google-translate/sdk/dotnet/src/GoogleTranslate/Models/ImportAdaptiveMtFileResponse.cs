using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The response for importing an AdaptiveMtFile
/// </summary>
public record ImportAdaptiveMtFileResponse
{
    /// <summary>
    /// Output only. The Adaptive MT file that was imported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adaptiveMtFile")]
    public AdaptiveMtFile2? AdaptiveMtFile { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
