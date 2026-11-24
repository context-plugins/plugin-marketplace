using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Data5
{
    /// <summary>
    /// Whether the URL bypass configuration is inherited from the base policy
    /// </summary>
    [JsonPropertyName("inheritsFromBase")]
    public required bool InheritsFromBase { get; init; }

    /// <summary>
    /// Custom URL bypass entries defined by the admin
    /// </summary>
    [JsonPropertyName("custom")]
    public required IReadOnlyList<CustomBypassItem> Custom { get; init; }

    /// <summary>
    /// Default URL bypass entries with their toggle states
    /// </summary>
    [JsonPropertyName("default")]
    public required IReadOnlyList<DefaultBypassItem> Default { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
