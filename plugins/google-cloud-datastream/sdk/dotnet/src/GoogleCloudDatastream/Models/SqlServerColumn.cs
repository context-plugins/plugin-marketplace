using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// SQLServer Column.
/// </summary>
public record SqlServerColumn
{
    /// <summary>
    /// The column name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("column")]
    public string? Column { get; init; }

    /// <summary>
    /// Whether or not the column represents a primary key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryKey")]
    public bool? PrimaryKey { get; init; }

    /// <summary>
    /// Whether or not the column can accept a null value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nullable")]
    public bool? Nullable { get; init; }

    /// <summary>
    /// Column precision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("precision")]
    public int? Precision { get; init; }

    /// <summary>
    /// Column scale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scale")]
    public int? Scale { get; init; }

    /// <summary>
    /// The SQLServer data type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataType")]
    public string? DataType { get; init; }

    /// <summary>
    /// Column length.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("length")]
    public int? Length { get; init; }

    /// <summary>
    /// The ordinal position of the column in the table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ordinalPosition")]
    public int? OrdinalPosition { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
