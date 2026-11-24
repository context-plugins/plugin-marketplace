using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response containing a paginated list of action items.
/// </summary>
public record ActionItemsListResponse
{
    [JsonPropertyName("action_items")]
    public required PaginatedResponseActionItem ActionItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
