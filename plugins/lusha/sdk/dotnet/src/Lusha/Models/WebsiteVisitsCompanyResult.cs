using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record WebsiteVisitsCompanyResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientReferenceId")]
    public string? ClientReferenceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employeeCount")]
    public EmployeeCount? EmployeeCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry")]
    public string? Industry { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public LocationLushaApiDocumentationWebsiteVisitsApi? Location { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("socialLinks")]
    public SocialLinks? SocialLinks { get; init; }

    /// <summary>
    /// Available data points that can be revealed via Enrich Companies. Includes base firmographic fields plus new revealable fields: employeesByDepartment, employeesByLocation, employeesBySeniority, competitors, businessModel, phones, emails, keywords, socialLinks, estimatedAnnualItSpend, monthlyWebsiteTraffic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has")]
    public IReadOnlyList<string>? Has { get; init; }

    /// <summary>
    /// Data fields that can be revealed via Enrich Companies, with the credit cost per field. A cost of 0 means the field has already been revealed for this account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("canReveal")]
    public IReadOnlyList<V3CanRevealItem>? CanReveal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalTypes")]
    public IReadOnlyList<string>? SignalTypes { get; init; }

    /// <summary>
    /// Per-item error in a batch response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public V3ItemError? Error { get; init; }

    /// <summary>
    /// Display score (0–100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public double? Score { get; init; }

    /// <summary>
    /// Qualitative score band.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scoreBand")]
    public ScoreBand? ScoreBand { get; init; }

    /// <summary>
    /// Total sessions in the window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalSessions")]
    public double? TotalSessions { get; init; }

    /// <summary>
    /// Distinct visitors in the window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uniqueVisitors")]
    public double? UniqueVisitors { get; init; }

    /// <summary>
    /// Average session length in minutes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avgSessionMinutes")]
    public double? AvgSessionMinutes { get; init; }

    /// <summary>
    /// Distinct days with activity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysVisited")]
    public double? DaysVisited { get; init; }

    /// <summary>
    /// High-intent pageviews in the window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("highIntentPageviews")]
    public double? HighIntentPageviews { get; init; }

    /// <summary>
    /// Days since the most recent visit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysSinceLastVisit")]
    public double? DaysSinceLastVisit { get; init; }

    /// <summary>
    /// Date of the last visit in the window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastVisit")]
    public DateTimeOffset? LastVisit { get; init; }

    /// <summary>
    /// Primary visitor country (ISO 3166-1 alpha-2). Omitted if unavailable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visitorCountry")]
    public string? VisitorCountry { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
