using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record Table
{
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
    /// The field definitions for the table.
    /// </summary>
    [JsonPropertyName("fields")]
    [MinLength(1)]
    public required IReadOnlyList<CreateFieldRequest> Fields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
