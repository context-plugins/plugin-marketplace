using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record StopExecutionOutput
{
    /// <summary>
    /// The date the execution is stopped.
    /// </summary>
    [JsonPropertyName("stopDate")]
    public required DateTimeOffset StopDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
