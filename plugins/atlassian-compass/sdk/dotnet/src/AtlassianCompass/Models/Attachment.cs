using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

public record Attachment
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("lastModifiedAt")]
    public required DateTimeOffset LastModifiedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
