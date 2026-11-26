namespace Dynamics365BusinessCentral.Requests.UpdateManagement;

/// <summary>
/// The inputs of the GetScheduledUpgrade operation.
/// </summary>
public sealed record GetScheduledUpgradeRequest
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
