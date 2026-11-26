using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Vendors;

/// <summary>
/// The inputs of the GetConfigurationByVendorId operation.
/// </summary>
public sealed record GetConfigurationByVendorIdRequest
{
    [MinLength(1)]
    public required string VendorId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
