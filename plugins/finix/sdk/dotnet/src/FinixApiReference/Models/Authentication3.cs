using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Credentials included in webhook POST requests so your server can confirm each request originated from Finix.
/// <para>
/// To learn about the different authentication methods, see <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#managing-webhooks-via-api">Managing Webhooks via API</see>.
/// </para>
/// </summary>
public record Authentication3
{
    /// <summary>
    /// A bearer authentication configuration.
    /// </summary>
    [JsonPropertyName("bearer")]
    public required Bearer1 Bearer { get; init; }

    /// <summary>
    /// The type of authentication the <c>Webhook</c> will use:
    /// - <c>BEARER</c> - OAuth2 Bearer Token.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "BEARER";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
