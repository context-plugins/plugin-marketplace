namespace Hightouch.Requests.DecisionEngine;

/// <summary>
/// The inputs of the GetFlow operation.
/// </summary>
public sealed record GetFlowRequest
{
    /// <summary>
    /// The UUID of the flow
    /// </summary>
    public required string FlowId { get; init; }
}
