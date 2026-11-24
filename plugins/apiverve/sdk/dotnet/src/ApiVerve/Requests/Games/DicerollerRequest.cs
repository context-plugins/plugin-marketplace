namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Diceroller operation.
/// </summary>
public sealed record DicerollerRequest
{
    /// <summary>
    /// Dice notation in XdY format (e.g., 3d6, 2d20, default: 1d6)
    /// </summary>
    public string? Dice { get; init; }

    /// <summary>
    /// Modifier to add to the total (can be negative)
    /// </summary>
    public int? Modifier { get; init; }
}
