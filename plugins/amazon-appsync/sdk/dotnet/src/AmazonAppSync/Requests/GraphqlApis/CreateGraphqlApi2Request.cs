using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.GraphqlApis;

/// <summary>
/// The inputs of the CreateGraphqlApi2 operation.
/// </summary>
public sealed record CreateGraphqlApi2Request
{
    public V1ApisRequest? Body { get; init; }
}
