using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Details of a query for a Spark Application
/// </summary>
public record AccessSparkApplicationSqlQueryResponse
{
    /// <summary>
    /// SQL Execution Data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionData")]
    public SqlExecutionUiData? ExecutionData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
