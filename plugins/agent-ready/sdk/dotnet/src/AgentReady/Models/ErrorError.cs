using System.Text.Json.Serialization;
using AgentReady.Core.Models;

namespace AgentReady.Models;

/// <summary>
/// Structured error envelope.
/// </summary>
public record ErrorError
{
    [JsonPropertyName("error")]
    public required Error1 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
