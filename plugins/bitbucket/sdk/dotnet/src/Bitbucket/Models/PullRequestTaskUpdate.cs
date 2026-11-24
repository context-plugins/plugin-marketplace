using System.Text.Json.Serialization;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

/// <summary>
/// A pullrequest task update
/// </summary>
public record PullRequestTaskUpdate
{
    /// <summary>
    /// task raw content
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public TaskRawContent? Content { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State2BitbucketPullrequestsApi? State { get; init; }
}
