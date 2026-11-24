using FlowAccount.Models;

namespace FlowAccount.Requests.Quotation;

/// <summary>
/// The inputs of the QuotationReceivePayment operation.
/// </summary>
public sealed record QuotationReceivePaymentRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required PaymentModel Body { get; init; }
}
