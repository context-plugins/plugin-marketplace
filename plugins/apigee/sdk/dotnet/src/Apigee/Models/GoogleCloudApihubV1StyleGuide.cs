using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Represents a singleton style guide resource to be used for linting Open API specs.
/// </summary>
public record GoogleCloudApihubV1StyleGuide
{
    /// <summary>
    /// Required. Input only. The contents of the uploaded style guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contents")]
    public GoogleCloudApihubV1StyleGuideContents1? Contents { get; init; }

    /// <summary>
    /// Identifier. The name of the style guide. Format: <c>projects/{project}/locations/{location}/plugins/{plugin}/styleGuide</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. Target linter for the style guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linter")]
    public Linter1? Linter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
