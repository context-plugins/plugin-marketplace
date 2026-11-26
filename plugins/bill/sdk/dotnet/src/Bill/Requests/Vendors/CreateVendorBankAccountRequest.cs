using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Vendors;

/// <summary>
/// The inputs of the CreateVendorBankAccount operation.
/// </summary>
public sealed record CreateVendorBankAccountRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required VendorBankAccountRequestDto Body { get; init; }
}
