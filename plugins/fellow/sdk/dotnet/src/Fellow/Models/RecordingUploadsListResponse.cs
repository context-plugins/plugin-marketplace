using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response containing a paginated list of API-uploaded recordings with import status.
/// </summary>
public record RecordingUploadsListResponse
{
    [JsonPropertyName("uploads")]
    public required PaginatedResponseRecordingUpload Uploads { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
