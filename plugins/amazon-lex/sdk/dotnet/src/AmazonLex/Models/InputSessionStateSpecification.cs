using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record InputSessionStateSpecification
{
    /// <summary>
    /// Session attributes for the session state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionAttributes")]
    public IReadOnlyDictionary<string, string>? SessionAttributes { get; init; }

    /// <summary>
    /// Active contexts for the session state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activeContexts")]
    public IReadOnlyList<ActiveContext>? ActiveContexts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeHints")]
    public RuntimeHints? RuntimeHints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
