using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1CapabilitiesResponse
{
    /// <summary>
    /// Operations this key may call
    /// </summary>
    [JsonPropertyName("capabilities")]
    public required IReadOnlyList<Capability> Capabilities { get; init; }

    /// <summary>
    /// The account the key belongs to
    /// </summary>
    [JsonPropertyName("user")]
    public required User User { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
