using Rendex.Models;

namespace Rendex.Requests.Screenshot;

/// <summary>
/// The inputs of the CreateRenderLink operation.
/// </summary>
public sealed record CreateRenderLinkRequest
{
    public required V1RenderLinkRequest Body { get; init; }
}
