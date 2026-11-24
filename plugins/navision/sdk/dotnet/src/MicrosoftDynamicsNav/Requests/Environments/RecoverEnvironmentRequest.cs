namespace MicrosoftDynamicsNav.Requests.Environments;

/// <summary>
/// The inputs of the RecoverEnvironment operation.
/// </summary>
public sealed record RecoverEnvironmentRequest
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
