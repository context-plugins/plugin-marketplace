namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Slotmachine operation.
/// </summary>
public sealed record SlotmachineRequest
{
    /// <summary>
    /// Number of spins to simulate
    /// </summary>
    public int? Spins { get; init; }

    /// <summary>
    /// Number of reels
    /// </summary>
    public int? Reels { get; init; }

    /// <summary>
    /// Bet amount per spin
    /// </summary>
    public double? Bet { get; init; }
}
