using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Question1
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("prompt")]
    public required string Prompt { get; init; }

    [JsonPropertyName("help")]
    public required string? Help { get; init; }

    [JsonPropertyName("kind")]
    public required Kind1 Kind { get; init; }

    [JsonPropertyName("required")]
    public required bool Required { get; init; }

    [JsonPropertyName("options")]
    public required IReadOnlyList<string> Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
