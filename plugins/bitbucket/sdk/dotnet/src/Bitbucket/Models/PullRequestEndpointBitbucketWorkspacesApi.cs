using System.Text.Json.Serialization;
using Bitbucket.Models.AllOf;

namespace Bitbucket.Models;

public record PullRequestEndpointBitbucketWorkspacesApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repository")]
    public RepositoryBitbucketWorkspacesApi? Repository { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branch")]
    public PullRequestBranch? Branch { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commit")]
    public PullRequestCommit? Commit { get; init; }
}
