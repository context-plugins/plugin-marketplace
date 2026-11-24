using System.Text.Json.Serialization;
using Bitbucket.Core.Validation.Attributes;

namespace Bitbucket.Models;

public record Inline
{
    /// <summary>
    /// The comment's anchor line in the old version of the file. If the comment is a multi-line comment, this is the ending line number in the old version of the file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from")]
    [Minimum(1)]
    public int? From { get; init; }

    /// <summary>
    /// The comment's anchor line in the new version of the file. If the comment is a multi-line comment, this is the ending line number in the new version of the file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("to")]
    [Minimum(1)]
    public int? To { get; init; }

    /// <summary>
    /// The starting line number in the old version of the file, if the comment is a multi-line comment. This is null otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_from")]
    [Minimum(1)]
    public int? StartFrom { get; init; }

    /// <summary>
    /// The starting line number in the new version of the file, if the comment is a multi-line comment. This is null otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_to")]
    [Minimum(1)]
    public int? StartTo { get; init; }

    /// <summary>
    /// The path of the file this comment is anchored to.
    /// </summary>
    [JsonPropertyName("path")]
    public required string Path { get; init; }
}
