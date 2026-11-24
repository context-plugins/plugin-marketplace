namespace AmazonAppSync.Requests.DomainNames;

/// <summary>
/// The inputs of the DeleteDomainName operation.
/// </summary>
public sealed record DeleteDomainNameRequest
{
    /// <summary>
    /// The domain name.
    /// </summary>
    public required string DomainName { get; init; }
}
