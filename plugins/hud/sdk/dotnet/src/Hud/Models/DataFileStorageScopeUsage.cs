using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record DataFileStorageScopeUsage
{
    [JsonPropertyName("file_count")]
    public required int FileCount { get; init; }

    [JsonPropertyName("size_bytes")]
    public required int SizeBytes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
