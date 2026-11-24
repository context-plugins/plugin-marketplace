using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Where a featured environment's source lives in the public SDK repository.
/// </summary>
public record FeaturedSourceResponse
{
    [JsonPropertyName("repository_url")]
    public required string RepositoryUrl { get; init; }

    /// <summary>
    /// Directory of the environment within the repository
    /// </summary>
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    /// <summary>
    /// Browsable URL of that directory on the default branch
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
