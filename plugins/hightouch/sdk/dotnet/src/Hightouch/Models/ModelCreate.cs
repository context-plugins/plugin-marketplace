using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The input for creating a Model
/// </summary>
public record ModelCreate
{
    /// <summary>
    /// The name of the model
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The slug of the model
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// The type of the query. Available options: custom, raw_sql, tabel, dbt and visual.
    /// </summary>
    [JsonPropertyName("queryType")]
    public required string QueryType { get; init; }

    /// <summary>
    /// The id of the source that model is connected to
    /// </summary>
    [JsonPropertyName("sourceId")]
    public required double SourceId { get; init; }

    /// <summary>
    /// If is_schema is true, the model is just used to build other models.
    /// Either as part of visual querying, or as the root of a visual query.
    /// </summary>
    [JsonPropertyName("isSchema")]
    public required bool IsSchema { get; init; }

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
    /// The Space this audience belongs to. Applies only to workspaces with Spaces enabled;
    /// contact Hightouch to enable Spaces and to obtain Space ids.
    /// Only valid when queryType is "visual". Omitted for models that are not in a Space.
    /// An API key scoped to a Space must set it on create. Read-only after creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spaceId")]
    public string? SpaceId { get; init; }

    /// <summary>
    /// Row-level access rules attached to this audience. Applies only to workspaces with
    /// Spaces enabled. Only valid when queryType is "visual"; always present on an audience.
    /// When creating an audience in a Space, include one rule from each required row-level
    /// access group on the parent model. Rule ids come from the Spaces governance API.
    /// Read-only after creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowLevelAccessRuleIds")]
    public IReadOnlyList<string>? RowLevelAccessRuleIds { get; init; }

    /// <summary>
    /// The primary key will be null if the query doesn't get directly synced (e.g. a relationship table for visual querying).
    /// Optional here but actually conditionally required: every model except a
    /// general model must supply one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryKey")]
    public string? PrimaryKey { get; init; }

    /// <summary>
    /// Create a general model: a model that exposes warehouse data to Hightouch AI
    /// agents instead of being synced. Takes no primaryKey and no folderId, and
    /// cannot be a schema model, and only supports certain query types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isGeneralModel")]
    public bool? IsGeneralModel { get; init; }

    /// <summary>
    /// The description of the model. On a general model this is the context AI
    /// agents read to decide when to use it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dbt")]
    public Dbt1? Dbt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dbt_cloud")]
    public DbtCloud1? DbtCloud { get; init; }
}
