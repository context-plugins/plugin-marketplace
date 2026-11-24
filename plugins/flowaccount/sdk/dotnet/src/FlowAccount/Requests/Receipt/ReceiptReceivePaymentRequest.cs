using FlowAccount.Models;

namespace FlowAccount.Requests.Receipt;

/// <summary>
/// The inputs of the ReceiptReceivePayment operation.
/// </summary>
public sealed record ReceiptReceivePaymentRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required PaymentModel Body { get; init; }
}
