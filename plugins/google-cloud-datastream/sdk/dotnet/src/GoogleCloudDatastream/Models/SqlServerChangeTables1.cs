using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// CDC reader reads from change tables.
/// </summary>
public record SqlServerChangeTables1
{
    /// <summary>
    /// Optional. DDL configuration for change tables.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ddlConfig")]
    public SqlServerDdlConfig2? DdlConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
