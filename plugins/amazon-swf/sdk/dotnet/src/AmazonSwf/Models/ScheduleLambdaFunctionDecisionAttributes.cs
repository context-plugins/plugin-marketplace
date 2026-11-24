using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ScheduleLambdaFunctionDecisionAttributes
{
    /// <summary>
    /// A string that identifies the Lambda function execution in the event history.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name, or ARN, of the Lambda function to schedule.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the Lambda task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("control")]
    public string? Control { get; init; }

    /// <summary>
    /// The optional input data to be supplied to the Lambda function.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// The timeout value, in seconds, after which the Lambda function is considered to be failed once it has started. This can be any integer from 1-900 (1s-15m). If no value is supplied, then a default value of 900s is assumed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startToCloseTimeout")]
    public string? StartToCloseTimeout { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
