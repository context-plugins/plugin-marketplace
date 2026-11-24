using DevCycle.Models;

namespace DevCycle.Requests.EdgeDb;

/// <summary>
/// The inputs of the PatchV1EdgedbByUserId operation.
/// </summary>
public sealed record PatchV1EdgedbByUserIdRequest
{
    /// <summary>
    /// A unique id used to fetch and update the EdgeDB data
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header or "sdkKey" query parameter is required to be set.
    /// </summary>
    public string? SdkKey { get; init; }

    /// <summary>
    /// User properties to update the EdgeDB data
    /// </summary>
    public required UserDataEdgeDb Body { get; init; }
}
