using ApiVerve.Models;

namespace ApiVerve.Requests.Documents;

/// <summary>
/// The inputs of the Invoicegenerator operation.
/// </summary>
public sealed record InvoicegeneratorRequest
{
    public required V1InvoicegeneratorRequest Body { get; init; }
}
