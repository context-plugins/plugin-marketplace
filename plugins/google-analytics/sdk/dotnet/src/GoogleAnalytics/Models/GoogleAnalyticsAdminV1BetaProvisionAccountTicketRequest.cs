using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Request message for ProvisionAccountTicket RPC.
/// </summary>
public record GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest
{
    /// <summary>
    /// The account to create.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account")]
    public GoogleAnalyticsAdminV1BetaAccount2? Account { get; init; }

    /// <summary>
    /// Redirect URI where the user will be sent after accepting Terms of Service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirectUri")]
    public string? RedirectUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
