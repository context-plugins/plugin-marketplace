using Upstox.Models;

namespace Upstox.Requests.Portfolio;

/// <summary>
/// The inputs of the ConvertPositions operation.
/// </summary>
public sealed record ConvertPositionsRequest
{
    public required ConvertPositionRequest Body { get; init; }
}
