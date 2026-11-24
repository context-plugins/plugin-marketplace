using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Core.Validation;
using CircleCi.Core.Validation.Attributes;

namespace CircleCi.Models;

/// <summary>
/// Version control system information
/// </summary>
public record VcsInfo
{
    /// <summary>
    /// The VCS URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcs_url")]
    [Format(FormatKind.Uri)]
    public string? VcsUrl { get; init; }

    /// <summary>
    /// The VCS provider
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    public string? Provider { get; init; }

    /// <summary>
    /// The default branch name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_branch")]
    public string? DefaultBranch { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
