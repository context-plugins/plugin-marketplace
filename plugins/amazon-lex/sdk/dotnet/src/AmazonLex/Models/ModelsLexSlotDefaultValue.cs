using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ModelsLexSlotDefaultValue
{
    /// <summary>
    /// The default value for the slot. You can specify one of the following: #context-name.slot-name - The slot value "slot-name" in the context "context-name." {attribute} - The slot value of the session attribute "attribute." 'value' - The discrete value "value."
    /// </summary>
    [JsonPropertyName("defaultValue")]
    public required string DefaultValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
