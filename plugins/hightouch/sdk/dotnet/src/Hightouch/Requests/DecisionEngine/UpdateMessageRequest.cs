using Hightouch.Models;

namespace Hightouch.Requests.DecisionEngine;

/// <summary>
/// The inputs of the UpdateMessage operation.
/// </summary>
public sealed record UpdateMessageRequest
{
    /// <summary>
    /// The UUID of the flow
    /// </summary>
    public required string FlowId { get; init; }

    /// <summary>
    /// The UUID of the message
    /// </summary>
    public required string MessageId { get; init; }

    public required DecisionEngineMessageUpdate Body { get; init; }
}
