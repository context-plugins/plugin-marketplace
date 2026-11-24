using Statable.Models;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the CreateFunnel operation.
/// </summary>
public sealed record CreateFunnelRequest
{
    /// <summary>
    /// Numeric site id.
    /// </summary>
    public required long Id { get; init; }

    public required FunnelRequest Body { get; init; }
}
