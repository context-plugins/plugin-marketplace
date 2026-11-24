using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.
/// </summary>
public record SparkBatch
{
    /// <summary>
    /// Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.
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
    /// Optional. HCFS URIs of files to be placed in the working directory of each executor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileUris")]
    public IReadOnlyList<string>? FileUris { get; init; }

    /// <summary>
    /// Optional. The name of the driver main class. The jar file that contains the class must be in the classpath or specified in jar_file_uris.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mainClass")]
    public string? MainClass { get; init; }

    /// <summary>
    /// Optional. The HCFS URI of the jar file that contains the main class.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mainJarFileUri")]
    public string? MainJarFileUri { get; init; }

    /// <summary>
    /// Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("args")]
    public IReadOnlyList<string>? Args { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
