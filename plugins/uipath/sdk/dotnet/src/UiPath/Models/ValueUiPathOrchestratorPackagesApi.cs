using System;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

public record ValueUiPathOrchestratorPackagesApi
{
    /// <summary>
    /// Package ID (name and version combined)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public string? Id { get; init; }

    /// <summary>
    /// Package display title
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Title")]
    public string? Title { get; init; }

    /// <summary>
    /// Semantic version of the package
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Version")]
    public string? Version { get; init; }

    /// <summary>
    /// Package description from the NuGet metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the package was published
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Published")]
    public DateTimeOffset? Published { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
