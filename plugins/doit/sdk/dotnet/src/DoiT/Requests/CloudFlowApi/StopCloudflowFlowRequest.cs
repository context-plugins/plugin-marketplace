namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the StopCloudflowFlow operation.
/// </summary>
public sealed record StopCloudflowFlowRequest
{
    /// <summary>
    /// The ID of the flow whose in-progress run should be stopped.
    /// </summary>
    public required string FlowId { get; init; }
}
