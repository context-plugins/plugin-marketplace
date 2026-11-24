using Bitly.Models;

namespace Bitly.Requests.BitlinksApi;

/// <summary>
/// The inputs of the CreateBitlink operation.
/// </summary>
public sealed record CreateBitlinkRequest
{
    public required Shorten Body { get; init; }
}
