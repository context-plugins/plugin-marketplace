using Bitly.Models;

namespace Bitly.Requests.BitlinksApi;

/// <summary>
/// The inputs of the CreateFullBitlink operation.
/// </summary>
public sealed record CreateFullBitlinkRequest
{
    public required FullShorten Body { get; init; }
}
