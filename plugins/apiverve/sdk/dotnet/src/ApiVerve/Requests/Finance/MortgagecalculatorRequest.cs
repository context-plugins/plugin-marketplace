using ApiVerve.Models;

namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Mortgagecalculator operation.
/// </summary>
public sealed record MortgagecalculatorRequest
{
    public required V1MortgagecalculatorRequest Body { get; init; }
}
