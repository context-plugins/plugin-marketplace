using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SlotResolutionTestResultItem
{
    /// <summary>
    /// The name of the slot.
    /// </summary>
    [JsonPropertyName("slotName")]
    public required string SlotName { get; init; }

    [JsonPropertyName("resultCounts")]
    public required SlotResolutionTestResultItemCounts ResultCounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
