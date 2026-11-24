using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Trailing 30 days of CUD coverage for one product line. <c>compute</c> entries carry every cost property except <c>cloudSql</c>; <c>cloud_sql</c> entries carry only <c>cloudSql</c> and <c>onDemand</c>, so each coverage sub-type appears exactly once across the array.
/// </summary>
public record GcpDailyCoverageByService
{
    /// <summary>
    /// Product line this coverage series belongs to.
    /// </summary>
    [JsonPropertyName("service")]
    public required Service7 Service { get; init; }

    /// <summary>
    /// Daily coverage rows, sorted ascending by <c>date</c>.
    /// </summary>
    [JsonPropertyName("days")]
    public required IReadOnlyList<GcpDailyCoverageEntry> Days { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
