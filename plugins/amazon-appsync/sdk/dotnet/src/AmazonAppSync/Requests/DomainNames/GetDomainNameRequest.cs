namespace AmazonAppSync.Requests.DomainNames;

/// <summary>
/// The inputs of the GetDomainName operation.
/// </summary>
public sealed record GetDomainNameRequest
{
    /// <summary>
    /// The domain name.
    /// </summary>
    public required string DomainName { get; init; }
}
