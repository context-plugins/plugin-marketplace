namespace MicrosoftDynamicsNav.Requests.EnvironmentSettingsApi;

/// <summary>
/// The inputs of the GetEnvironmentSettings operation.
/// </summary>
public sealed record GetEnvironmentSettingsRequest
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
