using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The recipients for this post. When provided, replaces all existing web and email audience targets with the specified values. If omitted, existing targets are unchanged.
/// </summary>
public record PostRecipients2
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
