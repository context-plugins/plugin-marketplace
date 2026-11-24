namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the GetPlanById operation.
/// </summary>
public sealed record GetPlanByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
