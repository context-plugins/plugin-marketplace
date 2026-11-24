using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record RuntimeV2LexActiveContext
{
    /// <summary>
    /// The name of the context.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("timeToLive")]
    public required ActiveContextTimeToLive TimeToLive { get; init; }

    /// <summary>
    /// A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request. If you don't specify a list of contexts, Amazon Lex V2 will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.
    /// </summary>
    [JsonPropertyName("contextAttributes")]
    public required IReadOnlyDictionary<string, string> ContextAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
