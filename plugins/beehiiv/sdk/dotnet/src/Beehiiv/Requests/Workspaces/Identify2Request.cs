namespace Beehiiv.Requests.Workspaces;

/// <summary>
/// The inputs of the Identify2 operation.
/// </summary>
public sealed record Identify2Request
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
