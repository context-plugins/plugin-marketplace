namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the ExitPositions operation.
/// </summary>
public sealed record ExitPositionsRequest
{
    /// <summary>
    /// The tag associated with the positions for which the positions must be exit
    /// </summary>
    public string? Tag { get; init; }

    /// <summary>
    /// The segment for which the positions must be exit
    /// </summary>
    public string? Segment { get; init; }
}
