using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record VariableDevCycleManagementDeprecatedFeaturesV1Api
{
    /// <summary>
    /// Variable name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// A description of the Variable
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public string? Description { get; init; }

    /// <summary>
    /// Unique Variable identifier, can be used in the SDK / API to reference by key rather then ID.
    /// Must only contain lower-case characters and <c>_</c>, <c>-</c> or <c>.</c>.
    /// </summary>
    [JsonPropertyName("key")]
    [StringLength(100, MinimumLength = 1)]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    /// <summary>
    /// A unique Variable ID
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// The ID of the Project this Variable belongs to
    /// </summary>
    [JsonPropertyName("_project")]
    public required string Project { get; init; }

    /// <summary>
    /// The ID of the Feature this Variable belongs to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_feature")]
    public string? Feature { get; init; }

    /// <summary>
    /// The type of Variable. Must be one of [String | Boolean | Number | JSON]
    /// </summary>
    [JsonPropertyName("type")]
    public required Type4 Type { get; init; }

    /// <summary>
    /// The status of a Variable. Must be one of [active | archived]
    /// </summary>
    [JsonPropertyName("status")]
    public required Status2 Status { get; init; }

    /// <summary>
    /// The system that was used for the creation of the Variable.
    /// </summary>
    [JsonPropertyName("source")]
    public required Source1 Source { get; init; }

    /// <summary>
    /// ID of the User who created the Variable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_createdBy")]
    public string? CreatedBy { get; init; }

    /// <summary>
    /// The date the Variable was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The date the Variable was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Validation schema for variable values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validationSchema")]
    public VariableValidationEntity? ValidationSchema { get; init; }

    /// <summary>
    /// Boolean indicating if the variable is intended to be long-lived within a feature
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("persistent")]
    public bool? Persistent { get; init; }

    /// <summary>
    /// Tags to organize Variables on the dashboard
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
