using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record TestStateConfiguration
{
    /// <summary>
    /// The number of retry attempts that have occurred for the state's Retry that applies to the mocked error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retrierRetryCount")]
    public int? RetrierRetryCount { get; init; }

    /// <summary>
    /// The name of the state from which an error originates when an error is mocked for a Map or Parallel state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorCausedByState")]
    public string? ErrorCausedByState { get; init; }

    /// <summary>
    /// The number of Map state iterations that failed during the Map state invocation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapIterationFailureCount")]
    public int? MapIterationFailureCount { get; init; }

    /// <summary>
    /// The data read by ItemReader in Distributed Map states as found in its original source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapItemReaderData")]
    public string? MapItemReaderData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
