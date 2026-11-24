namespace Curlec.Requests.Plans;

/// <summary>
/// The inputs of the FetchPlan operation.
/// </summary>
public sealed record FetchPlanRequest
{
    /// <summary>
    /// Plan ID (plan_*).
    /// </summary>
    public required string Id { get; init; }
}
