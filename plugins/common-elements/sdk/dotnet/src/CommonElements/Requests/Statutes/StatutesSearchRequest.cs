namespace CommonElements.Requests.Statutes;

/// <summary>
/// The inputs of the StatutesSearch operation.
/// </summary>
public sealed record StatutesSearchRequest
{
    /// <summary>
    /// Search text, minimum 2 characters.
    /// </summary>
    public required string Q { get; init; }

    /// <summary>
    /// Two-letter state code to scope results to one jurisdiction. Omit to search every jurisdiction.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// Max results, 1 to 25 (default 10).
    /// </summary>
    public double? Limit { get; init; }

    /// <summary>
    /// Pagination offset (default 0).
    /// </summary>
    public double? Offset { get; init; }
}
