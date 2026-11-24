using System.Text.Json.Serialization;

namespace Bitbucket.Models;

public record Development2
{
    /// <summary>
    /// Indicates if the configured branch is valid, that is, if the configured branch actually exists currently. Is always <c>true</c> when <c>use_mainbranch</c> is <c>true</c> (even if the main branch does not exist). This field is read-only. This field is ignored when updating/creating settings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_valid")]
    public bool? IsValid { get; init; }

    /// <summary>
    /// The configured branch. It must be <c>null</c> when <c>use_mainbranch</c> is <c>true</c>. Otherwise it must be a non-empty value. It is possible for the configured branch to not exist (e.g. it was deleted after the settings are set). In this case <c>is_valid</c> will be <c>false</c>. The branch must exist when updating/setting the <c>name</c> or an error will occur.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Indicates if the setting points at an explicit branch (<c>false</c>) or tracks the main branch (<c>true</c>). When <c>true</c> the <c>name</c> must be <c>null</c> or not provided. When <c>false</c> the <c>name</c> must contain a non-empty branch name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("use_mainbranch")]
    public bool? UseMainbranch { get; init; }
}
