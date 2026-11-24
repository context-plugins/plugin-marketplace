using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Trailing 6 calendar months of billing account stats for one product line.
/// </summary>
public record GcpMonthlyStatsByService
{
    /// <summary>
    /// Product line these monthly stats belong to.
    /// </summary>
    [JsonPropertyName("service")]
    public required Service4 Service { get; init; }

    /// <summary>
    /// Monthly aggregates, sorted ascending by <c>month</c>.
    /// </summary>
    [JsonPropertyName("months")]
    public required IReadOnlyList<GcpMonthlyStatsEntry> Months { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
