namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the TriggerCloudflowWebhook operation.
/// </summary>
public sealed record TriggerCloudflowWebhookRequest
{
    /// <summary>
    /// The unique ID of the published CloudFlow to trigger.
    /// </summary>
    public required string FlowId { get; init; }

    public required object Body { get; init; }
}
