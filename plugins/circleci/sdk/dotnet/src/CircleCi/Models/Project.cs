using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Core.Validation;
using CircleCi.Core.Validation.Attributes;

namespace CircleCi.Models;

/// <summary>
/// The project this job belongs to
/// </summary>
public record Project
{
    /// <summary>
    /// The project slug
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    /// <summary>
    /// The project name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// External URL to the project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_url")]
    [Format(FormatKind.Uri)]
    public string? ExternalUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
