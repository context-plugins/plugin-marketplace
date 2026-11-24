using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record BuildSourcePreviewResponse
{
    [JsonPropertyName("build_id")]
    public required Guid BuildId { get; init; }

    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonPropertyName("content")]
    public required string Content { get; init; }

    [JsonPropertyName("size")]
    public required int Size { get; init; }

    [JsonPropertyName("content_hash")]
    public required string ContentHash { get; init; }

    [JsonPropertyName("content_type")]
    public required string ContentType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
