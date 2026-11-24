using System.Text.Json.Serialization;

namespace Bitbucket.Models;

public record Links4BitbucketWorkspacesApi
{
    /// <summary>
    /// A link to a resource related to this object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public Link? Self { get; init; }
}
