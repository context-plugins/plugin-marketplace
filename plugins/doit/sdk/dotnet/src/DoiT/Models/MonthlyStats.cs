using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Trailing 6 calendar months of stats, grouped by SP type.
/// </summary>
public record MonthlyStats
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compute")]
    public IReadOnlyList<AwsMonthlyStatsEntry>? Compute { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("database")]
    public IReadOnlyList<AwsMonthlyStatsEntry>? Database { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
