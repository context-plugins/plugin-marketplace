using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record WebhookBearerToken
{
    /// <summary>
    /// Credentials included in webhook POST requests so your server can confirm each request originated from Finix.
    /// <para>
    /// To learn about the different authentication methods, see <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#managing-webhooks-via-api">Managing Webhooks via API</see>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authentication")]
    public Authentication3? Authentication { get; init; }

    /// <summary>
    /// The HTTP or HTTPS URL to receive events. When an event occurs, Finix sends a POST request to this URL with the webhook event payload.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
