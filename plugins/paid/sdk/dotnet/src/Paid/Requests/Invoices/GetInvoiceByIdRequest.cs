namespace Paid.Requests.Invoices;

/// <summary>
/// The inputs of the GetInvoiceById operation.
/// </summary>
public sealed record GetInvoiceByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
