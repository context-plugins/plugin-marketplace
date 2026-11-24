using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BedrockModelSpecification
{
    /// <summary>
    /// The ARN of the foundation model used in descriptive bot building.
    /// </summary>
    [JsonPropertyName("modelArn")]
    public required string ModelArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("guardrail")]
    public BedrockGuardrailConfiguration? Guardrail { get; init; }

    /// <summary>
    /// The Bedrock trace status in the Bedrock model specification details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traceStatus")]
    public TraceStatus? TraceStatus { get; init; }

    /// <summary>
    /// The custom prompt used in the Bedrock model specification details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customPrompt")]
    public string? CustomPrompt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
