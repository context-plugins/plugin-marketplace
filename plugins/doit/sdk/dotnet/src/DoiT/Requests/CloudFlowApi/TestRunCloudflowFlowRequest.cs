namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the TestRunCloudflowFlow operation.
/// </summary>
public sealed record TestRunCloudflowFlowRequest
{
    /// <summary>
    /// The ID of the flow to test-run.
    /// </summary>
    public required string FlowId { get; init; }

    /// <summary>
    /// Validate the flow and return the outcome without starting a run.
    /// </summary>
    public bool? DryRun { get; init; }

    /// <summary>
    /// Unique key so a retried request cannot start a second run.
    /// </summary>
    public required string IdempotencyKey { get; init; }

    public object? Body { get; init; }
}
