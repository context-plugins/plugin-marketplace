namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Domainexpiration operation.
/// </summary>
public sealed record DomainexpirationRequest
{
    /// <summary>
    /// The domain to check the expiration date of
    /// </summary>
    public required string Domain { get; init; }
}
