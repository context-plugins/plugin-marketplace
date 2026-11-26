using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Vendors;

/// <summary>
/// The inputs of the DeleteVendorBankAccount operation.
/// </summary>
public sealed record DeleteVendorBankAccountRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
