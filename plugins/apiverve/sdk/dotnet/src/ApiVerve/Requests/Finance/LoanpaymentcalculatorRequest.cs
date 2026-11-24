using ApiVerve.Models;

namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Loanpaymentcalculator operation.
/// </summary>
public sealed record LoanpaymentcalculatorRequest
{
    public required V1LoanpaymentcalculatorRequest Body { get; init; }
}
