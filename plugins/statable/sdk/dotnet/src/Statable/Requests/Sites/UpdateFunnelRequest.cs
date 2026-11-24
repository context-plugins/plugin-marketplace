using Statable.Models;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the UpdateFunnel operation.
/// </summary>
public sealed record UpdateFunnelRequest
{
    public required long Id { get; init; }

    public required long FunnelId { get; init; }

    public required FunnelRequest Body { get; init; }
}
