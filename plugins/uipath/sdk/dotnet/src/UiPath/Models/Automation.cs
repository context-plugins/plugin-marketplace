using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// An automation idea or project in the Automation Hub pipeline
/// </summary>
public record Automation
{
    /// <summary>
    /// Unique integer identifier of the automation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// Display name of the automation idea
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Detailed description of the automation idea and its business value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Current phase of the automation in the pipeline
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phase")]
    public Phase? Phase { get; init; }

    /// <summary>
    /// Current status within the active phase
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Name of the user who submitted the automation idea
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("submittedBy")]
    public string? SubmittedBy { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the idea was submitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("submittedDate")]
    public DateTimeOffset? SubmittedDate { get; init; }

    /// <summary>
    /// ISO 8601 timestamp of the last modification
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModified")]
    public DateTimeOffset? LastModified { get; init; }

    /// <summary>
    /// Estimated cost-benefit analysis data for an automation idea
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedBenefit")]
    public BenefitData? EstimatedBenefit { get; init; }

    /// <summary>
    /// Tags associated with the automation for categorization
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
