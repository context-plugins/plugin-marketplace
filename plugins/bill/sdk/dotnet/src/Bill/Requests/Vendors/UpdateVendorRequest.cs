using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Vendors;

/// <summary>
/// The inputs of the UpdateVendor operation.
/// </summary>
public sealed record UpdateVendorRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required VendorUpdateRequestDto Body { get; init; }
}
