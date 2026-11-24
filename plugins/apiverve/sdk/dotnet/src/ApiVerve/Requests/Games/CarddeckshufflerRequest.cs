namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Carddeckshuffler operation.
/// </summary>
public sealed record CarddeckshufflerRequest
{
    /// <summary>
    /// Number of decks to shuffle
    /// </summary>
    public int? Decks { get; init; }

    /// <summary>
    /// Include jokers in the deck
    /// </summary>
    public bool? Jokers { get; init; }

    /// <summary>
    /// Shuffling method
    /// </summary>
    public string? Method { get; init; }
}
