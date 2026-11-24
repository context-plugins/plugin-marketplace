using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Capability declaration, stripped to its stable identity.
/// <para>
/// <c>url</c> and <c>params</c> from the live <c>hello</c> reply are deliberately absent:
/// they are ephemeral (substrate-local addresses) and may carry secrets
/// (SSH keys), so the build pipeline never transmits or persists them.
/// </para>
/// </summary>
public record ManifestCapability
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("protocol")]
    public required string Protocol { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
