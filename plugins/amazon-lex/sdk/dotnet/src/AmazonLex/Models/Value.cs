using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record Value
{
    /// <summary>
    /// The part of the user's response to the slot elicitation that Amazon Lex V2 determines is relevant to the slot value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalValue")]
    public string? OriginalValue { get; init; }

    /// <summary>
    /// The value that Amazon Lex V2 determines for the slot, given the user input. The actual value depends on the setting of the value selection strategy for the bot. You can choose to use the value entered by the user, or you can have Amazon Lex V2 choose the first value in the resolvedValues list.
    /// </summary>
    [JsonPropertyName("interpretedValue")]
    public required string InterpretedValue { get; init; }

    /// <summary>
    /// A list of values that Amazon Lex V2 determines are possible resolutions for the user input. The first value matches the interpretedValue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolvedValues")]
    public IReadOnlyList<string>? ResolvedValues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
