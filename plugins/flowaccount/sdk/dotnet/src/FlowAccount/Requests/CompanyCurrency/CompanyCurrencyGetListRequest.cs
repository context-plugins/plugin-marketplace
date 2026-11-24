namespace FlowAccount.Requests.CompanyCurrency;

/// <summary>
/// The inputs of the CompanyCurrencyGetList operation.
/// </summary>
public sealed record CompanyCurrencyGetListRequest
{
    public required string Culture { get; init; }
}
