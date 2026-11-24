using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for creating a new automation idea
/// </summary>
public record CreateAutomationIdeaRequest
{
    /// <summary>
    /// Display name of the automation idea
    /// </summary>
    [JsonPropertyName("name")]
    [MaxLength(256)]
    public required string Name { get; init; }

    /// <summary>
    /// Detailed description of the automation opportunity
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Estimated cost-benefit analysis data for an automation idea
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedBenefit")]
    public BenefitData? EstimatedBenefit { get; init; }

    /// <summary>
    /// Tags for categorizing the automation idea
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
