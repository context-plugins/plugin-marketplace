using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.VendorCredits;

/// <summary>
/// The inputs of the UpdateVendorCredit operation.
/// </summary>
public sealed record UpdateVendorCreditRequest
{
    [MinLength(1)]
    public required string VendorCreditId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required UpdateVendorCreditRequestDto Body { get; init; }
}
