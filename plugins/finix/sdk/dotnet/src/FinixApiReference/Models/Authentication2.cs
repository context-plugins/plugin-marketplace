using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Credentials included in webhook POST requests so your server can confirm each request originated from Finix.
/// <para>
/// To learn about the different authentication methods, see <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#managing-webhooks-via-api">Managing Webhooks via API</see>.
/// </para>
/// </summary>
public record Authentication2
{
    /// <summary>
    /// A basic authentication configuration provided by the user.
    /// </summary>
    [JsonPropertyName("basic")]
    public required Basic1 Basic { get; init; }

    /// <summary>
    /// The type of authentication the <c>Webhook</c> will use:
    /// - <c>BASIC</c> - Basic authentication.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "BASIC";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
