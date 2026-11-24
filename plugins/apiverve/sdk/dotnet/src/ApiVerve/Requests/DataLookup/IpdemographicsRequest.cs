namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Ipdemographics operation.
/// </summary>
public sealed record IpdemographicsRequest
{
    /// <summary>
    /// IPv4 or IPv6 address
    /// </summary>
    public required string Ip { get; init; }
}
