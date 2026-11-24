using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Optional. The lint response for the spec.
/// </summary>
public record GoogleCloudApihubV1LintResponse2
{
    /// <summary>
    /// Optional. Array of issues found in the analyzed document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issues")]
    public IReadOnlyList<GoogleCloudApihubV1Issue>? Issues { get; init; }

    /// <summary>
    /// Required. Name of the linting application.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    /// <summary>
    /// Required. Lint state represents success or failure for linting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public StateApigeeProjectsApi? State { get; init; }

    /// <summary>
    /// Required. Timestamp when the linting response was generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Required. Name of the linter used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linter")]
    public Linter? Linter { get; init; }

    /// <summary>
    /// Optional. Summary of all issue types and counts for each severity level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public IReadOnlyList<GoogleCloudApihubV1SummaryEntry>? Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
