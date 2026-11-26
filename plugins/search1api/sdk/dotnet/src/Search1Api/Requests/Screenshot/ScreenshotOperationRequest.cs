using Search1Api.Models;

namespace Search1Api.Requests.Screenshot;

/// <summary>
/// The inputs of the ScreenshotInvoke operation.
/// </summary>
public sealed record ScreenshotOperationRequest
{
    public required ScreenshotRequest Body { get; init; }
}
