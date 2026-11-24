namespace Hightouch.Requests.Destinations;

/// <summary>
/// The inputs of the GetDestination operation.
/// </summary>
public sealed record GetDestinationRequest
{
    /// <summary>
    /// The destination's ID
    /// </summary>
    public required double DestinationId { get; init; }
}
