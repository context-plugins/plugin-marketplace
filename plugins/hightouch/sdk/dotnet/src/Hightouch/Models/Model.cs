using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The SQL query that pulls data from your source to send to your destination.
/// We send your SQL query directly to your source so any SQL that is valid for your source (including functions) is valid in Hightouch.
/// </summary>
public record Model
{
    /// <summary>
    /// The id of the model
    /// </summary>
    [JsonPropertyName("id")]
    public required double Id { get; init; }

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
    /// The description of the model. Null when no description has been set.
    /// </summary>
    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    /// <summary>
    /// The id of the workspace where the model belongs to
    /// </summary>
    [JsonPropertyName("workspaceId")]
    public required double WorkspaceId { get; init; }

    /// <summary>
    /// The primary key will be null if the query doesn't get directly synced (e.g. a relationship table for visual querying)
    /// </summary>
    [JsonPropertyName("primaryKey")]
    public required string PrimaryKey { get; init; }

    /// <summary>
    /// The timestamp when model was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The timestamp when model was lastly updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The user who created the model, or null if no user was recorded
    /// </summary>
    [JsonPropertyName("createdBy")]
    public required UserReference CreatedBy { get; init; }

    /// <summary>
    /// The user who last updated the model, or null if no user was recorded
    /// </summary>
    [JsonPropertyName("updatedBy")]
    public required UserReference UpdatedBy { get; init; }

    /// <summary>
    /// The id of the source that model is connected to
    /// </summary>
    [JsonPropertyName("sourceId")]
    public required double SourceId { get; init; }

    /// <summary>
    /// The type of the query. Available options: custom, raw_sql, tabel, dbt and visual.
    /// </summary>
    [JsonPropertyName("queryType")]
    public required string QueryType { get; init; }

    /// <summary>
    /// The tags of the model
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyDictionary<string, string> Tags { get; init; }

    /// <summary>
    /// If is_schema is true, the model is just used to build other models.
    /// Either as part of visual querying, or as the root of a visual query.
    /// </summary>
    [JsonPropertyName("isSchema")]
    public required bool IsSchema { get; init; }

    /// <summary>
    /// If is_general_model is true, the model is not synced. It exposes warehouse
    /// data to Hightouch AI agents and is managed from the schema section.
    /// </summary>
    [JsonPropertyName("isGeneralModel")]
    public required bool IsGeneralModel { get; init; }

    /// <summary>
    /// The list of id of syncs that uses this model
    /// </summary>
    [JsonPropertyName("syncs")]
    public required IReadOnlyList<double> Syncs { get; init; }

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
    /// Query that is based on a dbt model
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dbt")]
    public Dbt? Dbt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dbt_cloud")]
    public DbtCloud? DbtCloud { get; init; }

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
    /// The number of rows returned by the most recent successful sync run of this model.
    /// Null if the model has never been synced successfully.
    /// </summary>
    [JsonPropertyName("lastRunSize")]
    public required double? LastRunSize { get; init; }

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
}
