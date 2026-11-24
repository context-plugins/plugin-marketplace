using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// The metadata management activities of the metastore service.
/// </summary>
public record MetadataManagementActivity
{
    /// <summary>
    /// Output only. The latest metadata exports of the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadataExports")]
    public IReadOnlyList<MetadataExport>? MetadataExports { get; init; }

    /// <summary>
    /// Output only. The latest restores of the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("restores")]
    public IReadOnlyList<Restore>? Restores { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
