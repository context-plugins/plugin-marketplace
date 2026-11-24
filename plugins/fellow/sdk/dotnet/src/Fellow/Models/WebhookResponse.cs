using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response containing a single webhook.
/// </summary>
public record WebhookResponse
{
    /// <summary>
    /// API model for webhook representation in the developer API.
    /// </summary>
    [JsonPropertyName("webhook")]
    public required Webhook Webhook { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
