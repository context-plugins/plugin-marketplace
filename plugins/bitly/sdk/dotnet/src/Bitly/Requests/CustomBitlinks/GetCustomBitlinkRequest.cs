namespace Bitly.Requests.CustomBitlinks;

/// <summary>
/// The inputs of the GetCustomBitlink operation.
/// </summary>
public sealed record GetCustomBitlinkRequest
{
    /// <summary>
    /// A Custom Bitlink made of the domain and keyword
    /// </summary>
    public required string CustomBitlink { get; init; }
}
