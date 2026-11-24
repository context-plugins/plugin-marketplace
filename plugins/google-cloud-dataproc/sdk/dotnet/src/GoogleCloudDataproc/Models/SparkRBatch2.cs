using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. SparkR batch config.
/// </summary>
public record SparkRBatch2
{
    /// <summary>
    /// Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archiveUris")]
    public IReadOnlyList<string>? ArchiveUris { get; init; }

    /// <summary>
    /// Required. The HCFS URI of the main R file to use as the driver. Must be a .R or .r file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mainRFileUri")]
    public string? MainRFileUri { get; init; }

    /// <summary>
    /// Optional. The arguments to pass to the Spark driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("args")]
    public IReadOnlyList<string>? Args { get; init; }

    /// <summary>
    /// Optional. HCFS URIs of files to be placed in the working directory of each executor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileUris")]
    public IReadOnlyList<string>? FileUris { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
