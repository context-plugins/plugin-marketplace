namespace CodeQr.Requests.Domains;

/// <summary>
/// The inputs of the DeleteDomain operation.
/// </summary>
public sealed record DeleteDomainRequest
{
    /// <summary>
    /// The domain name.
    /// </summary>
    public required string Slug { get; init; }
}
