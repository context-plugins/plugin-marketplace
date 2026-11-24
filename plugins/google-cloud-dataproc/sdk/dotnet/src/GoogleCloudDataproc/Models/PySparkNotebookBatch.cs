using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A configuration for running a PySpark Notebook batch workload.
/// </summary>
public record PySparkNotebookBatch
{
    /// <summary>
    /// Optional. HCFS URIs of files to be placed in the working directory of each executor
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileUris")]
    public IReadOnlyList<string>? FileUris { get; init; }

    /// <summary>
    /// Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jarFileUris")]
    public IReadOnlyList<string>? JarFileUris { get; init; }

    /// <summary>
    /// Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archiveUris")]
    public IReadOnlyList<string>? ArchiveUris { get; init; }

    /// <summary>
    /// Required. The HCFS URI of the notebook file to execute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notebookFileUri")]
    public string? NotebookFileUri { get; init; }

    /// <summary>
    /// Optional. HCFS URIs of Python files to pass to the PySpark framework.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pythonFileUris")]
    public IReadOnlyList<string>? PythonFileUris { get; init; }

    /// <summary>
    /// Optional. The parameters to pass to the notebook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("params")]
    public IReadOnlyDictionary<string, string>? Params { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
