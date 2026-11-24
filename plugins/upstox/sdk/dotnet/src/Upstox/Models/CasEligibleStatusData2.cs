using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

/// <summary>
/// CAS (Closing Auction Session) status of the segment. Present only for segments where CAS exists (e.g. NSE_EQ); absent otherwise.
/// </summary>
public record CasEligibleStatusData2
{
    /// <summary>
    /// The CAS (Collateral Auction Session / Closing Auction Session) status of the segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1OpenApiDefinitionMarketHolidaysAndTimingsApi? Status { get; init; }

    /// <summary>
    /// The timestamp (in milliseconds) when the CAS status was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_updated")]
    public long? LastUpdated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
