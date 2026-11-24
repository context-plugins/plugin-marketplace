namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the GetCloudflowFlowRun operation.
/// </summary>
public sealed record GetCloudflowFlowRunRequest
{
    /// <summary>
    /// The ID of the flow the run belongs to.
    /// </summary>
    public required string FlowId { get; init; }

    /// <summary>
    /// The run identifier, as returned when the run was started.
    /// </summary>
    public required string RunId { get; init; }
}
