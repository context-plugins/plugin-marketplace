using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record StateExitedEventDetails
{
    /// <summary>
    /// The name of the state. A name must not contain: white space brackets { } [ ] wildcard characters ? * special characters " # % \ ^ | ~ ` $ &amp; , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The JSON output data of the state. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output")]
    public string? Output { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputDetails")]
    public HistoryEventExecutionDataDetails? OutputDetails { get; init; }

    /// <summary>
    /// Map of variable name and value as a serialized JSON representation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assignedVariables")]
    public IReadOnlyDictionary<string, string>? AssignedVariables { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assignedVariablesDetails")]
    public AssignedVariablesDetails? AssignedVariablesDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
