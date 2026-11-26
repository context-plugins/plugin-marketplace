using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.Environments;

/// <summary>
/// The inputs of the CopyEnvironment operation.
/// </summary>
public sealed record CopyEnvironmentOperationRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";

    /// <summary>
    /// The name of the environment
    /// </summary>
    public required string EnvironmentName { get; init; }

    public required CopyEnvironmentRequest Body { get; init; }
}
