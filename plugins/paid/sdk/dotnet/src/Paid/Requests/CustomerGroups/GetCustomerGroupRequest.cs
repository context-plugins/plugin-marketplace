using System;

namespace Paid.Requests.CustomerGroups;

/// <summary>
/// The inputs of the GetCustomerGroup operation.
/// </summary>
public sealed record GetCustomerGroupRequest
{
    public required Guid Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
