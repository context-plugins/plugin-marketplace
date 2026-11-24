using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ExactResponseFields
{
    /// <summary>
    /// The name of the field that contains the query made to the OpenSearch Service database.
    /// </summary>
    [JsonPropertyName("questionField")]
    public required string QuestionField { get; init; }

    /// <summary>
    /// The name of the field that contains the answer to the query made to the OpenSearch Service database.
    /// </summary>
    [JsonPropertyName("answerField")]
    public required string AnswerField { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
