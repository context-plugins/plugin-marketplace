using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Vendors;

/// <summary>
/// The inputs of the GetVendorBankAccount operation.
/// </summary>
public sealed record GetVendorBankAccountRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
