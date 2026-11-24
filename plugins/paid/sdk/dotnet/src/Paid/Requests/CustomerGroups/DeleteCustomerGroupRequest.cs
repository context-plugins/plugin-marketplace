using System;

namespace Paid.Requests.CustomerGroups;

/// <summary>
/// The inputs of the DeleteCustomerGroup operation.
/// </summary>
public sealed record DeleteCustomerGroupRequest
{
    public required Guid Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public object? Body { get; init; }
}
