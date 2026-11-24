using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response containing a paginated list of recordings.
/// </summary>
public record RecordingsListResponse
{
    [JsonPropertyName("recordings")]
    public required PaginatedResponseRecording Recordings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
