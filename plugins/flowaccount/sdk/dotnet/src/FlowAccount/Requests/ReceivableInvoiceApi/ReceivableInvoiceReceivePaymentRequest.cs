using FlowAccount.Models;

namespace FlowAccount.Requests.ReceivableInvoiceApi;

/// <summary>
/// The inputs of the ReceivableInvoiceReceivePayment operation.
/// </summary>
public sealed record ReceivableInvoiceReceivePaymentRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required PaymentModel Body { get; init; }
}
