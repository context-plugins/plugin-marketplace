using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record RuntimeHintDetails
{
    /// <summary>
    /// One or more strings that Amazon Lex should look for in the input to the bot. Each phrase is given preference when deciding on slot values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeHintValues")]
    public IReadOnlyList<RuntimeHintValue>? RuntimeHintValues { get; init; }

    /// <summary>
    /// A map of constituent sub slot names inside a composite slot in the intent and the phrases that should be added for each sub slot. Inside each composite slot hints, this structure provides a mechanism to add granular sub slot phrases. Only sub slot hints are supported for composite slots. The intent name, composite slot name and the constituent sub slot names must exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subSlotHints")]
    public IReadOnlyDictionary<string, RuntimeHintDetails>? SubSlotHints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
