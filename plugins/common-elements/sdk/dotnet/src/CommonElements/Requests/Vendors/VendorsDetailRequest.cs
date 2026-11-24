using System;

namespace CommonElements.Requests.Vendors;

/// <summary>
/// The inputs of the VendorsDetail operation.
/// </summary>
public sealed record VendorsDetailRequest
{
    /// <summary>
    /// Vendor organization id.
    /// </summary>
    public required Guid Id { get; init; }
}
