using System.Text.Json.Serialization;
using Bitbucket.Models.AllOf;

namespace Bitbucket.Models;

/// <summary>
/// A pullrequest task create
/// </summary>
public record PullRequestTaskCreate
{
    /// <summary>
    /// task raw content
    /// </summary>
    [JsonPropertyName("content")]
    public required TaskRawContent Content { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comment")]
    public CommentBitbucketPullrequestsApi? Comment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pending")]
    public bool? Pending { get; init; }
}
