namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Uuidgenerator operation.
/// </summary>
public sealed record UuidgeneratorRequest
{
    /// <summary>
    /// Number of UUIDs to generate
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// UUID version (only version 4 currently supported)
    /// </summary>
    public int? Version { get; init; }

    /// <summary>
    /// Output format
    /// </summary>
    public string? Format { get; init; }
}
