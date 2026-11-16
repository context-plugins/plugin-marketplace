using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record WebhookMinimalFieldsNoAuthentication
{
    /// <summary>
    /// The HTTP or HTTPS URL to receive events. When an event occurs, Finix sends a POST request to this URL with the webhook event payload.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
