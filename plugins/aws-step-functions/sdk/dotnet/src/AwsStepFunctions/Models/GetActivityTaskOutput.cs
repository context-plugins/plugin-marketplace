using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record GetActivityTaskOutput
{
    /// <summary>
    /// A token that identifies the scheduled task. This token must be copied and included in subsequent calls to SendTaskHeartbeat, SendTaskSuccess or SendTaskFailure in order to report the progress or completion of the task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskToken")]
    public string? TaskToken { get; init; }

    /// <summary>
    /// The string that contains the JSON input data for the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
