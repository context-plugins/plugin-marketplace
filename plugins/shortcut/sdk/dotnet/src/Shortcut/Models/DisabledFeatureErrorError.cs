using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

public record DisabledFeatureErrorError
{
    /// <summary>
    /// The feature that is disabled
    /// </summary>
    [JsonPropertyName("feature_tag")]
    public required string FeatureTag { get; init; }

    /// <summary>
    /// The message explaining the error
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
