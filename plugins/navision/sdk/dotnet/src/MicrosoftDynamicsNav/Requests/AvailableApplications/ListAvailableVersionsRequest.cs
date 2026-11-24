namespace MicrosoftDynamicsNav.Requests.AvailableApplications;

/// <summary>
/// The inputs of the ListAvailableVersions operation.
/// </summary>
public sealed record ListAvailableVersionsRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";
}
