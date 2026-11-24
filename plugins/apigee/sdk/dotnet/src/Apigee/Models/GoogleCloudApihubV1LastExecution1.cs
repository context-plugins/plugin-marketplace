using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Output only. The last execution of the plugin instance.
/// </summary>
public record GoogleCloudApihubV1LastExecution1
{
    /// <summary>
    /// Output only. The result metadata of the last execution of the plugin instance. This will be a string representation of a JSON object and will be available on successful execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultMetadata")]
    public string? ResultMetadata { get; init; }

    /// <summary>
    /// Output only. The last execution start time of the plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    /// <summary>
    /// Output only. The result of the last execution of the plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public Result? Result { get; init; }

    /// <summary>
    /// Output only. The last execution end time of the plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    /// <summary>
    /// Output only. Error message describing the failure, if any, during the last execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorMessage")]
    public string? ErrorMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
