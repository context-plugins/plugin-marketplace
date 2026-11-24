namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Whoislookup operation.
/// </summary>
public sealed record WhoislookupRequest
{
    /// <summary>
    /// The domain name for which you want to get the registration data (e.g., myspace.com)
    /// </summary>
    public required string Domain { get; init; }
}
