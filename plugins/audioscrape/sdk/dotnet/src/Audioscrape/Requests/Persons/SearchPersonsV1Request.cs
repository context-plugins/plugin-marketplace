namespace Audioscrape.Requests.Persons;

/// <summary>
/// The inputs of the SearchPersonsV1 operation.
/// </summary>
public sealed record SearchPersonsV1Request
{
    /// <summary>
    /// Name substring (case-insensitive)
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Max results (default 20, max 100)
    /// </summary>
    public long? Limit { get; init; }
}
