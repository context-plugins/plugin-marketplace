using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1CompaniesCalendarEventsResponse
{
    [JsonPropertyName("calendar_events")]
    public required IReadOnlyList<CalendarEventSummaryNordicFinancialNewsCompaniesApi> CalendarEvents { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationModel Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
