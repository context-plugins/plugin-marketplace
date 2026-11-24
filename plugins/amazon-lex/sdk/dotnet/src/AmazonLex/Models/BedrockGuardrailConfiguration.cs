using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BedrockGuardrailConfiguration
{
    /// <summary>
    /// The unique guardrail id for the Bedrock guardrail configuration.
    /// </summary>
    [JsonPropertyName("identifier")]
    public required string Identifier { get; init; }

    /// <summary>
    /// The guardrail version for the Bedrock guardrail configuration.
    /// </summary>
    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
