using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record SuggestLite
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("term")]
    public required string Term { get; init; }

    [JsonPropertyName("country")]
    public required string Country { get; init; }

    [JsonPropertyName("added")]
    public required DateTimeOffset Added { get; init; }

    [JsonPropertyName("lang")]
    public required string Lang { get; init; }

    [JsonPropertyName("store")]
    public required string Store { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
