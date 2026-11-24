using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record ExecutionRedrivenEventDetails
{
    /// <summary>
    /// The number of times you've redriven an execution. If you have not yet redriven an execution, the redriveCount is 0. This count is not updated for redrives that failed to start or are pending to be redriven.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redriveCount")]
    public int? RedriveCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
