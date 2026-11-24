using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Result
{
    [JsonPropertyName("postId")]
    public required string PostId { get; init; }

    [JsonPropertyName("items")]
    public required IReadOnlyList<Item1> Items { get; init; }

    [JsonPropertyName("error")]
    public required string? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
