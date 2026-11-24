using Hightouch.Models;

namespace Hightouch.Requests.DecisionEngine;

/// <summary>
/// The inputs of the CreateMessage operation.
/// </summary>
public sealed record CreateMessageRequest
{
    /// <summary>
    /// The UUID of the flow
    /// </summary>
    public required string FlowId { get; init; }

    public required DecisionEngineMessageCreate Body { get; init; }
}
