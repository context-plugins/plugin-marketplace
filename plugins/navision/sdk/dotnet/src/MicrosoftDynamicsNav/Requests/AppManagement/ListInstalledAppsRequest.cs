namespace MicrosoftDynamicsNav.Requests.AppManagement;

/// <summary>
/// The inputs of the ListInstalledApps operation.
/// </summary>
public sealed record ListInstalledAppsRequest
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
