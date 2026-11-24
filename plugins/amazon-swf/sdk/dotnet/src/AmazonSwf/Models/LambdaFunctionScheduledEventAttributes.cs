using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record LambdaFunctionScheduledEventAttributes
{
    /// <summary>
    /// The unique ID of the Lambda task.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the Lambda function.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the Lambda task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("control")]
    public string? Control { get; init; }

    /// <summary>
    /// The input provided to the Lambda task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// The maximum amount of time a worker can take to process the Lambda task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startToCloseTimeout")]
    public string? StartToCloseTimeout { get; init; }

    /// <summary>
    /// The ID of the LambdaFunctionCompleted event corresponding to the decision that resulted in scheduling this activity task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("decisionTaskCompletedEventId")]
    public required int DecisionTaskCompletedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
