using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

/// <summary>
/// A diffstat object that includes a summary of changes made to a file between two commits.
/// </summary>
public record DiffStat
{
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lines_added")]
    public int? LinesAdded { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lines_removed")]
    public int? LinesRemoved { get; init; }

    /// <summary>
    /// A file object, representing a file at a commit in a repository
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old")]
    public CommitFile? Old { get; init; }

    /// <summary>
    /// A file object, representing a file at a commit in a repository
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new")]
    public CommitFile? New { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
