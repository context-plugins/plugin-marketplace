using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record ActivityStartedEventDetails
{
    /// <summary>
    /// The name of the worker that the task is assigned to. These names are provided by the workers when calling GetActivityTask.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workerName")]
    public string? WorkerName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
