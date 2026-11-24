using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Trailing 30-day aggregate metrics for one product line.
/// </summary>
public record GcpStats30DByService
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

    /// <summary>
    /// Product line these metrics belong to.
    /// </summary>
    [JsonPropertyName("service")]
    public required ServiceDoiTPerfectScaleForCommitmentsGcpApi Service { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
