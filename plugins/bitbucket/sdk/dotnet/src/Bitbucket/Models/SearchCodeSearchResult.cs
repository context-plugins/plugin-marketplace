using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

public record SearchCodeSearchResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_match_count")]
    public long? ContentMatchCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_matches")]
    public IReadOnlyList<SearchContentMatch>? ContentMatches { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path_matches")]
    public IReadOnlyList<SearchSegment>? PathMatches { get; init; }

    /// <summary>
    /// A file object, representing a file at a commit in a repository
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file")]
    public CommitFile? File { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
