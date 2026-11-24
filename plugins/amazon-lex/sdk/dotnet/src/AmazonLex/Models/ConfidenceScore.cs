using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ConfidenceScore
{
    /// <summary>
    /// A score that indicates how confident Amazon Lex V2 is that an intent satisfies the user's intent. Ranges between 0.00 and 1.00. Higher scores indicate higher confidence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public double? Score { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
