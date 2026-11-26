namespace Dynamics365BusinessCentral.Requests.Environments;

/// <summary>
/// The inputs of the DeleteEnvironment operation.
/// </summary>
public sealed record DeleteEnvironmentRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";

    /// <summary>
    /// The name of the environment
    /// </summary>
    public required string EnvironmentName { get; init; }
}
