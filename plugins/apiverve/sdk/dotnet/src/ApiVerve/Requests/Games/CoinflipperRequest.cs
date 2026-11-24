namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Coinflipper operation.
/// </summary>
public sealed record CoinflipperRequest
{
    /// <summary>
    /// Number of coins to flip
    /// </summary>
    public int? Flips { get; init; }
}
