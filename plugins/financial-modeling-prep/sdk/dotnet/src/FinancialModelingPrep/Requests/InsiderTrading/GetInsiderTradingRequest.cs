namespace FinancialModelingPrep.Requests.InsiderTrading;

/// <summary>
/// The inputs of the GetInsiderTrading operation.
/// </summary>
public sealed record GetInsiderTradingRequest
{
    public string? Symbol { get; init; }

    public int Limit { get; init; } = 40;
}
