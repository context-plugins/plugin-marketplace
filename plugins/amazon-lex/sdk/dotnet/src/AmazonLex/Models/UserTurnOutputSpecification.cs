using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UserTurnOutputSpecification
{
    [JsonPropertyName("intent")]
    public required UserTurnIntentOutput Intent { get; init; }

    /// <summary>
    /// The contexts that are active in the turn.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activeContexts")]
    public IReadOnlyList<ActiveContext>? ActiveContexts { get; init; }

    /// <summary>
    /// The transcript that is output for the user turn by the test execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transcript")]
    public string? Transcript { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
