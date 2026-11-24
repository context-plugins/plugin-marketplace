using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SlotDefaultValueSpec
{
    /// <summary>
    /// The default values for a slot. You can specify more than one default. For example, you can specify a default value to use from a matching context variable, a session attribute, or a fixed value. The default value chosen is selected based on the order that you specify them in the list. For example, if you specify a context variable and a fixed value in that order, Amazon Lex uses the context variable if it is available, else it uses the fixed value.
    /// </summary>
    [JsonPropertyName("defaultValueList")]
    public required IReadOnlyList<ModelsLexSlotDefaultValue> DefaultValueList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
