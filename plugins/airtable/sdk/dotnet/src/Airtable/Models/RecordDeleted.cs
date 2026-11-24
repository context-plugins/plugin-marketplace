using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// Confirmation that a record was deleted.
/// </summary>
public record RecordDeleted
{
    /// <summary>
    /// The ID of the deleted record.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Always true when the deletion succeeds.
    /// </summary>
    [JsonPropertyName("deleted")]
    public required bool Deleted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
