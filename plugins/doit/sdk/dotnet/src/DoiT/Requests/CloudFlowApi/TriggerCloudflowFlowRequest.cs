namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the TriggerCloudflowFlow operation.
/// </summary>
public sealed record TriggerCloudflowFlowRequest
{
    /// <summary>
    /// The ID of the flow to trigger.
    /// </summary>
    public required string FlowId { get; init; }

    public object? Body { get; init; }
}
