using Paid.Models.Enums;

namespace Paid.Requests.Credits;

/// <summary>
/// The inputs of the ListCreditCurrencies operation.
/// </summary>
public sealed record ListCreditCurrenciesRequest
{
    /// <summary>
    /// Filter credit currencies by status. Defaults to <c>all</c> so archived currencies remain readable after they are archived.
    /// </summary>
    public CreditsCurrenciesGetParametersStatus Status { get; init; } = CreditsCurrenciesGetParametersStatus.All;

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
