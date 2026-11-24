using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SlotPriority
{
    /// <summary>
    /// The priority that Amazon Lex should apply to the slot.
    /// </summary>
    [JsonPropertyName("priority")]
    public required int Priority { get; init; }

    /// <summary>
    /// The unique identifier of the slot.
    /// </summary>
    [JsonPropertyName("slotId")]
    public required string SlotId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
