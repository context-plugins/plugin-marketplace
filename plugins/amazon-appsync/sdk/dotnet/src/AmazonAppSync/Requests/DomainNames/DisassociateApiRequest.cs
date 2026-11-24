namespace AmazonAppSync.Requests.DomainNames;

/// <summary>
/// The inputs of the DisassociateApi operation.
/// </summary>
public sealed record DisassociateApiRequest
{
    /// <summary>
    /// The domain name.
    /// </summary>
    public required string DomainName { get; init; }
}
