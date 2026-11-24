namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Lotterypicker operation.
/// </summary>
public sealed record LotterypickerRequest
{
    /// <summary>
    /// Lottery game preset
    /// </summary>
    public string? Game { get; init; }

    /// <summary>
    /// Number of main numbers to pick (for custom game)
    /// </summary>
    public int? Numbers { get; init; }

    /// <summary>
    /// Maximum number for main numbers (for custom game)
    /// </summary>
    public int? Max { get; init; }

    /// <summary>
    /// Number of bonus numbers (for custom game)
    /// </summary>
    public int? Bonus { get; init; }

    /// <summary>
    /// Number of tickets to generate
    /// </summary>
    public int? Tickets { get; init; }

    /// <summary>
    /// Highest value a bonus ball can take. Only applies when game is custom; named games use their own rules
    /// </summary>
    public int? Bonusmax { get; init; }
}
