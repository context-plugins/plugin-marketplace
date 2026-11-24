using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// The schema definition of a table within a base.
/// </summary>
public record TableSchema
{
    /// <summary>
    /// The unique identifier of the table (starts with 'tbl').
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the table.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The description of the table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The ID of the primary field for this table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryFieldId")]
    public string? PrimaryFieldId { get; init; }

    /// <summary>
    /// The list of field definitions in the table.
    /// </summary>
    [JsonPropertyName("fields")]
    public required IReadOnlyList<FieldSchema> Fields { get; init; }

    /// <summary>
    /// The list of view definitions in the table.
    /// </summary>
    [JsonPropertyName("views")]
    public required IReadOnlyList<ViewSchema> Views { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
