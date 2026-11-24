using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Core.Validation;
using CircleCi.Core.Validation.Attributes;

namespace CircleCi.Models;

/// <summary>
/// VCS information for this pipeline
/// </summary>
public record Vcs
{
    /// <summary>
    /// The VCS provider name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider_name")]
    public string? ProviderName { get; init; }

    /// <summary>
    /// The origin repository URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("origin_repository_url")]
    [Format(FormatKind.Uri)]
    public string? OriginRepositoryUrl { get; init; }

    /// <summary>
    /// The target repository URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target_repository_url")]
    [Format(FormatKind.Uri)]
    public string? TargetRepositoryUrl { get; init; }

    /// <summary>
    /// The VCS revision
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revision")]
    public string? Revision { get; init; }

    /// <summary>
    /// The VCS branch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branch")]
    public string? Branch { get; init; }

    /// <summary>
    /// The VCS tag
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tag")]
    public string? Tag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
