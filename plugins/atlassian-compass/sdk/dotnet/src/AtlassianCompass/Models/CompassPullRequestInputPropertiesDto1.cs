using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models.Enums;

namespace AtlassianCompass.Models;

/// <summary>
/// The list of properties of the pull request event.
/// </summary>
public record CompassPullRequestInputPropertiesDto1
{
    /// <summary>
    /// The ID of the pull request event.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The URL of the repository of the pull request.
    /// </summary>
    [JsonPropertyName("repoUrl")]
    public required string RepoUrl { get; init; }

    /// <summary>
    /// The URL of the pull request.
    /// </summary>
    [JsonPropertyName("pullRequestUrl")]
    public required string PullRequestUrl { get; init; }

    /// <summary>
    /// The status of the pull request.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
