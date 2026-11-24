using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Response message for ProvisionAccountTicket RPC.
/// </summary>
public record GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse
{
    /// <summary>
    /// The param to be passed in the ToS link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountTicketId")]
    public string? AccountTicketId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
