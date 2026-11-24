using System;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// A business or technical requirement for traceability coverage
/// </summary>
public record Requirement
{
    /// <summary>
    /// Unique identifier of the requirement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Display name of the requirement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Detailed description of the requirement specification
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Optional external identifier linking to a third-party requirements tool
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    public string? ExternalId { get; init; }

    /// <summary>
    /// Lifecycle status of the requirement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusUiPathTestManagerRequirementsApi? Status { get; init; }

    /// <summary>
    /// Number of test cases currently linked to this requirement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedTestCaseCount")]
    public int? LinkedTestCaseCount { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the requirement was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdOn")]
    public DateTimeOffset? CreatedOn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
