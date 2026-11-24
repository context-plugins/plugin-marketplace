namespace DoiT.Requests.Invoices;

/// <summary>
/// The inputs of the GetInvoice operation.
/// </summary>
public sealed record GetInvoiceRequest
{
    /// <summary>
    /// Invoice number.
    /// </summary>
    public required string Id { get; init; }
}
