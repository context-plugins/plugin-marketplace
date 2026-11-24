using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record SurveyResponseAnswer
{
    /// <summary>
    /// The answer provided to the question.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("answer")]
    public string? Answer { get; init; }

    /// <summary>
    /// The time the answer was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public int? Created { get; init; }

    /// <summary>
    /// The ID of the answer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("question_data")]
    public SurveyResponseQuestion? QuestionData { get; init; }

    /// <summary>
    /// The date the answer was updated. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated")]
    public int? Updated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
