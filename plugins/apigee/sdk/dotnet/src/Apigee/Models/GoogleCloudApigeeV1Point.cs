using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Point is a group of information collected by runtime plane at critical points of the message flow of the processed API request. This is a list of supported point IDs, categorized to three major buckets. For each category, debug points that we are currently supporting are listed below: - Flow status debug points: StateChange FlowInfo Condition Execution DebugMask Error - Flow control debug points: FlowCallout Paused Resumed FlowReturn BreakFlow Error - Runtime debug points: ScriptExecutor FlowCalloutStepDefinition CustomTarget StepDefinition Oauth2ServicePoint RaiseFault NodeJS The detail information of the given debug point is stored in a list of results.
/// </summary>
public record GoogleCloudApigeeV1Point
{
    /// <summary>
    /// Name of a step in the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// List of results extracted from a given debug point.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<GoogleCloudApigeeV1Result>? Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
