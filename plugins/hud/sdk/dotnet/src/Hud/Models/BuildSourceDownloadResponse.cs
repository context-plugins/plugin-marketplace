using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record BuildSourceDownloadResponse
{
    [JsonPropertyName("build_id")]
    public required Guid BuildId { get; init; }

    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("expires_in")]
    public required int ExpiresIn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
