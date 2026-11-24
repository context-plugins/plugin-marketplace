using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record TaskConfig
{
    /// <summary>
    /// Language code for the language that the model supports.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode8 LanguageCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentClassificationConfig")]
    public DocumentClassificationConfig? DocumentClassificationConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntityRecognitionConfig")]
    public EntityRecognitionConfig? EntityRecognitionConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
