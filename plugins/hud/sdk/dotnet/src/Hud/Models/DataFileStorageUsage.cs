using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record DataFileStorageUsage
{
    [JsonPropertyName("team")]
    public required DataFileStorageScopeUsage Team { get; init; }

    [JsonPropertyName("shared")]
    public required DataFileStorageScopeUsage Shared { get; init; }

    [JsonPropertyName("member")]
    public required DataFileStorageScopeUsage Member { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
