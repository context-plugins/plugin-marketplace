using Curlec.Models;

namespace Curlec.Requests.Plans;

/// <summary>
/// The inputs of the CreatePlan operation.
/// </summary>
public sealed record CreatePlanRequest
{
    public required PlansRequest Body { get; init; }
}
