namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Musicnotegenerator operation.
/// </summary>
public sealed record MusicnotegeneratorRequest
{
    /// <summary>
    /// Musical note (A-G with optional # or b)
    /// </summary>
    public required string Note { get; init; }

    /// <summary>
    /// Octave number
    /// </summary>
    public int? Octave { get; init; }

    /// <summary>
    /// Duration in seconds
    /// </summary>
    public double? Duration { get; init; }
}
