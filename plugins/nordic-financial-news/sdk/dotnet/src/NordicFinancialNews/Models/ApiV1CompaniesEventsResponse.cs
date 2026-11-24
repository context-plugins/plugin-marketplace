using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1CompaniesEventsResponse
{
    [JsonPropertyName("events")]
    public required IReadOnlyList<EventSummary> Events { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationModel Pagination { get; init; }

    /// <summary>
    /// Present and <c>true</c> when your plan capped what this endpoint can return. Absent when your plan applies no cap.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan_limited")]
    public bool? PlanLimited { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
