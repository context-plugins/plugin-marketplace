using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.
/// </summary>
public record SparkSqlBatch
{
    /// <summary>
    /// Required. The HCFS URI of the script that contains Spark SQL queries to execute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryFileUri")]
    public string? QueryFileUri { get; init; }

    /// <summary>
    /// Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jarFileUris")]
    public IReadOnlyList<string>? JarFileUris { get; init; }

    /// <summary>
    /// Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryVariables")]
    public IReadOnlyDictionary<string, string>? QueryVariables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
