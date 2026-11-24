namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Sslchecker operation.
/// </summary>
public sealed record SslcheckerRequest
{
    /// <summary>
    /// The domain of the website to check the SSL certificate of
    /// </summary>
    public required string Domain { get; init; }
}
