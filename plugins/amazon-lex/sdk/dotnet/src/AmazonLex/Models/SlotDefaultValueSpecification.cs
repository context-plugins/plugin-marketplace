using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SlotDefaultValueSpecification
{
    /// <summary>
    /// A list of default values. Amazon Lex chooses the default value to use in the order that they are presented in the list.
    /// </summary>
    [JsonPropertyName("defaultValueList")]
    public required IReadOnlyList<SlotDefaultValue> DefaultValueList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
