using System.Text.Json.Serialization;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record BranchType2
{
    /// <summary>
    /// Whether the branch type is enabled or not. A disabled branch type may contain an invalid <c>prefix</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// The kind of the branch type.
    /// </summary>
    [JsonPropertyName("kind")]
    public required Kind2 Kind { get; init; }

    /// <summary>
    /// The prefix for this branch type. A branch with this prefix will be classified as per <c>kind</c>. The <c>prefix</c> of an enabled branch type must be a valid branch prefix.Additionally, it cannot be blank, empty or <c>null</c>. The <c>prefix</c> for a disabled branch type can be empty or invalid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefix")]
    public string? Prefix { get; init; }
}
