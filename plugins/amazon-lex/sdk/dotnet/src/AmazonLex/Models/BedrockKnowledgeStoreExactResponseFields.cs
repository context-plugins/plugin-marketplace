using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BedrockKnowledgeStoreExactResponseFields
{
    /// <summary>
    /// The answer field used for an exact response from Bedrock Knowledge Store.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("answerField")]
    public string? AnswerField { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
