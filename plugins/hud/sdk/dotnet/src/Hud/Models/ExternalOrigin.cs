using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Where an imported entity comes from: a system and the entity's id in it.
/// </summary>
public record ExternalOrigin
{
    /// <summary>
    /// A system HUD imports environments and runs from.
    /// </summary>
    [JsonPropertyName("system")]
    public string System { get; } = "harbor";

    [JsonPropertyName("external_id")]
    public required string ExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
