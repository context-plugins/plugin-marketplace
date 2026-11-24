using System;
using System.Text.Json.Serialization;
using Rendex.Core.Models;

namespace Rendex.Models;

public record Data1RendexRenderingScreenshotApi
{
    /// <summary>
    /// The signed render URL to embed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public string? Format { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cacheTtl")]
    public int? CacheTtl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
