namespace Dynamics365BusinessCentral.Requests.EnvironmentOperations;

/// <summary>
/// The inputs of the ListAllEnvironmentOperations operation.
/// </summary>
public sealed record ListAllEnvironmentOperationsRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";
}
