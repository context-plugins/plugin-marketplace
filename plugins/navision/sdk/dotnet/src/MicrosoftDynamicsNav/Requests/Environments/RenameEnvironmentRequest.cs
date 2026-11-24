using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.Environments;

/// <summary>
/// The inputs of the RenameEnvironment operation.
/// </summary>
public sealed record RenameEnvironmentRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";

    /// <summary>
    /// The name of the environment
    /// </summary>
    public required string EnvironmentName { get; init; }

    public required ApplicationsEnvironmentsRenameRequest Body { get; init; }
}
