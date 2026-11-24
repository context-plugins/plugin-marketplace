using DoiT.Models;

namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the BuildCloudFlow operation.
/// </summary>
public sealed record BuildCloudFlowRequest
{
    public required CloudFlowBuildRequest Body { get; init; }
}
