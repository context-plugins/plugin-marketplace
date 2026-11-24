namespace CommonElements.Requests.Statutes;

/// <summary>
/// The inputs of the StatutesByState operation.
/// </summary>
public sealed record StatutesByStateRequest
{
    /// <summary>
    /// Two-letter state code.
    /// </summary>
    public required string State { get; init; }

    /// <summary>
    /// Limit to one chapter number.
    /// </summary>
    public string? Chapter { get; init; }

    /// <summary>
    /// Limit to sections tagged with this topic.
    /// </summary>
    public string? Topic { get; init; }

    /// <summary>
    /// Max results, 1 to 200 (default 100).
    /// </summary>
    public double? Limit { get; init; }

    /// <summary>
    /// Pagination offset (default 0).
    /// </summary>
    public double? Offset { get; init; }
}
