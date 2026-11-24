namespace Hightouch.Requests.DecisionEngine;

/// <summary>
/// The inputs of the GetMessage operation.
/// </summary>
public sealed record GetMessageRequest
{
    /// <summary>
    /// The UUID of the flow
    /// </summary>
    public required string FlowId { get; init; }

    /// <summary>
    /// The UUID of the message
    /// </summary>
    public required string MessageId { get; init; }
}
