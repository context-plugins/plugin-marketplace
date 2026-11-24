using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// Response body for a campaign trigger request. Results are returned in the
/// same order as the input <c>recipients</c> array.
/// </summary>
public record StartCampaignResponse
{
    /// <summary>
    /// Per-recipient outcomes. Accepted recipients are queued for delivery;
    /// rejected recipients were not sent.
    /// </summary>
    [JsonPropertyName("results")]
    public required IReadOnlyList<CampaignSendResult> Results { get; init; }
}
