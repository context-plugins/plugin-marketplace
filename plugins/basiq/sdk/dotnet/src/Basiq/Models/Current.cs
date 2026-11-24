using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Current
{
    /// <summary>
    /// Most recent regular income payment amount
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// Most recent regular income payment date
    /// </summary>
    [JsonPropertyName("date")]
    public required string Date { get; init; }

    /// <summary>
    /// Predicted next occurrence for regular income (note: where the pattern has recently ceased there would be no predicted next occurrence)
    /// </summary>
    [JsonPropertyName("nextDate")]
    public required string? NextDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
