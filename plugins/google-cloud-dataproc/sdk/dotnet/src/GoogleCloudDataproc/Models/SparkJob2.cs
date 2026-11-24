using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Job is a Spark job.
/// </summary>
public record SparkJob2
{
    /// <summary>
    /// Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileUris")]
    public IReadOnlyList<string>? FileUris { get; init; }

    /// <summary>
    /// Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
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
    /// The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in SparkJob.jar_file_uris.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mainClass")]
    public string? MainClass { get; init; }

    /// <summary>
    /// Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("args")]
    public IReadOnlyList<string>? Args { get; init; }

    /// <summary>
    /// The HCFS URI of the jar file that contains the main class.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mainJarFileUri")]
    public string? MainJarFileUri { get; init; }

    /// <summary>
    /// Optional. The runtime log config for job execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loggingConfig")]
    public LoggingConfig1? LoggingConfig { get; init; }

    /// <summary>
    /// Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, string>? Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
