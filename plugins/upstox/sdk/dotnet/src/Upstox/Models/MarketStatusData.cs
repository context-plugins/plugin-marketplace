using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record MarketStatusData
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange")]
    public string? Exchange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_updated")]
    public long? LastUpdated { get; init; }

    /// <summary>
    /// CAS (Closing Auction Session) status of the segment. Present only for segments where CAS exists (e.g. NSE_EQ); absent otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cas_eligible_status")]
    public CasEligibleStatusData2? CasEligibleStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
