using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record LanguageWithScore
{
    /// <summary>
    /// The language code of the identified language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode3AmazonTranscribeServiceOperationsApi? LanguageCode { get; init; }

    /// <summary>
    /// The confidence score associated with the identified language code. Confidence scores are values between zero and one; larger values indicate a higher confidence in the identified language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Score")]
    public double? Score { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
