using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Signals that settings are inherited from the base policy
/// </summary>
public record BaseInheritance
{
    /// <summary>
    /// Always <c>true</c>. Signals that settings are inherited from the base policy.
    /// </summary>
    [JsonPropertyName("inheritsFromBase")]
    public string InheritsFromBase { get; } = "True";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
