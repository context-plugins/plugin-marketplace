using Bitly.Models;

namespace Bitly.Requests.BitlinksApi;

/// <summary>
/// The inputs of the ExpandBitlink operation.
/// </summary>
public sealed record ExpandBitlinkRequest
{
    public required ExpandBitlink Body { get; init; }
}
