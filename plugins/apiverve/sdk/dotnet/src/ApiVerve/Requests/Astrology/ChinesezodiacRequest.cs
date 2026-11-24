namespace ApiVerve.Requests.Astrology;

/// <summary>
/// The inputs of the Chinesezodiac operation.
/// </summary>
public sealed record ChinesezodiacRequest
{
    /// <summary>
    /// The date in YYYY-MM-DD format (years 1900-2100)
    /// </summary>
    public required string Date { get; init; }
}
