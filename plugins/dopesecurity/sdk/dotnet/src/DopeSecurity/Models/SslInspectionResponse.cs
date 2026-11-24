using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.Enums;

namespace DopeSecurity.Models;

/// <summary>
/// SSL inspection configuration for a policy.
/// </summary>
public record SslInspectionResponse
{
    /// <summary>
    /// The state of SSL inspection for this policy.
    /// </summary>
    [JsonPropertyName("state")]
    public required State State { get; init; }

    /// <summary>
    /// Whether SSL inspection is inherited from the Base Policy.
    /// </summary>
    [JsonPropertyName("inheritsFromBase")]
    public required bool InheritsFromBase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
