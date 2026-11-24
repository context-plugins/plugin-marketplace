using DoiT.Core.Validation.Attributes;

namespace DoiT.Requests.Connections;

/// <summary>
/// The inputs of the ListCloudflowConnections operation.
/// </summary>
public sealed record ListCloudflowConnectionsRequest
{
    /// <summary>
    /// Maximum number of connections to return (1–100). Defaults to 50.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int MaxResults { get; init; } = 50;

    /// <summary>
    /// Pagination cursor returned by a previous call.
    /// </summary>
    public string? PageToken { get; init; }
}
