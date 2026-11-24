namespace ApiVerve.Requests.Science;

/// <summary>
/// The inputs of the Julianday operation.
/// </summary>
public sealed record JuliandayRequest
{
    /// <summary>
    /// The Gregorian date in YYYY-MM-DD format
    /// </summary>
    public required string Date { get; init; }
}
