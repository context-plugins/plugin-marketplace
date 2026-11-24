using Paid.Models;

namespace Paid.Requests.Invoices;

/// <summary>
/// The inputs of the UpdateInvoiceById operation.
/// </summary>
public sealed record UpdateInvoiceByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdateInvoiceRequest? Body { get; init; }
}
