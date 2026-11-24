namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the GetBlockedIPs operation.
/// </summary>
public sealed record GetBlockedIPsRequest
{
    public required long Id { get; init; }
}
