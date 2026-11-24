namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Ifsclookup operation.
/// </summary>
public sealed record IfsclookupRequest
{
    /// <summary>
    /// The IFSC code to get information about
    /// </summary>
    public required string Ifsc { get; init; }
}
