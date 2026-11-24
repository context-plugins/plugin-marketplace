namespace MicrosoftDynamicsNav.Requests.Environments;

/// <summary>
/// The inputs of the GetEnvironment operation.
/// </summary>
public sealed record GetEnvironmentRequest
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
