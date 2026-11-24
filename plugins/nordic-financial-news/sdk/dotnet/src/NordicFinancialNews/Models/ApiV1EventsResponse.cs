using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1EventsResponse
{
    [JsonPropertyName("events")]
    public required IReadOnlyList<EventSummary> Events { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationNordicFinancialNewsCalendarEventsApi Pagination { get; init; }

    /// <summary>
    /// Present and <c>true</c> when your plan capped the result to its top-N most recent events. Absent when your plan applies no cap. With <c>mode=semantic</c>, present and <c>true</c> when your plan's source or age restrictions are in force instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan_limited")]
    public bool? PlanLimited { get; init; }

    /// <summary>
    /// Only with <c>mode=semantic</c>. Present and <c>true</c> when the article-match horizon was exhausted, so further matching events exist that this response cannot reach.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("truncated")]
    public bool? Truncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
