using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record HumanLoopActivationOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the HumanLoop created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HumanLoopArn")]
    public string? HumanLoopArn { get; init; }

    /// <summary>
    /// Shows if and why human review was needed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HumanLoopActivationReasons")]
    public IReadOnlyList<string>? HumanLoopActivationReasons { get; init; }

    /// <summary>
    /// Shows the result of condition evaluations, including those conditions which activated a human review.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HumanLoopActivationConditionsEvaluationResults")]
    public string? HumanLoopActivationConditionsEvaluationResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
