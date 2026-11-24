using System.Text.Json.Serialization;

namespace Bitbucket.Models;

public record Production1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branch")]
    public Branch? Branch { get; init; }

    /// <summary>
    /// Name of the target branch. Will be listed here even when the target branch does not exist. Will be <c>null</c> if targeting the main branch and the repository is empty.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Indicates if the setting points at an explicit branch (<c>false</c>) or tracks the main branch (<c>true</c>).
    /// </summary>
    [JsonPropertyName("use_mainbranch")]
    public required bool UseMainbranch { get; init; }
}
