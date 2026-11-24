using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

/// <summary>
/// Credit usage summary for a V3 API request
/// </summary>
public record V3Billing
{
    /// <summary>
    /// Total credits charged for this request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditsCharged")]
    public int? CreditsCharged { get; init; }

    /// <summary>
    /// Number of successful results returned
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultsReturned")]
    public int? ResultsReturned { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
