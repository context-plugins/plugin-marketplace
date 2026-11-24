using Paid.Models.Enums;

namespace Paid.Requests.CustomViewsExperimental;

/// <summary>
/// The inputs of the GetCustomViewData operation.
/// </summary>
public sealed record GetCustomViewDataRequest
{
    public required string DisplayId { get; init; }

    /// <summary>
    /// Customer to scope the data to (dev/preview only; the embed derives this from the verified token). Required for customer-scoped views; ignored for organization-scoped views (their data is org-wide).
    /// </summary>
    public string? CustomerId { get; init; }

    /// <summary>
    /// Override the view's default date range for this request only. 'relative' = rolling window (set periodUnit + periodAmount); 'absolute' = fixed range (set periodStart + periodEnd).
    /// </summary>
    public ExperimentalViewsDisplayIdDataGetParametersPeriodKind? PeriodKind { get; init; }

    /// <summary>
    /// relative override only: unit of the rolling window.
    /// </summary>
    public ExperimentalViewsDisplayIdDataGetParametersPeriodUnit? PeriodUnit { get; init; }

    /// <summary>
    /// relative override only: how many units back from today.
    /// </summary>
    public int? PeriodAmount { get; init; }

    /// <summary>
    /// absolute override only: inclusive start date (YYYY-MM-DD).
    /// </summary>
    public string? PeriodStart { get; init; }

    /// <summary>
    /// absolute override only: inclusive end date (YYYY-MM-DD).
    /// </summary>
    public string? PeriodEnd { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
