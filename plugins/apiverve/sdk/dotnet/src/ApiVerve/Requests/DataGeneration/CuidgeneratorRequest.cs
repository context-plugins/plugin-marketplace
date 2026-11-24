namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Cuidgenerator operation.
/// </summary>
public sealed record CuidgeneratorRequest
{
    /// <summary>
    /// Number of Cuids to generate
    /// </summary>
    public int? Count { get; init; }
}
