using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Short-lived links to a ready file: ``url`` renders in place, ``download_url`` saves.
/// </summary>
public record DataFileDownloadResponse
{
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("download_url")]
    public required string DownloadUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
