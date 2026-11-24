using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Category
{
    /// <summary>
    /// Indicates the method used to match a payment transaction with a merchant or business classification code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchType")]
    public MatchType? MatchType { get; init; }

    /// <summary>
    /// The confidence score for the matchType which is a float value between 0 and 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchScore")]
    public double? MatchScore { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("anzsic")]
    public Anzsic? Anzsic { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
