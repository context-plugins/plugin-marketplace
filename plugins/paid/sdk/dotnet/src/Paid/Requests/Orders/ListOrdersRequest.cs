using Paid.Models.Enums;

namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the ListOrders operation.
/// </summary>
public sealed record ListOrdersRequest
{
    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    /// <summary>
    /// Filter by customer ID.
    /// </summary>
    public string? CustomerId { get; init; }

    /// <summary>
    /// Filter by customer external ID.
    /// </summary>
    public string? ExternalCustomerId { get; init; }

    /// <summary>
    /// Filter by the order's external ID (exact match).
    /// </summary>
    public string? ExternalId { get; init; }

    /// <summary>
    /// Filter by creation state: draft or active.
    /// </summary>
    public OrdersGetParametersCreationState? CreationState { get; init; }

    /// <summary>
    /// Filter by derived order status. draft: not yet activated. paused: billing is paused. ended: end date is in the past. active: activated, not paused, and not ended.
    /// </summary>
    public OrdersGetParametersStatus? Status { get; init; }

    /// <summary>
    /// Only orders whose start date is on or after this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
    /// </summary>
    public string? StartDateFrom { get; init; }

    /// <summary>
    /// Only orders whose start date is on or before this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
    /// </summary>
    public string? StartDateTo { get; init; }

    /// <summary>
    /// Only orders whose end date is on or after this date. Orders without an end date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
    /// </summary>
    public string? EndDateFrom { get; init; }

    /// <summary>
    /// Only orders whose end date is on or before this date. Orders without an end date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
    /// </summary>
    public string? EndDateTo { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
