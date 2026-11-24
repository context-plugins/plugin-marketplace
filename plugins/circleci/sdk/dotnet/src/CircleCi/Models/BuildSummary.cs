using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Core.Validation;
using CircleCi.Core.Validation.Attributes;

namespace CircleCi.Models;

public record BuildSummary
{
    /// <summary>
    /// URL to view the build
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_url")]
    [Format(FormatKind.Uri)]
    public string? BuildUrl { get; init; }

    /// <summary>
    /// The build number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_num")]
    public int? BuildNum { get; init; }

    /// <summary>
    /// The build status
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// The VCS revision
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcs_revision")]
    public string? VcsRevision { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
