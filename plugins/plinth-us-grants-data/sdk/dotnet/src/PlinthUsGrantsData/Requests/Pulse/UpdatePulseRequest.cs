using PlinthUsGrantsData.Models;

namespace PlinthUsGrantsData.Requests.Pulse;

/// <summary>
/// The inputs of the UpdatePulse operation.
/// </summary>
public sealed record UpdatePulseRequest
{
    public required string SubId { get; init; }

    public required PulsePatch Body { get; init; }
}
