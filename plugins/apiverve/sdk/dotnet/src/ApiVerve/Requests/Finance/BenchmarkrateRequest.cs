namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Benchmarkrate operation.
/// </summary>
public sealed record BenchmarkrateRequest
{
    /// <summary>
    /// The benchmark rate to retrieve
    /// </summary>
    public required string Rate { get; init; }
}
