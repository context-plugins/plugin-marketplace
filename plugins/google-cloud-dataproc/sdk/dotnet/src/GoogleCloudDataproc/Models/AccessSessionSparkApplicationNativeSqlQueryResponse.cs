using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Details of a native query for a Spark Application
/// </summary>
public record AccessSessionSparkApplicationNativeSqlQueryResponse
{
    /// <summary>
    /// Native SQL Execution Data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionData")]
    public NativeSqlExecutionUiData? ExecutionData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
