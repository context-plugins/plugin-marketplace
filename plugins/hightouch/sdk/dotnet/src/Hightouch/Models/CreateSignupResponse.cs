using System.Text.Json.Serialization;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// <c>subscribed</c> means consent settled in this request. <c>doi_pending_confirmation</c>
/// means a confirmation was sent and consent settles when the person answers,
/// which may be days later.
/// </summary>
public record CreateSignupResponse
{
    [JsonPropertyName("status")]
    public required StatusHightouchSignupsApi Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
