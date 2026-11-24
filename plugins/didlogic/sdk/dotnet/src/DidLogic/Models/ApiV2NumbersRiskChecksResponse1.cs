using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersRiskChecksResponse1
{
    /// <summary>
    /// Created risk check task details
    /// </summary>
    [JsonPropertyName("risk_check_request")]
    public required RiskCheckRequest RiskCheckRequest { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
