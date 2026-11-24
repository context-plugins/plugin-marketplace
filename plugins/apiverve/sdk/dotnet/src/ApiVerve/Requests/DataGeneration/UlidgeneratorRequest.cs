namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Ulidgenerator operation.
/// </summary>
public sealed record UlidgeneratorRequest
{
    /// <summary>
    /// Number of ULIDs to generate
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Custom timestamp in milliseconds (optional, uses current time if not specified)
    /// </summary>
    public int? Timestamp { get; init; }
}
