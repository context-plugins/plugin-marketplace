using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record CategoryConnectTransactionsApi
{
    /// <summary>
    /// Indicates the method used to match a payment transaction with a merchant or business classification code. Description for each enum; merchantFull: Indicates an exact match between the transaction and a known merchant in the database. merchantPartial: Suggests a partial match with a merchant, usually based on substring or fuzzy logic. mcc: Match is done using the Merchant Category Code associated with the transaction. ml: Match is determined through machine learning algorithms for classification. none: Match is not found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchType")]
    public MatchTypeConnectTransactionsApi? MatchType { get; init; }

    /// <summary>
    /// The confidence score for the matchType which is a float value between 0 and 1. The higher the number, the higher the confidence in the match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchScore")]
    public string? MatchScore { get; init; }

    /// <summary>
    /// Merchant category codes returned from Data holders.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcc")]
    public Mcc? Mcc { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("anzsic")]
    public AnzsicConnectTransactionsApi? Anzsic { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
