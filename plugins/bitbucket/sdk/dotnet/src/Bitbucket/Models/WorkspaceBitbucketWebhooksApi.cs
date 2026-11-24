using System.Text.Json.Serialization;

namespace Bitbucket.Models;

public record WorkspaceBitbucketWebhooksApi
{
    /// <summary>
    /// A link to a resource related to this object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public Link? Events { get; init; }
}
