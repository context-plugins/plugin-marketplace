using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1AudiencesResolveResponse
{
    [JsonPropertyName("resolved")]
    public required IReadOnlyList<Resolved> Resolved { get; init; }

    [JsonPropertyName("ambiguous")]
    public required IReadOnlyList<Ambiguou> Ambiguous { get; init; }

    [JsonPropertyName("unresolved")]
    public required IReadOnlyList<Unresolved> Unresolved { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
