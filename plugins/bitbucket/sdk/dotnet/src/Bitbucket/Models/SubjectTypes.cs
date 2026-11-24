using System.Text.Json.Serialization;

namespace Bitbucket.Models;

/// <summary>
/// The mapping of resource/subject types pointing to their individual event types.
/// </summary>
public record SubjectTypes
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repository")]
    public RepositoryBitbucketWebhooksApi? Repository { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspace")]
    public WorkspaceBitbucketWebhooksApi? Workspace { get; init; }
}
