namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the GetPlanByExternalId operation.
/// </summary>
public sealed record GetPlanByExternalIdRequest
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
