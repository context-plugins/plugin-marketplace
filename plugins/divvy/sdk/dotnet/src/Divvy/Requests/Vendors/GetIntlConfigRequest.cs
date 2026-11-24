using Divvy.Models.Enums;

namespace Divvy.Requests.Vendors;

/// <summary>
/// The inputs of the GetIntlConfig operation.
/// </summary>
public sealed record GetIntlConfigRequest
{
    public required CountryCode Country { get; init; }

    public required CurrencyCode BillCurrency { get; init; }

    public required AccountTypeRequest AccountType { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
