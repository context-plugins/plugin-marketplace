namespace PlinthUsGrantsData.Requests.Pulse;

/// <summary>
/// The inputs of the DeletePulse operation.
/// </summary>
public sealed record DeletePulseRequest
{
    public required string SubId { get; init; }
}
