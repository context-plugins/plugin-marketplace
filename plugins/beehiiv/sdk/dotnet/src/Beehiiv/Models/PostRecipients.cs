using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Controls who receives the post. If omitted entirely, defaults to free tier only on both web and email. If a channel key (web or email) is provided but empty, no targets are created for that channel — omit the key to skip a channel.
/// </summary>
public record PostRecipients
{
    /// <summary>
    /// Web audience targeting. Omit this key to create no web targets.
    /// </summary>
    [JsonPropertyName("web")]
    public required PostWebRecipients2 Web { get; init; }

    /// <summary>
    /// Email audience targeting. Omit this key to create no email targets.
    /// </summary>
    [JsonPropertyName("email")]
    public required PostEmailRecipients1 Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
