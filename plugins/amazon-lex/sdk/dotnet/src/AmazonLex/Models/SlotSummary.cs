using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SlotSummary
{
    /// <summary>
    /// The unique identifier of the slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotId")]
    public string? SlotId { get; init; }

    /// <summary>
    /// The name given to the slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotName")]
    public string? SlotName { get; init; }

    /// <summary>
    /// The description of the slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Whether the slot is required or optional. An intent is complete when all required slots are filled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotConstraint")]
    public SlotConstraint1? SlotConstraint { get; init; }

    /// <summary>
    /// The unique identifier for the slot type that defines the values for the slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypeId")]
    public string? SlotTypeId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valueElicitationPromptSpecification")]
    public PromptSpecification? ValueElicitationPromptSpecification { get; init; }

    /// <summary>
    /// The timestamp of the last date and time that the slot was updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
