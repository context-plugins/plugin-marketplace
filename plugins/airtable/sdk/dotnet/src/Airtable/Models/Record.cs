using System;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// An Airtable record representing a single row in a table.
/// </summary>
public record Record
{
    /// <summary>
    /// The unique identifier of the record (starts with 'rec').
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The time when the record was created in ISO 8601 format.
    /// </summary>
    [JsonPropertyName("createdTime")]
    public required DateTimeOffset CreatedTime { get; init; }

    /// <summary>
    /// A mapping of field names (or field IDs when returnFieldsByFieldId is true) to their cell values. The structure depends on the field types defined in the table schema.
    /// </summary>
    [JsonPropertyName("fields")]
    public required object Fields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
