using Paid.Models;

namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the UpdatePlanUpgradePath operation.
/// </summary>
public sealed record UpdatePlanUpgradePathOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdatePlanUpgradePathRequest? Body { get; init; }
}
