namespace ApiVerve.Requests.Astrology;

/// <summary>
/// The inputs of the Moonphases operation.
/// </summary>
public sealed record MoonphasesRequest
{
    /// <summary>
    /// Get the moon phase for today
    /// </summary>
    public bool? Today { get; init; }
}
