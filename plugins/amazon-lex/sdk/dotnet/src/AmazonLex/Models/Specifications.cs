using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record Specifications
{
    /// <summary>
    /// The unique identifier assigned to the slot type.
    /// </summary>
    [JsonPropertyName("slotTypeId")]
    public required string SlotTypeId { get; init; }

    [JsonPropertyName("valueElicitationSetting")]
    public required SubSlotValueElicitationSetting ValueElicitationSetting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
