using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Response message for FetchLinkableRepositories.
/// </summary>
public record FetchLinkableRepositoriesResponse
{
    /// <summary>
    /// repositories ready to be created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repositories")]
    public IReadOnlyList<Repository>? Repositories { get; init; }

    /// <summary>
    /// A token identifying a page of results the server should return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
