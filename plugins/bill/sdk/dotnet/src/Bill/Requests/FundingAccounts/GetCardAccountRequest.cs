using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.FundingAccounts;

/// <summary>
/// The inputs of the GetCardAccount operation.
/// </summary>
public sealed record GetCardAccountRequest
{
    [MinLength(1)]
    public required string CardAccountId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
