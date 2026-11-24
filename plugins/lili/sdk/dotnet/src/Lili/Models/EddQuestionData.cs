using System.Text.Json.Serialization;
using Lili.Core.Models;

namespace Lili.Models;

public record EddQuestionData
{
    /// <summary>
    /// The question
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("question")]
    public string? Question { get; init; }

    /// <summary>
    /// The answer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("answer")]
    public string? Answer { get; init; }

    /// <summary>
    /// The answer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("questionId")]
    public string? QuestionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
