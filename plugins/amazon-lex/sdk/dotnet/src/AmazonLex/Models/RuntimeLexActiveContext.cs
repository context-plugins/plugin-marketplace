using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record RuntimeLexActiveContext
{
    /// <summary>
    /// The name of the context.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("timeToLive")]
    public required RuntimeLexActiveContextTimeToLive TimeToLive { get; init; }

    /// <summary>
    /// State variables for the current context. You can use these values as default values for slots in subsequent events.
    /// </summary>
    [JsonPropertyName("parameters")]
    public required IReadOnlyDictionary<string, string> Parameters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
