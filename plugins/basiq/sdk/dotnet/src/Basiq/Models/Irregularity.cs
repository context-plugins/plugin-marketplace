using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Irregularity
{
    /// <summary>
    /// Array of dates for which the expected credit is not met
    /// </summary>
    [JsonPropertyName("gaps")]
    public required IReadOnlyList<string> Gaps { get; init; }

    /// <summary>
    /// Stability percentage indicator of how stable the income is. 100 = no gaps in the income series from the source. Calculated as (number of transactions that are included in the income summary for this source) / (number of transactions that were expected to be included in the income summary for this source).
    /// </summary>
    [JsonPropertyName("stability")]
    public required string Stability { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
