namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Spfvalidator operation.
/// </summary>
public sealed record SpfvalidatorRequest
{
    /// <summary>
    /// The domain to validate the SPF record for
    /// </summary>
    public required string Domain { get; init; }
}
