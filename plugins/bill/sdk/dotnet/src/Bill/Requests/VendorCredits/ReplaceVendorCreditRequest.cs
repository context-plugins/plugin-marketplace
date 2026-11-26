using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.VendorCredits;

/// <summary>
/// The inputs of the ReplaceVendorCredit operation.
/// </summary>
public sealed record ReplaceVendorCreditRequest
{
    [MinLength(1)]
    public required string VendorCreditId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required ReplaceVendorCreditRequestDto Body { get; init; }
}
