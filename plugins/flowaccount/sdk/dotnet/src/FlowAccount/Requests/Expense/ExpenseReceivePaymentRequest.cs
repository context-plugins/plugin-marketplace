using FlowAccount.Models;

namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseReceivePayment operation.
/// </summary>
public sealed record ExpenseReceivePaymentRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required PaymentModel Body { get; init; }
}
