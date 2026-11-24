using System.Text.Json.Serialization;

namespace Bitbucket.Models;

public record Development
{
    /// <summary>
    /// Name of the target branch. If inherited by a repository, it will default to the main branch if the specified branch does not exist.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Indicates if the setting points at an explicit branch (<c>false</c>) or tracks the main branch (<c>true</c>).
    /// </summary>
    [JsonPropertyName("use_mainbranch")]
    public required bool UseMainbranch { get; init; }
}
