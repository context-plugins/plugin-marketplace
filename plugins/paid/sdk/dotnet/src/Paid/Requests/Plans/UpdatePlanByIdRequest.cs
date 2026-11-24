using Paid.Models;

namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the UpdatePlanById operation.
/// </summary>
public sealed record UpdatePlanByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdatePlanRequest? Body { get; init; }
}
