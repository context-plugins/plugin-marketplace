using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// A paginated list of records from a table.
/// </summary>
public record RecordList
{
    [JsonPropertyName("records")]
    public required IReadOnlyList<Record> Records { get; init; }

    /// <summary>
    /// A pagination cursor. If present, pass this value in the offset query parameter to fetch the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public string? Offset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
