using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// Request body for creating a new table within a base.
/// </summary>
public record CreateTableRequest
{
    /// <summary>
    /// The name of the new table.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The description of the new table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The field definitions for the table. At least one field is required.
    /// </summary>
    [JsonPropertyName("fields")]
    [MinLength(1)]
    public required IReadOnlyList<CreateFieldRequest> Fields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
