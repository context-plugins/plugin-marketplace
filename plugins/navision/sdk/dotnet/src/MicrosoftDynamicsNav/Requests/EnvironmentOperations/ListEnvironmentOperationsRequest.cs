namespace MicrosoftDynamicsNav.Requests.EnvironmentOperations;

/// <summary>
/// The inputs of the ListEnvironmentOperations operation.
/// </summary>
public sealed record ListEnvironmentOperationsRequest
{
    /// <summary>
    /// The name of the environment
    /// </summary>
    public required string EnvironmentName { get; init; }
}
