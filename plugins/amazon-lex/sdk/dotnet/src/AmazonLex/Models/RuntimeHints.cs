using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record RuntimeHints
{
    /// <summary>
    /// A list of the slots in the intent that should have runtime hints added, and the phrases that should be added for each slot. The first level of the slotHints map is the name of the intent. The second level is the name of the slot within the intent. For more information, see Using hints to improve accuracy. The intent name and slot name must exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotHints")]
    public IReadOnlyDictionary<string, RuntimeHintDetails>? SlotHints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
