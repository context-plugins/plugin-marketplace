using Hightouch.Models;

namespace Hightouch.Requests.DecisionEngine;

/// <summary>
/// The inputs of the CloneMessage operation.
/// </summary>
public sealed record CloneMessageRequest
{
    /// <summary>
    /// The UUID of the flow
    /// </summary>
    public required string FlowId { get; init; }

    /// <summary>
    /// The UUID of the message to clone
    /// </summary>
    public required string MessageId { get; init; }

    public DecisionEngineMessageClone? Body { get; init; }
}
