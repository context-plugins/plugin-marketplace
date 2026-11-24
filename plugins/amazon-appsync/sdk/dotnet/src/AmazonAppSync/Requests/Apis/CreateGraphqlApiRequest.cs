using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Apis;

/// <summary>
/// The inputs of the CreateGraphqlApi operation.
/// </summary>
public sealed record CreateGraphqlApiRequest
{
    public V1ApisRequest? Body { get; init; }
}
