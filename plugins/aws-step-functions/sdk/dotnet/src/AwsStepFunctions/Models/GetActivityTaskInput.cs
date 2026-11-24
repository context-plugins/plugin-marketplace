using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record GetActivityTaskInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the activity to retrieve tasks from (assigned when you create the task using CreateActivity.)
    /// </summary>
    [JsonPropertyName("activityArn")]
    public required string ActivityArn { get; init; }

    /// <summary>
    /// You can provide an arbitrary name in order to identify the worker that the task is assigned to. This name is used when it is logged in the execution history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workerName")]
    public string? WorkerName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
