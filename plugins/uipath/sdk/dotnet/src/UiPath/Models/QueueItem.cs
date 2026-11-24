using System;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// A single transaction item in a queue
/// </summary>
public record QueueItem
{
    /// <summary>
    /// Unique integer identifier of the queue item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public long? Id { get; init; }

    /// <summary>
    /// Unique GUID key for the queue item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Key")]
    public Guid? Key { get; init; }

    /// <summary>
    /// ID of the queue this item belongs to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("QueueDefinitionId")]
    public long? QueueDefinitionId { get; init; }

    /// <summary>
    /// Current processing status of the queue item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public StatusUiPathOrchestratorQueueItemsApi? Status { get; init; }

    /// <summary>
    /// Manual review status for failed items
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReviewStatus")]
    public ReviewStatus? ReviewStatus { get; init; }

    /// <summary>
    /// Processing priority of the queue item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Priority")]
    public Priority1? Priority { get; init; }

    /// <summary>
    /// Optional unique reference string for idempotency
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Reference")]
    public string? Reference { get; init; }

    /// <summary>
    /// Custom key-value payload data for the queue item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SpecificContent")]
    public object? SpecificContent { get; init; }

    /// <summary>
    /// Output data written by the robot after processing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Output")]
    public object? Output { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the item was added to the queue
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when processing began
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartProcessing")]
    public DateTimeOffset? StartProcessing { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when processing ended
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndProcessing")]
    public DateTimeOffset? EndProcessing { get; init; }

    /// <summary>
    /// Number of times this item has been retried
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetryNumber")]
    public int? RetryNumber { get; init; }

    /// <summary>
    /// Optional deadline for processing the item
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DueDate")]
    public DateTimeOffset? DueDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
