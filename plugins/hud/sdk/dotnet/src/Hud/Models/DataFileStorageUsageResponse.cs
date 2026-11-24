using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.OneOf;

namespace Hud.Models;

/// <summary>
/// Current storage use and effective limits for the caller's team and folder.
/// </summary>
public record DataFileStorageUsageResponse
{
    [JsonPropertyName("usage")]
    public required DataFileStorageUsage Usage { get; init; }

    [JsonPropertyName("limits")]
    public required LimitsHudPlatformDataApi Limits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
