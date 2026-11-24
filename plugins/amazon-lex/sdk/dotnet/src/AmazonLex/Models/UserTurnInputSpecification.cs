using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UserTurnInputSpecification
{
    [JsonPropertyName("utteranceInput")]
    public required UtteranceInputSpecification UtteranceInput { get; init; }

    /// <summary>
    /// Request attributes of the user turn.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestAttributes")]
    public IReadOnlyDictionary<string, string>? RequestAttributes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionState")]
    public InputSessionStateSpecification? SessionState { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
