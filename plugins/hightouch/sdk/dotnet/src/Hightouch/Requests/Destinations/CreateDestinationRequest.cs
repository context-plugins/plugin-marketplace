using Hightouch.Models;

namespace Hightouch.Requests.Destinations;

/// <summary>
/// The inputs of the CreateDestination operation.
/// </summary>
public sealed record CreateDestinationRequest
{
    public required DestinationCreate Body { get; init; }
}
