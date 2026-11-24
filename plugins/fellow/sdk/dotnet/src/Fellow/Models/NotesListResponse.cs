using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response containing a paginated list of notes.
/// </summary>
public record NotesListResponse
{
    [JsonPropertyName("notes")]
    public required PaginatedResponseNote Notes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
