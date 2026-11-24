namespace HealthGorilla.Requests.CoverageApi;

/// <summary>
/// The inputs of the ReadCoverage operation.
/// </summary>
public sealed record ReadCoverageRequest
{
    /// <summary>
    /// The logical id of the resource.
    /// </summary>
    public required string Id { get; init; }
}
