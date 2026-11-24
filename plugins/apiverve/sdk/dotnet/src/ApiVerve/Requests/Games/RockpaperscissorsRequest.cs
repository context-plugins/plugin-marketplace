namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Rockpaperscissors operation.
/// </summary>
public sealed record RockpaperscissorsRequest
{
    /// <summary>
    /// Your choice - omit for random
    /// </summary>
    public string? Choice { get; init; }

    /// <summary>
    /// Number of rounds to play
    /// </summary>
    public int? Rounds { get; init; }
}
