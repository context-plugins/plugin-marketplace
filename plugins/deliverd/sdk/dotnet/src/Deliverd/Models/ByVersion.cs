using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ByVersion
{
    [JsonPropertyName("versionNumber")]
    public required double VersionNumber { get; init; }

    [JsonPropertyName("views")]
    public required double Views { get; init; }

    [JsonPropertyName("uniqueViewers")]
    public required double UniqueViewers { get; init; }

    [JsonPropertyName("lastViewedAt")]
    public required string? LastViewedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
