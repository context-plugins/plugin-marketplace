using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Builds with the requested digests in environments the caller can view, newest first.
/// </summary>
public record BuildLookupResponse
{
    [JsonPropertyName("builds")]
    public required IReadOnlyList<BuildLookupMatch> Builds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
