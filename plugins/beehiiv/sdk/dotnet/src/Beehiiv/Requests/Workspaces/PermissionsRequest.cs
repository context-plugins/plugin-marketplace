namespace Beehiiv.Requests.Workspaces;

/// <summary>
/// The inputs of the Permissions operation.
/// </summary>
public sealed record PermissionsRequest
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
