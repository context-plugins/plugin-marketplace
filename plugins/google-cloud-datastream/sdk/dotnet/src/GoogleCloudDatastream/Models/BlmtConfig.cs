using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Models.Enums;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// The configuration for BLMT.
/// </summary>
public record BlmtConfig
{
    /// <summary>
    /// The root path inside the Cloud Storage bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rootPath")]
    public string? RootPath { get; init; }

    /// <summary>
    /// Required. The file format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileFormat")]
    public FileFormat? FileFormat { get; init; }

    /// <summary>
    /// Required. The bigquery connection. Format: <c>{project}.{location}.{name}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionName")]
    public string? ConnectionName { get; init; }

    /// <summary>
    /// Required. The Cloud Storage bucket name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bucket")]
    public string? Bucket { get; init; }

    /// <summary>
    /// Required. The table format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableFormat")]
    public TableFormat? TableFormat { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
