namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Dnsseccheck operation.
/// </summary>
public sealed record DnsseccheckRequest
{
    /// <summary>
    /// The domain name to check DNSSEC configuration for
    /// </summary>
    public required string Domain { get; init; }
}
