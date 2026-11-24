using PlinthUsGrantsData.Models;

namespace PlinthUsGrantsData.Requests.Pulse;

/// <summary>
/// The inputs of the CreatePulse operation.
/// </summary>
public sealed record CreatePulseRequest
{
    public required PulseCreate Body { get; init; }
}
