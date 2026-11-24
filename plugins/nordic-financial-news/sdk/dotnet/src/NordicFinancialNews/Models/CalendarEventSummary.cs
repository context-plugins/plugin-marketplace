using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Models;

public record CalendarEventSummary
{
    /// <summary>
    /// Unique calendar event identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Event title as reported by the issuer or exchange
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Optional long-form description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The kind of calendar event
    /// </summary>
    [JsonPropertyName("event_type")]
    public required EventType EventType { get; init; }

    /// <summary>
    /// Event lifecycle status. <c>scheduled</c> is upcoming; <c>published</c> means the event has occurred (events flip ~2 days after their date); <c>cancelled</c> means the issuer withdrew it. List endpoints return <c>scheduled</c> + <c>published</c> and exclude <c>cancelled</c> by default. Pass the <c>status</c> query parameter to filter (e.g. <c>status=cancelled</c>).
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    /// <summary>
    /// Granularity of <c>scheduled_at</c>. <c>exact</c> = timestamp known; <c>day</c> = date only; <c>month</c> = only the month is known. Consumers that need a date should still use <c>scheduled_at</c> (set to a representative point inside the window).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_precision")]
    public DatePrecision? DatePrecision { get; init; }

    /// <summary>
    /// Fiscal period slug (required for report-type events, e.g. <c>q3_2026</c>, <c>fy_2025</c>). For a split fiscal year the year is the one in which the fiscal year ends (2025/26 → <c>fy_2026</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fiscal_period")]
    public string? FiscalPeriod { get; init; }

    /// <summary>
    /// Scheduled date/time in UTC (ISO 8601). For the local calendar date use <c>local_time</c> instead: a day-precision event is stored at local midnight, so its UTC instant falls on the previous day for ahead-of-UTC (Nordic) zones.
    /// </summary>
    [JsonPropertyName("scheduled_at")]
    public required DateTimeOffset ScheduledAt { get; init; }

    /// <summary>
    /// The issuer's IANA timezone, used to interpret <c>scheduled_at</c>. Resolved from the source article, falling back to the company's country zone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timezone")]
    public string? Timezone { get; init; }

    /// <summary>
    /// <c>scheduled_at</c> rendered in the issuer's <c>timezone</c> (ISO 8601 with offset). Use this for the correct local date/time. Its date is right even for day-precision events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("local_time")]
    public DateTimeOffset? LocalTime { get; init; }

    /// <summary>
    /// When <c>scheduled_at</c> last changed. Useful for change-feed consumers tracking date moves.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduled_at_changed_at")]
    public DateTimeOffset? ScheduledAtChangedAt { get; init; }

    /// <summary>
    /// ID of the article the event was extracted from. <c>null</c> when the article is not retrievable (not live, or removed), or when the event was first found on a company website. If a company website later supplied the date, this still names the original article, and <c>source</c> names the website. Best-effort: on the free plan it may reference an article your plan can't fetch (premium source or outside the age window).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_article_id")]
    public string? SourceArticleId { get; init; }

    /// <summary>
    /// Who published the current date. <c>article</c> is a news article or company announcement. <c>company_website</c> is the issuer's own investor relations calendar. <c>null</c> when our editors set the date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public SourceNordicFinancialNewsCalendarEventsApi? Source { get; init; }

    /// <summary>
    /// ID of the company this event relates to
    /// </summary>
    [JsonPropertyName("company_id")]
    public required string CompanyId { get; init; }

    /// <summary>
    /// The issuer this event belongs to, inlined so a calendar can be rendered without a lookup per row. <c>id</c> is the same value as <c>company_id</c>. <c>null</c> only when the issuer is not published by this API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company")]
    public CompanyNordicFinancialNewsCalendarEventsApi? Company { get; init; }

    /// <summary>
    /// Country ISO 3166-1 alpha-2 code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// Dividend lifecycle dates. <c>null</c> for non-dividend events. <c>scheduled_at</c> follows the priority ex-date &gt; record-date &gt; payment-date, whichever is explicitly stated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dividend")]
    public Dividend? Dividend { get; init; }

    /// <summary>
    /// When the event was last updated (ISO 8601). Use with <c>updated_after</c> for polling
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
