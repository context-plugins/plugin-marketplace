using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Previous3Months
{
    /// <summary>
    /// Median regular income amount - calculated across all occurrences in last 3 months (note: median provides a more reliable amount than mean for a regular income source as it is less affected by outliers and skewed data - use variance amount to understand outliers and changeHistory to view actual credits)
    /// </summary>
    [JsonPropertyName("amountAvg")]
    public required string AmountAvg { get; init; }

    /// <summary>
    /// Median monthly regular income amount
    /// </summary>
    [JsonPropertyName("amountAvgMonthly")]
    public required string AmountAvgMonthly { get; init; }

    /// <summary>
    /// Difference between min and max payment amount for regular income
    /// </summary>
    [JsonPropertyName("variance")]
    public required string Variance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
