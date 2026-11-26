namespace Dynamics365BusinessCentral.Requests.Environments;

/// <summary>
/// The inputs of the GetAvailableRestorePeriods operation.
/// </summary>
public sealed record GetAvailableRestorePeriodsRequest
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
