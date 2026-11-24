using FlowAccount.Models;

namespace FlowAccount.Requests.TaxInvoice;

/// <summary>
/// The inputs of the TaxInvoiceReceivePayment operation.
/// </summary>
public sealed record TaxInvoiceReceivePaymentRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required PaymentModel Body { get; init; }
}
