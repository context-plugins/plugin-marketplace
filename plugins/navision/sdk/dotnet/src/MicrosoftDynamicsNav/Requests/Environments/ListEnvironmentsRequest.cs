namespace MicrosoftDynamicsNav.Requests.Environments;

/// <summary>
/// The inputs of the ListEnvironments operation.
/// </summary>
public sealed record ListEnvironmentsRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";
}
