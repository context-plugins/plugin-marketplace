using Hightouch.Models;

namespace Hightouch.Requests.Destinations;

/// <summary>
/// The inputs of the UpdateDestination operation.
/// </summary>
public sealed record UpdateDestinationRequest
{
    /// <summary>
    /// The destination's ID
    /// </summary>
    public required double DestinationId { get; init; }

    public required DestinationUpdate Body { get; init; }
}
