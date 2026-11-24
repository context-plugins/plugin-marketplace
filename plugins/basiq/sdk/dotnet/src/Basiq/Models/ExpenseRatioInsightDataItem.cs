using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record ExpenseRatioInsightDataItem
{
    /// <summary>
    /// Echo of the input parameters
    /// </summary>
    [JsonPropertyName("input")]
    public required Input Input { get; init; }

    /// <summary>
    /// Result containing the expense ratio range
    /// </summary>
    [JsonPropertyName("result")]
    public required Result Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
