using Sapling.Models;

namespace Sapling.Requests.Detection;

/// <summary>
/// The inputs of the SaplingAiDetectUrl operation.
/// </summary>
public sealed record SaplingAiDetectUrlRequest
{
    public required ApiV1UrlAidetectRequest Body { get; init; }
}
