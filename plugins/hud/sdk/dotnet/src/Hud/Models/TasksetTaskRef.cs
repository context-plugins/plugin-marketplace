using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TasksetTaskRef
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
