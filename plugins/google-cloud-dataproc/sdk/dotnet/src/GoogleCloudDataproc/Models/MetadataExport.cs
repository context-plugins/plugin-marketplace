using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// The details of a metadata export operation.
/// </summary>
public record MetadataExport
{
    /// <summary>
    /// Output only. The current state of the export.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State9? State { get; init; }

    /// <summary>
    /// Output only. The time when the export ended.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    /// <summary>
    /// Output only. The time when the export started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    /// <summary>
    /// Output only. The type of the database dump.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("databaseDumpType")]
    public DatabaseDumpType? DatabaseDumpType { get; init; }

    /// <summary>
    /// Output only. A Cloud Storage URI of a folder that metadata are exported to, in the form of gs:////, where is automatically generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destinationGcsUri")]
    public string? DestinationGcsUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
