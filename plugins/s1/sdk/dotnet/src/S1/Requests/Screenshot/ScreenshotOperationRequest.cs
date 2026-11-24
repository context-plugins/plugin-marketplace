using S1.Models;

namespace S1.Requests.Screenshot;

/// <summary>
/// The inputs of the ScreenshotInvoke operation.
/// </summary>
public sealed record ScreenshotOperationRequest
{
    public required ScreenshotRequest Body { get; init; }
}
