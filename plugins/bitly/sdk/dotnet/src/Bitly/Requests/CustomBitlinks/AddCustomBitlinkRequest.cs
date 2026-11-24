using Bitly.Models;

namespace Bitly.Requests.CustomBitlinks;

/// <summary>
/// The inputs of the AddCustomBitlink operation.
/// </summary>
public sealed record AddCustomBitlinkRequest
{
    public required AddCustomBitlink Body { get; init; }
}
