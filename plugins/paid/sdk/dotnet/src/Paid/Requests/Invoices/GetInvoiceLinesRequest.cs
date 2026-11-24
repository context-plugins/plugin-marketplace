namespace Paid.Requests.Invoices;

/// <summary>
/// The inputs of the GetInvoiceLines operation.
/// </summary>
public sealed record GetInvoiceLinesRequest
{
    public required string Id { get; init; }

    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
