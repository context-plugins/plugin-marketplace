using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the ListCloudflowFlowRuns operation.
/// </summary>
public sealed record ListCloudflowFlowRunsRequest
{
    /// <summary>
    /// The ID of the flow whose runs to list.
    /// </summary>
    public required string FlowId { get; init; }

    /// <summary>
    /// Maximum runs to return.
    /// </summary>
    [Minimum(1)]
    [Maximum(500)]
    public int MaxResults { get; init; } = 50;

    /// <summary>
    /// Continuation token from a previous response.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Restrict the listing to one kind of run. Omit for both.
    /// </summary>
    public ModeDoiTCloudFlowApi? Mode { get; init; }
}
