using FlowAccount.Models;

namespace FlowAccount.Requests.CreditNote;

/// <summary>
/// The inputs of the CreditNoteReceivePayment operation.
/// </summary>
public sealed record CreditNoteReceivePaymentRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required PaymentModel Body { get; init; }
}
