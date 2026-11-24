using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.VendorCredits;

/// <summary>
/// The inputs of the ArchiveVendorCredit operation.
/// </summary>
public sealed record ArchiveVendorCreditRequest
{
    [MinLength(1)]
    public required string VendorCreditId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
