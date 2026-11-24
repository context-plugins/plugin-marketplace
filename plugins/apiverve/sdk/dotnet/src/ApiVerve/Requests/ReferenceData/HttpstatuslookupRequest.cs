namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Httpstatuslookup operation.
/// </summary>
public sealed record HttpstatuslookupRequest
{
    /// <summary>
    /// HTTP status code to lookup
    /// </summary>
    public required int Code { get; init; }
}
