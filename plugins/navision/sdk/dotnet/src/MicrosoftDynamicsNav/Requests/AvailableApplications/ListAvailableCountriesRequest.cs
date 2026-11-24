namespace MicrosoftDynamicsNav.Requests.AvailableApplications;

/// <summary>
/// The inputs of the ListAvailableCountries operation.
/// </summary>
public sealed record ListAvailableCountriesRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";
}
