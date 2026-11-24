namespace AmazonAppSync.Requests.DomainNames;

/// <summary>
/// The inputs of the GetApiAssociation operation.
/// </summary>
public sealed record GetApiAssociationRequest
{
    /// <summary>
    /// The domain name.
    /// </summary>
    public required string DomainName { get; init; }
}
