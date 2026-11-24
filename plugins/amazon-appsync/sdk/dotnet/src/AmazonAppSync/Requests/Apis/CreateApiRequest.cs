using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Apis;

/// <summary>
/// The inputs of the CreateApi operation.
/// </summary>
public sealed record CreateApiRequest
{
    public V2ApisRequest? Body { get; init; }
}
