using Paid.Models;

namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the UpdatePlanByExternalId operation.
/// </summary>
public sealed record UpdatePlanByExternalIdRequest
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdatePlanRequest? Body { get; init; }
}
