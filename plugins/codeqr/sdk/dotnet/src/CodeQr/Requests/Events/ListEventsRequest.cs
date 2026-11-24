using CodeQr.Models.Enums;

namespace CodeQr.Requests.Events;

/// <summary>
/// The inputs of the ListEvents operation.
/// </summary>
public sealed record ListEventsRequest
{
    /// <summary>
    /// The type of event to retrieve analytics for. Defaults to 'clicks'.
    /// </summary>
    public EventCodeqrIoEventsApi Event { get; init; } = EventCodeqrIoEventsApi.Clicks;

    /// <summary>
    /// The domain of the short link.
    /// </summary>
    public string? Domain { get; init; }

    /// <summary>
    /// The short link slug.
    /// </summary>
    public string? Key { get; init; }

    /// <summary>
    /// The unique ID of the short link on CodeQR.
    /// </summary>
    public string? LinkId { get; init; }

    /// <summary>
    /// The unique ID of the QR code on CodeQR.
    /// </summary>
    public string? QrcodeId { get; init; }

    /// <summary>
    /// The unique ID of the page on CodeQR.
    /// </summary>
    public string? PageId { get; init; }

    /// <summary>
    /// This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter.
    /// </summary>
    public string? ExternalId { get; init; }

    /// <summary>
    /// The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults to 24h.
    /// </summary>
    public IntervalCodeqrIoEventsApi Interval { get; init; } = IntervalCodeqrIoEventsApi._24H;

    /// <summary>
    /// The start date and time when to retrieve analytics from.
    /// </summary>
    public string? Start { get; init; }

    /// <summary>
    /// The end date and time when to retrieve analytics from. If not provided, defaults to the current date.
    /// </summary>
    public string? End { get; init; }

    /// <summary>
    /// The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC.
    /// </summary>
    public string Timezone { get; init; } = "UTC";

    /// <summary>
    /// The continent to retrieve analytics for.
    /// </summary>
    public ContinentCode? Continent { get; init; }

    /// <summary>
    /// The country to retrieve analytics for.
    /// </summary>
    public CountryCode? Country { get; init; }

    /// <summary>
    /// The city to retrieve analytics for.
    /// </summary>
    public string? City { get; init; }

    /// <summary>
    /// The device to retrieve analytics for.
    /// </summary>
    public string? Device { get; init; }

    /// <summary>
    /// The browser to retrieve analytics for.
    /// </summary>
    public string? Browser { get; init; }

    /// <summary>
    /// The OS to retrieve analytics for.
    /// </summary>
    public string? Os { get; init; }

    /// <summary>
    /// The referer to retrieve analytics for.
    /// </summary>
    public string? Referer { get; init; }

    /// <summary>
    /// The URL to retrieve analytics for.
    /// </summary>
    public string? Url { get; init; }

    /// <summary>
    /// Whether to exclude the root link from the response.
    /// </summary>
    public bool? ExcludeRoot { get; init; }

    /// <summary>
    /// Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both.
    /// </summary>
    public bool? Root { get; init; }

    /// <summary>
    /// The tag ID to retrieve analytics for.
    /// </summary>
    public string? TagId { get; init; }

    /// <summary>
    /// UTM source to filter analytics by.
    /// </summary>
    public string? UtmSource { get; init; }

    /// <summary>
    /// UTM medium to filter analytics by.
    /// </summary>
    public string? UtmMedium { get; init; }

    /// <summary>
    /// UTM campaign to filter analytics by.
    /// </summary>
    public string? UtmCampaign { get; init; }

    /// <summary>
    /// UTM content to filter analytics by.
    /// </summary>
    public string? UtmContent { get; init; }

    /// <summary>
    /// UTM term to filter analytics by.
    /// </summary>
    public string? UtmTerm { get; init; }

    /// <summary>
    /// The type of analytics to retrieve.
    /// </summary>
    public string? Type { get; init; }

    /// <summary>
    /// The types of analytics to retrieve.
    /// </summary>
    public string? Types { get; init; }

    public double Page { get; init; } = 1d;

    public double Limit { get; init; } = 100d;

    public Order Order { get; init; } = Order.Desc;

    public SortBy SortBy { get; init; } = SortBy.Timestamp;
}
