using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.Environments;

/// <summary>
/// The inputs of the CreateEnvironment operation.
/// </summary>
public sealed record CreateEnvironmentOperationRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";

    /// <summary>
    /// The name of the environment
    /// </summary>
    public required string EnvironmentName { get; init; }

    public required CreateEnvironmentRequest Body { get; init; }
}
