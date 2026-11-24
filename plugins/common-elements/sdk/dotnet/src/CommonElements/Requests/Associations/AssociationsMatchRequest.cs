namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsMatch operation.
/// </summary>
public sealed record AssociationsMatchRequest
{
    /// <summary>
    /// The name to match, minimum 3 characters. A street address (with ZIP) is resolved as an address, not as a name.
    /// </summary>
    public required string Q { get; init; }

    /// <summary>
    /// Two-letter state code. Required; matching is scoped per state.
    /// </summary>
    public required string State { get; init; }

    /// <summary>
    /// Optional county filter, case-insensitive.
    /// </summary>
    public string? County { get; init; }

    /// <summary>
    /// Trigram similarity floor, 0.1 to 0.99 (default 0.25). Raise it for stricter matches.
    /// </summary>
    public double? MinSimilarity { get; init; }

    /// <summary>
    /// Max candidates to return, 1 to 10 (default 5).
    /// </summary>
    public double? Limit { get; init; }
}
