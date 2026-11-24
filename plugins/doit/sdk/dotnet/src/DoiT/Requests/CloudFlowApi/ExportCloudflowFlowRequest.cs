namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the ExportCloudflowFlow operation.
/// </summary>
public sealed record ExportCloudflowFlowRequest
{
    /// <summary>
    /// The ID of the flow to export.
    /// </summary>
    public required string FlowId { get; init; }

    /// <summary>
    /// When <c>false</c>, local and global variable values are stripped from the bundle; names,
    /// types, and required-ness always travel. Connection-typed variable values are
    /// references, not values, and always travel as requirement tokens.
    /// </summary>
    public bool IncludeVariableValues { get; init; } = true;
}
