using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Vendors;

/// <summary>
/// The inputs of the RestoreVendor operation.
/// </summary>
public sealed record RestoreVendorRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
