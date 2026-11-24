namespace FlowAccount.Requests.CompanyCurrency;

/// <summary>
/// The inputs of the CompanyCurrencyGetCompanyCurrencies operation.
/// </summary>
public sealed record CompanyCurrencyGetCompanyCurrenciesRequest
{
    public required string Culture { get; init; }
}
