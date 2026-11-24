using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// A single replacement configuration.
/// </summary>
public record Entry
{
    /// <summary>
    /// What to replace. Max length is 100 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("search")]
    public string? Search { get; init; }

    /// <summary>
    /// What to replace with. Max length is 100 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replace")]
    public string? Replace { get; init; }

    /// <summary>
    /// Whether the search is case sensitive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caseSensitive")]
    public bool? CaseSensitive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
