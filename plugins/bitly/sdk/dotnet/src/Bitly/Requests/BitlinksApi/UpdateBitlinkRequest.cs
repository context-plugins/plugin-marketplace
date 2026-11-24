using Bitly.Models;

namespace Bitly.Requests.BitlinksApi;

/// <summary>
/// The inputs of the UpdateBitlink operation.
/// </summary>
public sealed record UpdateBitlinkRequest
{
    /// <summary>
    /// A Bitlink made of the domain and hash
    /// </summary>
    public required string Bitlink { get; init; }

    public required BitlinkUpdateBody Body { get; init; }
}
