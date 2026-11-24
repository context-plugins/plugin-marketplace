namespace PlinthUsGrantsData.Requests.Pulse;

/// <summary>
/// The inputs of the GetPulse operation.
/// </summary>
public sealed record GetPulseRequest
{
    public required string SubId { get; init; }
}
