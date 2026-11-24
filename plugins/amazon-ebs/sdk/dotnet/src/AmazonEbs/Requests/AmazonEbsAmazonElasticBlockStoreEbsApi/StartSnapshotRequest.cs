using AmazonEbs.Models;

namespace AmazonEbs.Requests.AmazonEbsAmazonElasticBlockStoreEbsApi;

/// <summary>
/// The inputs of the StartSnapshot operation.
/// </summary>
public sealed record StartSnapshotRequest
{
    public SnapshotsRequest? Body { get; init; }
}
