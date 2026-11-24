using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1EventTypesResponse
{
    [JsonPropertyName("event_types")]
    public required IReadOnlyList<EventTypeSummary> EventTypes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pagination")]
    public PaginationModel? Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
