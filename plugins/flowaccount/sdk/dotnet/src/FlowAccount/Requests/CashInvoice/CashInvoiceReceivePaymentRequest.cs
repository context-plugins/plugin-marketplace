using FlowAccount.Models;

namespace FlowAccount.Requests.CashInvoice;

/// <summary>
/// The inputs of the CashInvoiceReceivePayment operation.
/// </summary>
public sealed record CashInvoiceReceivePaymentRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required PaymentModel Body { get; init; }
}
