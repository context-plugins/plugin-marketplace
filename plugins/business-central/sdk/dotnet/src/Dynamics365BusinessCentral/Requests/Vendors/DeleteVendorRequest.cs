using System;

namespace Dynamics365BusinessCentral.Requests.Vendors;

/// <summary>
/// The inputs of the DeleteVendor operation.
/// </summary>
public sealed record DeleteVendorRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The unique identifier of the vendor
    /// </summary>
    public required Guid VendorId { get; init; }
}
