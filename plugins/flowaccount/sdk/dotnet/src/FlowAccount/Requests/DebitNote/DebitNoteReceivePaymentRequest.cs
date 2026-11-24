using FlowAccount.Models;

namespace FlowAccount.Requests.DebitNote;

/// <summary>
/// The inputs of the DebitNoteReceivePayment operation.
/// </summary>
public sealed record DebitNoteReceivePaymentRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required PaymentModel Body { get; init; }
}
