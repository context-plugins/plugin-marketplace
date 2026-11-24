using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for adding a new item to a queue
/// </summary>
public record AddQueueItemRequest
{
    /// <summary>
    /// Data for creating a new queue item
    /// </summary>
    [JsonPropertyName("itemData")]
    public required QueueItemData ItemData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
