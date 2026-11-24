namespace Hightouch.Requests.DecisionEngine;

/// <summary>
/// The inputs of the RunFlow operation.
/// </summary>
public sealed record RunFlowRequest
{
    /// <summary>
    /// The UUID of the flow
    /// </summary>
    public required string FlowId { get; init; }
}
