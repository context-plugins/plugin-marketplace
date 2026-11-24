using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record DeltaSyncConfig
{
    /// <summary>
    /// The number of minutes that an Item is stored in the data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baseTableTTL")]
    public int? BaseTableTtl { get; init; }

    /// <summary>
    /// The Delta Sync table name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deltaSyncTableName")]
    public string? DeltaSyncTableName { get; init; }

    /// <summary>
    /// The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deltaSyncTableTTL")]
    public int? DeltaSyncTableTtl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
