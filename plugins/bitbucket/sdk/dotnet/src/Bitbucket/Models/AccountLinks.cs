using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

/// <summary>
/// Links related to an Account.
/// </summary>
public record AccountLinks
{
    /// <summary>
    /// A link to a resource related to this object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avatar")]
    public Link? Avatar { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
