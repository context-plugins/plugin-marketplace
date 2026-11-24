using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.EnvironmentSettingsApi;

/// <summary>
/// The inputs of the SetAppInsightsKey operation.
/// </summary>
public sealed record SetAppInsightsKeyRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";

    /// <summary>
    /// The name of the environment
    /// </summary>
    public required string EnvironmentName { get; init; }

    public required ApplicationsEnvironmentsSettingsAppInsightsKeyRequest Body { get; init; }
}
