using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record FeatureChangeRequest
{
    /// <summary>
    /// A unique Feature ID
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// The Project owning the Feature Change Request
    /// </summary>
    [JsonPropertyName("_project")]
    public required string Project { get; init; }

    /// <summary>
    /// Change Transaction model mongo _id.
    /// </summary>
    [JsonPropertyName("_baseFeatureSnapshot")]
    public required string BaseFeatureSnapshot { get; init; }

    /// <summary>
    /// The Feature with requested changes
    /// </summary>
    [JsonPropertyName("_feature")]
    public required string Feature { get; init; }

    /// <summary>
    /// Status of the Feature
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusDevCycleManagementFeatureChangeRequestsApi Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changes")]
    public IReadOnlyList<object>? Changes { get; init; }

    /// <summary>
    /// Describes the type of requested change to a feature.
    /// example: 'featureUpdate'
    /// </summary>
    [JsonPropertyName("operation")]
    public required Operation Operation { get; init; }

    /// <summary>
    /// Change Request Description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// a0 users who are requested to review the change
    /// </summary>
    [JsonPropertyName("reviewers")]
    public required object Reviewers { get; init; }

    /// <summary>
    /// Current Reviewes for the change request
    /// </summary>
    [JsonPropertyName("reviews")]
    public required IReadOnlyList<object> Reviews { get; init; }

    /// <summary>
    /// ID of the User who created the Feature
    /// </summary>
    [JsonPropertyName("_createdBy")]
    public required string CreatedBy { get; init; }

    /// <summary>
    /// ID of the User who last updated the Feature
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_updatedBy")]
    public string? UpdatedBy { get; init; }

    /// <summary>
    /// The date the Feature was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// The date the Feature was last updated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
