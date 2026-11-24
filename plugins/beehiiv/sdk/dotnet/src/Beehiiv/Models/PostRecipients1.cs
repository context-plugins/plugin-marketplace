using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The recipients to use for this post. If not provided, the default value will be used.
/// </summary>
public record PostRecipients1
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
