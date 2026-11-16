using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record UpdateWebhookAddAuthenticationToAWebhook
{
    /// <summary>
    /// Credentials included in webhook POST requests so your server can confirm each request originated from Finix.
    /// <para>
    /// To learn about the different authentication methods, see <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#managing-webhooks-via-api">Managing Webhooks via API</see>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authentication")]
    public AuthenticationModel? Authentication { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
