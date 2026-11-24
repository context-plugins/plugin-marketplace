using System;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// Data for creating a new queue item
/// </summary>
public record QueueItemData
{
    /// <summary>
    /// Name of the target queue definition
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    /// <summary>
    /// Priority level for queue processing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Priority")]
    public Priority? Priority { get; init; }

    /// <summary>
    /// Custom key-value payload data for the item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SpecificContent")]
    public object? SpecificContent { get; init; }

    /// <summary>
    /// Optional unique reference string for this item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Reference")]
    public string? Reference { get; init; }

    /// <summary>
    /// Optional deadline by which the item should be processed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DueDate")]
    public DateTimeOffset? DueDate { get; init; }

    /// <summary>
    /// Optional earliest time at which the item may be processed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PostponeDate")]
    public DateTimeOffset? PostponeDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
