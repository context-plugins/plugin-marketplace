using Paid.Models.Enums;

namespace Paid.Requests.Invoices;

/// <summary>
/// The inputs of the ListInvoices operation.
/// </summary>
public sealed record ListInvoicesRequest
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
    /// Filter by the order this invoice was generated from.
    /// </summary>
    public string? OrderId { get; init; }

    /// <summary>
    /// Filter by invoice status.
    /// </summary>
    public InvoicesGetParametersStatus? Status { get; init; }

    /// <summary>
    /// Filter by payment status.
    /// </summary>
    public InvoicesGetParametersPaymentStatus? PaymentStatus { get; init; }

    /// <summary>
    /// Only invoices whose issue date is on or after this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
    /// </summary>
    public string? IssueDateFrom { get; init; }

    /// <summary>
    /// Only invoices whose issue date is on or before this date. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
    /// </summary>
    public string? IssueDateTo { get; init; }

    /// <summary>
    /// Only invoices whose due date is on or after this date. Invoices without a due date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
    /// </summary>
    public string? DueDateFrom { get; init; }

    /// <summary>
    /// Only invoices whose due date is on or before this date. Invoices without a due date are not matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
    /// </summary>
    public string? DueDateTo { get; init; }

    /// <summary>
    /// Filter by the invoice number shown on the invoice, whether draft or posted (exact match).
    /// </summary>
    public string? DisplayNumber { get; init; }

    /// <summary>
    /// Filter by purchase order reference (exact match, whitespace-sensitive).
    /// </summary>
    public string? PurchaseOrderReference { get; init; }

    /// <summary>
    /// Filter by invoice currency code (case-insensitive, e.g. USD).
    /// </summary>
    public string? Currency { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
