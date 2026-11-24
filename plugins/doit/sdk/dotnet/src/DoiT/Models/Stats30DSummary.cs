using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Minimal 30-day aggregate. Only <c>esr</c> and <c>savings</c> are persisted at this granularity. Responses are denominated in USD.
/// </summary>
public record Stats30DSummary
{
    /// <summary>
    /// Effective Savings Rate (ESR) over the last 30 days, as a fraction from 0 to 1 (for example, <c>0.187</c> is 18.7%). Measures what share of eligible spend is saved through active commitments compared with equivalent on-demand cost. Higher ESR means greater realized savings. Null when not yet available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("esr")]
    public double? Esr { get; init; }

    /// <summary>
    /// Total savings realized over the last 30 days from active commitments (USD).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("savings")]
    public Money? Savings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
