namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Domainavailability operation.
/// </summary>
public sealed record DomainavailabilityRequest
{
    /// <summary>
    /// The domain to check if it is available
    /// </summary>
    public required string Domain { get; init; }
}
