using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// MySQL Column.
/// </summary>
public record MysqlColumn
{
    /// <summary>
    /// The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataType")]
    public string? DataType { get; init; }

    /// <summary>
    /// Column precision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("precision")]
    public int? Precision { get; init; }

    /// <summary>
    /// Whether or not the column represents a primary key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryKey")]
    public bool? PrimaryKey { get; init; }

    /// <summary>
    /// The ordinal position of the column in the table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ordinalPosition")]
    public int? OrdinalPosition { get; init; }

    /// <summary>
    /// The column name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("column")]
    public string? Column { get; init; }

    /// <summary>
    /// Column collation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collation")]
    public string? Collation { get; init; }

    /// <summary>
    /// Column scale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scale")]
    public int? Scale { get; init; }

    /// <summary>
    /// Column length.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("length")]
    public int? Length { get; init; }

    /// <summary>
    /// Whether or not the column can accept a null value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nullable")]
    public bool? Nullable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
