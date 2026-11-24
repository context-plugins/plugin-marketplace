using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.Enums;

namespace DopeSecurity.Models;

/// <summary>
/// A read-only bypass entry pre-configured by Dope Security. Default entries cannot be
/// created or deleted, but partners can set their state to ignored to prevent them from
/// being enforced.
/// </summary>
public record DefaultBypassItem
{
    /// <summary>
    /// The name of the default bypass entry (application name or URL pattern)
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Whether this default entry is applied or ignored for the policy
    /// </summary>
    [JsonPropertyName("state")]
    public required State1 State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
