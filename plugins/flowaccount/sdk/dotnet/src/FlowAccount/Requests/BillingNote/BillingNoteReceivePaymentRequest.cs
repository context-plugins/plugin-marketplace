using FlowAccount.Models;

namespace FlowAccount.Requests.BillingNote;

/// <summary>
/// The inputs of the BillingNoteReceivePayment operation.
/// </summary>
public sealed record BillingNoteReceivePaymentRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required PaymentModel Body { get; init; }
}
