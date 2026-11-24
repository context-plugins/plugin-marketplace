using System;

namespace MicrosoftDynamicsNav.Requests.Vendors;

/// <summary>
/// The inputs of the GetVendor operation.
/// </summary>
public sealed record GetVendorRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The unique identifier of the vendor
    /// </summary>
    public required Guid VendorId { get; init; }

    /// <summary>
    /// Comma-separated list of properties to include in the response
    /// </summary>
    public string? Select { get; init; }
}
