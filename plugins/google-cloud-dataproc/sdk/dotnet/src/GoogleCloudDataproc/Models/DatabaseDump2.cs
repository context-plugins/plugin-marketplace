using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Immutable. A database dump from a pre-existing metastore's database.
/// </summary>
public record DatabaseDump2
{
    /// <summary>
    /// Optional. The type of the database dump. If unspecified, defaults to MYSQL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; }

    /// <summary>
    /// Optional. A Cloud Storage object or folder URI that specifies the source from which to import metadata. It must begin with gs://.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsUri")]
    public string? GcsUri { get; init; }

    /// <summary>
    /// The type of the database.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("databaseType")]
    public DatabaseType1? DatabaseType { get; init; }

    /// <summary>
    /// Optional. The name of the source database.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceDatabase")]
    public string? SourceDatabase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
