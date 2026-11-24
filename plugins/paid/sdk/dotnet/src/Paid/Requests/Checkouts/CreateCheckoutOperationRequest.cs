using Paid.Models;

namespace Paid.Requests.Checkouts;

/// <summary>
/// The inputs of the CreateCheckout operation.
/// </summary>
public sealed record CreateCheckoutOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CreateCheckoutRequest? Body { get; init; }
}
