using Rendex.Models;

namespace Rendex.Requests.Screenshot;

/// <summary>
/// The inputs of the PostScreenshot operation.
/// </summary>
public sealed record PostScreenshotRequest
{
    public required ScreenshotRequest Body { get; init; }
}
