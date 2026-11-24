using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1CalendarEventsResponse
{
    [JsonPropertyName("calendar_events")]
    public required IReadOnlyList<CalendarEventSummary> CalendarEvents { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationNordicFinancialNewsCalendarEventsApi Pagination { get; init; }

    /// <summary>
    /// Present and <c>true</c> when your plan restricted the result to its upcoming-events window, so the result may be incomplete. Filters narrow within that window rather than searching the full calendar, so on a limited plan an issuer filter often returns an empty list. Absent when your plan applies no restriction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan_limited")]
    public bool? PlanLimited { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
