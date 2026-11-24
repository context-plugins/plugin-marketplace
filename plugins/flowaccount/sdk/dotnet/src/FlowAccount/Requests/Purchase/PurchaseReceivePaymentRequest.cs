using FlowAccount.Models;

namespace FlowAccount.Requests.Purchase;

/// <summary>
/// The inputs of the PurchaseReceivePayment operation.
/// </summary>
public sealed record PurchaseReceivePaymentRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required PaymentModel Body { get; init; }
}
