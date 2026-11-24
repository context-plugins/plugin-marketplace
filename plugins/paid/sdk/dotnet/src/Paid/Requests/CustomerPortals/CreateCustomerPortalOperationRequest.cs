using Paid.Models;

namespace Paid.Requests.CustomerPortals;

/// <summary>
/// The inputs of the CreateCustomerPortal operation.
/// </summary>
public sealed record CreateCustomerPortalOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CreateCustomerPortalRequest? Body { get; init; }
}
