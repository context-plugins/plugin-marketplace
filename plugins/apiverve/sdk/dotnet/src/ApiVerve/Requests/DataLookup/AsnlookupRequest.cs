namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Asnlookup operation.
/// </summary>
public sealed record AsnlookupRequest
{
    /// <summary>
    /// The ASN you want to get information about
    /// </summary>
    public required string Asn { get; init; }
}
