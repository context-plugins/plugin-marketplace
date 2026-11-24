using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record OverallPercentage
{
    /// <summary>
    /// Percentage of credit transactions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit")]
    public double? Credit { get; init; }

    /// <summary>
    /// Percentage of debit transactions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debit")]
    public double? Debit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
