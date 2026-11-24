using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Job is a PySpark job.
/// </summary>
public record PySparkJob2
{
    /// <summary>
    /// Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, string>? Properties { get; init; }

    /// <summary>
    /// Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mainPythonFileUri")]
    public string? MainPythonFileUri { get; init; }

    /// <summary>
    /// Optional. The runtime log config for job execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loggingConfig")]
    public LoggingConfig1? LoggingConfig { get; init; }

    /// <summary>
    /// Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("args")]
    public IReadOnlyList<string>? Args { get; init; }

    /// <summary>
    /// Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileUris")]
    public IReadOnlyList<string>? FileUris { get; init; }

    /// <summary>
    /// Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pythonFileUris")]
    public IReadOnlyList<string>? PythonFileUris { get; init; }

    /// <summary>
    /// Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jarFileUris")]
    public IReadOnlyList<string>? JarFileUris { get; init; }

    /// <summary>
    /// Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.Note: Spark applications must be deployed in cluster mode (https://spark.apache.org/docs/latest/cluster-overview.html) for correct environment propagation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archiveUris")]
    public IReadOnlyList<string>? ArchiveUris { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
