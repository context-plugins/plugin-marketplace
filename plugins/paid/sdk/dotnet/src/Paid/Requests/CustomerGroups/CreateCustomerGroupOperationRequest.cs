using Paid.Models;

namespace Paid.Requests.CustomerGroups;

/// <summary>
/// The inputs of the CreateCustomerGroup operation.
/// </summary>
public sealed record CreateCustomerGroupOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CreateCustomerGroupRequest? Body { get; init; }
}
