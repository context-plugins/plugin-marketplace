using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record RedriveExecutionOutput
{
    /// <summary>
    /// The date the execution was last redriven.
    /// </summary>
    [JsonPropertyName("redriveDate")]
    public required DateTimeOffset RedriveDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
