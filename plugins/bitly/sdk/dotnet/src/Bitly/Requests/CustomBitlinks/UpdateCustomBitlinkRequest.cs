using Bitly.Models;

namespace Bitly.Requests.CustomBitlinks;

/// <summary>
/// The inputs of the UpdateCustomBitlink operation.
/// </summary>
public sealed record UpdateCustomBitlinkRequest
{
    /// <summary>
    /// A Custom Bitlink made of the domain and keyword
    /// </summary>
    public required string CustomBitlink { get; init; }

    public required UpdateCustomBitlink Body { get; init; }
}
