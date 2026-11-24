namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Mxlookup operation.
/// </summary>
public sealed record MxlookupRequest
{
    /// <summary>
    /// The domain you want to get the MX records for (e.g. yahoo.com)
    /// </summary>
    public required string Domain { get; init; }
}
