using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Request body for listing API-uploaded recordings with optional filters and pagination.
/// </summary>
public record GetUploadsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pagination")]
    public PaginatedRequestParams? Pagination { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public UploadFilters? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
