using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

/// <summary>
/// Response data for brokerage
/// </summary>
public record ProfitAndLossChargesWrapperData2
{
    /// <summary>
    /// Response data for charges details
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charges_breakdown")]
    public ProfitAndLossChargesData1? ChargesBreakdown { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
