namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Bimivalidator operation.
/// </summary>
public sealed record BimivalidatorRequest
{
    /// <summary>
    /// The domain to validate the BIMI record for
    /// </summary>
    public required string Domain { get; init; }
}
