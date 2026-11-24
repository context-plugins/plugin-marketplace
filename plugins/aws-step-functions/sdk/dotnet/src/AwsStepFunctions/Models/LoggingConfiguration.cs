using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record LoggingConfiguration
{
    /// <summary>
    /// Defines which category of execution history events are logged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("level")]
    public Level? Level { get; init; }

    /// <summary>
    /// Determines whether execution data is included in your log. When set to false, data is excluded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeExecutionData")]
    public bool? IncludeExecutionData { get; init; }

    /// <summary>
    /// An array of objects that describes where your execution history events will be logged. Limited to size 1. Required, if your log level is not set to OFF.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destinations")]
    public IReadOnlyList<LogDestination>? Destinations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
