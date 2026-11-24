namespace Curlec.Requests.Invoices;

/// <summary>
/// The inputs of the IssueInvoice operation.
/// </summary>
public sealed record IssueInvoiceRequest
{
    /// <summary>
    /// Invoice ID (inv_*).
    /// </summary>
    public required string Id { get; init; }
}
