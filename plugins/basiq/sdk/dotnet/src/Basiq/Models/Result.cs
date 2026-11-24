using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// Result containing the expense ratio range
/// </summary>
public record Result
{
    /// <summary>
    /// Expense-to-income ratio range. Calculated as: expense / ME040 (Average Monthly Credit). 'Income Exceeded' indicates ratio greater than 100%.
    /// </summary>
    [JsonPropertyName("range")]
    public required RangeEnum Range { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
