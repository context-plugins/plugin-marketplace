namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Dnspropagation operation.
/// </summary>
public sealed record DnspropagationRequest
{
    /// <summary>
    /// The domain name to check propagation for
    /// </summary>
    public required string Domain { get; init; }

    /// <summary>
    /// The DNS record type to check
    /// </summary>
    public string? Type { get; init; }
}
