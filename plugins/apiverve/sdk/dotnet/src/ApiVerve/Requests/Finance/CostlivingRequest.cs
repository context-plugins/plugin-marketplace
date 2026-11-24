namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Costliving operation.
/// </summary>
public sealed record CostlivingRequest
{
    /// <summary>
    /// State name, state code (e.g., CA, NY), or major city name.
    /// </summary>
    public required string Location { get; init; }
}
