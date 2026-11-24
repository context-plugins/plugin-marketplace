using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Summary1
{
    /// <summary>
    /// Total number of transactions in the subgroup
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactionCount")]
    public int? TransactionCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overallPercentage")]
    public OverallPercentage? OverallPercentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
