namespace Bitly.Requests.BitlinksApi;

/// <summary>
/// The inputs of the GetBitlink operation.
/// </summary>
public sealed record GetBitlinkRequest
{
    /// <summary>
    /// A Bitlink made of the domain and hash
    /// </summary>
    public required string Bitlink { get; init; }
}
