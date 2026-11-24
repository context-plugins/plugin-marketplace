using Upstox.Models;

namespace Upstox.Requests.Ipo;

/// <summary>
/// The inputs of the ApplyForIpo operation.
/// </summary>
public sealed record ApplyForIpoRequest
{
    public required IpoApplyRequest Body { get; init; }
}
