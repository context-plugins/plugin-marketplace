namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Fullyqualifieddomain operation.
/// </summary>
public sealed record FullyqualifieddomainRequest
{
    /// <summary>
    /// The IP address to get the fully qualified domain name of
    /// </summary>
    public required string Ip { get; init; }
}
