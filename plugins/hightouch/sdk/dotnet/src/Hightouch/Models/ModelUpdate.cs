using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The input for updating a Model
/// </summary>
public record ModelUpdate
{
    /// <summary>
    /// The name of the model
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The description of the model. Null when no description has been set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// If is_schema is true, the model is just used to build other models.
    /// Either as part of visual querying, or as the root of a visual query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isSchema")]
    public bool? IsSchema { get; init; }

    /// <summary>
    /// Visual query, used by audience
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visual")]
    public Visual? Visual { get; init; }

    /// <summary>
    /// Custom query for sources that doesn't support sql. For example, Airtable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom")]
    public Custom? Custom { get; init; }

    /// <summary>
    /// Table-based query that fetches on a table instead of SQL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("table")]
    public Table? Table { get; init; }

    /// <summary>
    /// Standard raw SQL query
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("raw")]
    public Raw? Raw { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("folderId")]
    public string? FolderId { get; init; }

    /// <summary>
    /// The primary key will be null if the query doesn't get directly synced (e.g. a relationship table for visual querying)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryKey")]
    public string? PrimaryKey { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dbt")]
    public Dbt1? Dbt { get; init; }
}
