namespace CircleCi.Requests.RunnerApi;

/// <summary>
/// The inputs of the ListRunners operation.
/// </summary>
public sealed record ListRunnersRequest
{
    /// <summary>
    /// The namespace to filter runners by. Cannot be used together with resource-class.
    /// </summary>
    public string? Namespace { get; init; }

    /// <summary>
    /// The resource class to filter runners by. Cannot be used together with namespace.
    /// </summary>
    public string? ResourceClass { get; init; }
}
