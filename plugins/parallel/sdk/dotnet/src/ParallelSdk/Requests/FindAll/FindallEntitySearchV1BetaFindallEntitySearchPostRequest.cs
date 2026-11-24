using ParallelSdk.Models;

namespace ParallelSdk.Requests.FindAll;

/// <summary>
/// The inputs of the FindallEntitySearchV1BetaFindallEntitySearchPost operation.
/// </summary>
public sealed record FindallEntitySearchV1BetaFindallEntitySearchPostRequest
{
    public required FindAllEntitySearchRequest Body { get; init; }
}
