using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Vendors;

/// <summary>
/// The inputs of the GetVendor operation.
/// </summary>
public sealed record GetVendorRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
