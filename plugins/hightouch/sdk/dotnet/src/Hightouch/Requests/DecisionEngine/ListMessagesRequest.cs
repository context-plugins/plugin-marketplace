namespace Hightouch.Requests.DecisionEngine;

/// <summary>
/// The inputs of the ListMessages operation.
/// </summary>
public sealed record ListMessagesRequest
{
    /// <summary>
    /// The UUID of the flow
    /// </summary>
    public required string FlowId { get; init; }

    public double Limit { get; init; } = 100d;

    public double Offset { get; init; } = 0d;
}
