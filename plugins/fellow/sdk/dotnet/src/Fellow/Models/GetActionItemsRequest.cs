using System.Text.Json.Serialization;
using Fellow.Core.Models;
using Fellow.Models.Enums;

namespace Fellow.Models;

/// <summary>
/// Request body for getting action items with optional filters and pagination.
/// </summary>
public record GetActionItemsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pagination")]
    public PaginatedRequestParams? Pagination { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public object? Include { get; init; }

    /// <summary>
    /// Sort order for action items. Valid values: 'created_at_desc' (default, newest first), 'created_at_asc' (oldest first), 'updated_at_desc' (most recently updated first), 'updated_at_asc' (least recently updated first), 'due_date' (soonest due date first, items without due dates appear last)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_by")]
    public ActionItemOrderBy? OrderBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public ActionItemFilters? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
