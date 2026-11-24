using Paid.Models;

namespace Paid.Requests.CustomViewsExperimental;

/// <summary>
/// The inputs of the CreateCustomView operation.
/// </summary>
public sealed record CreateCustomViewOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CreateCustomViewRequest? Body { get; init; }
}
