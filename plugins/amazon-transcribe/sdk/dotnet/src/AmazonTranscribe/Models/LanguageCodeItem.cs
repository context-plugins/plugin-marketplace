using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record LanguageCodeItem
{
    /// <summary>
    /// Provides the language code for each language identified in your media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode1AmazonTranscribeServiceTranscriptionJobsApi? LanguageCode { get; init; }

    /// <summary>
    /// Provides the total time, in seconds, each identified language is spoken in your media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DurationInSeconds")]
    public double? DurationInSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
