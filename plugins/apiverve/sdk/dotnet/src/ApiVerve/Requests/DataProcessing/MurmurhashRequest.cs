using ApiVerve.Models;

namespace ApiVerve.Requests.DataProcessing;

/// <summary>
/// The inputs of the Murmurhash operation.
/// </summary>
public sealed record MurmurhashRequest
{
    public required V1MurmurhashRequest Body { get; init; }
}
