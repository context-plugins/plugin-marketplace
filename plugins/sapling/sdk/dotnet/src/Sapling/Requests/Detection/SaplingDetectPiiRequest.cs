using Sapling.Models;

namespace Sapling.Requests.Detection;

/// <summary>
/// The inputs of the SaplingDetectPii operation.
/// </summary>
public sealed record SaplingDetectPiiRequest
{
    public required ApiV1PiiRequest Body { get; init; }
}
