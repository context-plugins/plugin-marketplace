using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record StopExecutionInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the execution to stop.
    /// </summary>
    [JsonPropertyName("executionArn")]
    public required string ExecutionArn { get; init; }

    /// <summary>
    /// The error code of the failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// A more detailed explanation of the cause of the failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cause")]
    public string? Cause { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
