using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TraceStorageObject
{
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonPropertyName("download_url")]
    public required string DownloadUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
