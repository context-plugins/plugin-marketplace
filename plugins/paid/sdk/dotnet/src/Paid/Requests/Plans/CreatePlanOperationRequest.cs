using Paid.Models;

namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the CreatePlan operation.
/// </summary>
public sealed record CreatePlanOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CreatePlanRequest? Body { get; init; }
}
