using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.AllOf;

namespace Bitbucket.Models;

public record GroupBitbucketRepositoriesApiProperties
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public Links5BitbucketPullrequestsApi? Links { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public Account? Owner { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspace")]
    public WorkspaceBitbucketRepositoriesApi? Workspace { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The "sluggified" version of the group's name. This contains only ASCII
    /// characters and can therefore be slightly different than the name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    /// <summary>
    /// The concatenation of the workspace's slug and the group's slug,
    /// separated with a colon (e.g. <c>acme:developers</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("full_slug")]
    public string? FullSlug { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
