using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.UpdateManagement;

/// <summary>
/// The inputs of the SetUpdateSettings operation.
/// </summary>
public sealed record SetUpdateSettingsRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";

    /// <summary>
    /// The name of the environment
    /// </summary>
    public required string EnvironmentName { get; init; }

    public required UpdateSettings Body { get; init; }
}
