using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// The input of a trigger action to run a Match Booster enrichment.
/// </summary>
public record MatchBoosterTriggerInput
{
    /// <summary>
    /// Whether to re-enrich all rows instead of only new/changed rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forceFullEnrichment")]
    public bool? ForceFullEnrichment { get; init; } = false;

    /// <summary>
    /// The Match Booster region to run the enrichment in. Defaults to the
    /// model's configured region.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public Region? Region { get; init; }
}
