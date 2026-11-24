namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Dmarcvalidator operation.
/// </summary>
public sealed record DmarcvalidatorRequest
{
    /// <summary>
    /// The domain to validate the DMARC record for
    /// </summary>
    public required string Domain { get; init; }
}
