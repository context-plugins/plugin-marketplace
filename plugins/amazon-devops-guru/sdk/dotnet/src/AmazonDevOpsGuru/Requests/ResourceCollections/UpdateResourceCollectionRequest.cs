using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.ResourceCollections;

/// <summary>
/// The inputs of the UpdateResourceCollection operation.
/// </summary>
public sealed record UpdateResourceCollectionRequest
{
    public ResourceCollectionsRequest? Body { get; init; }
}
