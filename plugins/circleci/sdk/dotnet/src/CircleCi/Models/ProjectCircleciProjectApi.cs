using System.Collections.Generic;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Core.Validation;
using CircleCi.Core.Validation.Attributes;

namespace CircleCi.Models;

public record ProjectCircleciProjectApi
{
    /// <summary>
    /// The VCS URL of the project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcs_url")]
    [Format(FormatKind.Uri)]
    public string? VcsUrl { get; init; }

    /// <summary>
    /// Whether the user follows this project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("followed")]
    public bool? Followed { get; init; }

    /// <summary>
    /// The organization or username
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    /// <summary>
    /// The repository name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reponame")]
    public string? Reponame { get; init; }

    /// <summary>
    /// Branch information with recent builds
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branches")]
    public IReadOnlyDictionary<string, Branches>? Branches { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
