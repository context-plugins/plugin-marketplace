using System.Text.Json.Serialization;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// One changed workspace file preserved as a downloadable telemetry artifact.
/// </summary>
public record CapturedFile
{
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonPropertyName("status")]
    public required Status1HudPlatformQaAgentsApi Status { get; init; }

    [JsonPropertyName("size")]
    public required int Size { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_hash")]
    public ContentHash? ContentHash { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    public string? ContentType { get; init; } = "application/octet-stream";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public Url? Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("download_url")]
    public DownloadUrl? DownloadUrl { get; init; }
}
