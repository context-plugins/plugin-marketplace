using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record DisabledFeatureError
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
}
