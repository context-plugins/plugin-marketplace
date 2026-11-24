using Divvy.Models;

namespace Divvy.Requests.Vendors;

/// <summary>
/// The inputs of the CreateVendor operation.
/// </summary>
public sealed record CreateVendorRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required VendorRequestDto Body { get; init; }
}
