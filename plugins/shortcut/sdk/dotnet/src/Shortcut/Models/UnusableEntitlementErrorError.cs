using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

public record UnusableEntitlementErrorError
{
    /// <summary>
    /// The tag for violating an entitlement action.
    /// </summary>
    [JsonPropertyName("reason_tag")]
    public string ReasonTag { get; } = "entitlement-violation";

    /// <summary>
    /// Short tag describing the unusable entitlement action taken by the user.
    /// </summary>
    [JsonPropertyName("entitlement_tag")]
    [StringLength(63, MinimumLength = 1)]
    public required string EntitlementTag { get; init; }

    /// <summary>
    /// Message displayed to the user on why their action failed.
    /// </summary>
    [JsonPropertyName("message")]
    [StringLength(256, MinimumLength = 1)]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
