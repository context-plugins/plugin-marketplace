namespace Bitly.Requests.BitlinksApi;

/// <summary>
/// The inputs of the DeleteBitlink operation.
/// </summary>
public sealed record DeleteBitlinkRequest
{
    /// <summary>
    /// A Bitlink made of the domain and hash
    /// </summary>
    public required string Bitlink { get; init; }
}
