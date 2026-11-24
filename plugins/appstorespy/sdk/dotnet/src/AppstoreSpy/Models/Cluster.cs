using System.Collections.Generic;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record Cluster
{
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("items")]
    public required IReadOnlyList<string> Items { get; init; }

    [JsonPropertyName("layout")]
    public required string Layout { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
