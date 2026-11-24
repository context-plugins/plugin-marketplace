using System.Collections.Generic;
using Fillo.Models.Enums;

namespace Fillo.Requests.Insights;

/// <summary>
/// The inputs of the GetFormInsights operation.
/// </summary>
public sealed record GetFormInsightsRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    /// <summary>
    /// Date window: 7d, 30d, 90d, or all (default).
    /// </summary>
    public RangeEnum? Range { get; init; }

    /// <summary>
    /// Free-text search across answers and source.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Match the submission source (host + path).
    /// </summary>
    public string? Source { get; init; }

    /// <summary>
    /// Exact identify() external id.
    /// </summary>
    public string? Respondent { get; init; }

    /// <summary>
    /// Field filter as <c>fieldId:op:value</c>, repeatable, max 20. op is one of eq, neq, contains, gt, lt, answered, not_answered.
    /// </summary>
    public IReadOnlyList<string>? Where { get; init; }

    /// <summary>
    /// Compare the cohort that answered this field against the baseline.
    /// </summary>
    public string? By { get; init; }

    /// <summary>
    /// How <c>by</c> matches. Default eq.
    /// </summary>
    public Op? Op { get; init; }

    /// <summary>
    /// The value <c>by</c> must equal when op is eq.
    /// </summary>
    public string? Eq { get; init; }
}
