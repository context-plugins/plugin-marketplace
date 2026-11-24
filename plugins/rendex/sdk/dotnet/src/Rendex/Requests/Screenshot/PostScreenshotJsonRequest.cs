using Rendex.Models;

namespace Rendex.Requests.Screenshot;

/// <summary>
/// The inputs of the PostScreenshotJson operation.
/// </summary>
public sealed record PostScreenshotJsonRequest
{
    public required ScreenshotRequest Body { get; init; }
}
