using System.Text.Json.Serialization;
using AgentReady.Core.Models;

namespace AgentReady.Models;

/// <summary>
/// NLWeb failure envelope.
/// </summary>
public record AskFailure
{
    /// <summary>
    /// NLWeb response envelope metadata.
    /// </summary>
    [JsonPropertyName("_meta")]
    public required AskMeta Meta { get; init; }

    [JsonPropertyName("error")]
    public required Error2 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
