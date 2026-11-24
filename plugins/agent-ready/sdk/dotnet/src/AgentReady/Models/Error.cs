using System.Text.Json.Serialization;
using AgentReady.Core.Models;

namespace AgentReady.Models;

/// <summary>
/// Structured error envelope.
/// </summary>
public record Error
{
    [JsonPropertyName("error")]
    public required Error1 ErrorValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
