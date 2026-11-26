using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.VendorCredits;

/// <summary>
/// The inputs of the GetVendorCredit operation.
/// </summary>
public sealed record GetVendorCreditRequest
{
    [MinLength(1)]
    public required string VendorCreditId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
