namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Dkimvalidator operation.
/// </summary>
public sealed record DkimvalidatorRequest
{
    /// <summary>
    /// The domain to validate the DKIM record for
    /// </summary>
    public required string Domain { get; init; }

    /// <summary>
    /// The DKIM selector to look up (the label before ._domainkey). When omitted, a list of common selectors is tried
    /// </summary>
    public string? Selector { get; init; }
}
