using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.Vendors;

/// <summary>
/// The inputs of the UpdateVendor operation.
/// </summary>
public sealed record UpdateVendorRequest
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
    /// ETag value for optimistic concurrency control
    /// </summary>
    public required string IfMatch { get; init; }

    public required VendorUpdate Body { get; init; }
}
