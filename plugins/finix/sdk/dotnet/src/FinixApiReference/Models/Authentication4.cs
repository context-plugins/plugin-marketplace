using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Credentials included in webhook POST requests so your server can confirm each request originated from Finix.
/// <para>
/// To learn about the different authentication methods, see <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#managing-webhooks-via-api">Managing Webhooks via API</see>.
/// </para>
/// </summary>
public record Authentication4
{
    /// <summary>
    /// The type of authentication the <c>Webhook</c> will use:
    /// - <c>NONE</c>: No authentication will be used.
    /// - <c>BASIC</c>: Basic authentication.
    /// - <c>BEARER</c>: OAuth2 Bearer Token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type41? Type { get; init; } = Type41.None;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
