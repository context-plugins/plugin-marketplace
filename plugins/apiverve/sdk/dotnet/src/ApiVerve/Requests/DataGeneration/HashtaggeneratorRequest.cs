using ApiVerve.Models;

namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Hashtaggenerator operation.
/// </summary>
public sealed record HashtaggeneratorRequest
{
    public required V1HashtaggeneratorRequest Body { get; init; }
}
