using Rendex.Models;

namespace Rendex.Requests.Batch;

/// <summary>
/// The inputs of the PostScreenshotBatch operation.
/// </summary>
public sealed record PostScreenshotBatchRequest
{
    public required BatchRequest Body { get; init; }
}
