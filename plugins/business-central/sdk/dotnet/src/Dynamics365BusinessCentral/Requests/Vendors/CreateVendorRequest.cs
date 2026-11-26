using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.Vendors;

/// <summary>
/// The inputs of the CreateVendor operation.
/// </summary>
public sealed record CreateVendorRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required VendorCreate Body { get; init; }
}
