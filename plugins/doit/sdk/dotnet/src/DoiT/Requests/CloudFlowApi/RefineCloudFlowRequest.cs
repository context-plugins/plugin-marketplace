using DoiT.Models;

namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the RefineCloudFlow operation.
/// </summary>
public sealed record RefineCloudFlowRequest
{
    public required string FlowId { get; init; }

    public required CloudFlowRefineRequest Body { get; init; }
}
