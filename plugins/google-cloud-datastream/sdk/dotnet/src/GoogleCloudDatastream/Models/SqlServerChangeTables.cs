using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Configuration to use Change Tables CDC read method.
/// </summary>
public record SqlServerChangeTables
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
