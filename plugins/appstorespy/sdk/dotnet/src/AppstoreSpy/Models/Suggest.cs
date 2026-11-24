using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record Suggest
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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crawled")]
    public DateTimeOffset? Crawled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("app")]
    public string? App { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<string>? Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
