using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation;
using UiPath.Core.Validation.Attributes;

namespace UiPath.Models;

/// <summary>
/// A Document Understanding project containing classifiers and extractors
/// </summary>
public record Project
{
    /// <summary>
    /// Unique identifier of the project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Display name of the project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional description of the project's purpose
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// URL to retrieve the list of extractors for this project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extractorsUrl")]
    [Format(FormatKind.Uri)]
    public string? ExtractorsUrl { get; init; }

    /// <summary>
    /// URL to retrieve the list of classifiers for this project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifiersUrl")]
    [Format(FormatKind.Uri)]
    public string? ClassifiersUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
