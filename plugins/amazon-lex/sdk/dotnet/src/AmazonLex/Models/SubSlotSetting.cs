using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SubSlotSetting
{
    /// <summary>
    /// The expression text for defining the constituent sub slots in the composite slot using logical AND and OR operators.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expression")]
    public string? Expression { get; init; }

    /// <summary>
    /// Specifications for the constituent sub slots of a composite slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotSpecifications")]
    public IReadOnlyDictionary<string, Specifications>? SlotSpecifications { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
