using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Unmetered storage capacity for an unlimited team.
/// </summary>
public record UnlimitedDataFileStorageLimits
{
    [JsonPropertyName("kind")]
    public string Kind { get; } = "unlimited";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
