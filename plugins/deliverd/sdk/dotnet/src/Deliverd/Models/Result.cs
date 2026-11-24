using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Result
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("passed")]
    public required bool Passed { get; init; }

    [JsonPropertyName("effect")]
    public required Effect Effect { get; init; }

    [JsonPropertyName("rule")]
    public required string? Rule { get; init; }

    [JsonPropertyName("problem")]
    public required string? Problem { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
