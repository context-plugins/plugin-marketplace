using Sapling.Models.AnyOf;

namespace Sapling.Requests.Detection;

/// <summary>
/// The inputs of the SaplingAiDetect operation.
/// </summary>
public sealed record SaplingAiDetectRequest
{
    public required ApiV1AidetectRequest2 Body { get; init; }
}
