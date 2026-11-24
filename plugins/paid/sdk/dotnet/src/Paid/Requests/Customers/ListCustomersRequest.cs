using Paid.Models.Enums;

namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the ListCustomers operation.
/// </summary>
public sealed record ListCustomersRequest
{
    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    /// <summary>
    /// Search by customer name (case-insensitive, matches anywhere in the name).
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Filter by customer status. churned: customers marked as churned. active: everyone else.
    /// </summary>
    public CustomersGetParametersStatus? Status { get; init; }

    /// <summary>
    /// Filter by creation state: draft or active.
    /// </summary>
    public CustomersGetParametersCreationState? CreationState { get; init; }

    /// <summary>
    /// Only customers created on or after this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
    /// </summary>
    public string? CreatedAtFrom { get; init; }

    /// <summary>
    /// Only customers created on or before this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
    /// </summary>
    public string? CreatedAtTo { get; init; }

    /// <summary>
    /// Filter by your external customer ID (exact match).
    /// </summary>
    public string? ExternalId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
