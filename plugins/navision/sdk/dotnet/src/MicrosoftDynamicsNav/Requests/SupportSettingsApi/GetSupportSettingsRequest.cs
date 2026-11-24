namespace MicrosoftDynamicsNav.Requests.SupportSettingsApi;

/// <summary>
/// The inputs of the GetSupportSettings operation.
/// </summary>
public sealed record GetSupportSettingsRequest
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
