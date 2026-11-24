using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1CalendarEventsResponse1
{
    [JsonPropertyName("calendar_event")]
    public required CalendarEventSummary CalendarEvent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
