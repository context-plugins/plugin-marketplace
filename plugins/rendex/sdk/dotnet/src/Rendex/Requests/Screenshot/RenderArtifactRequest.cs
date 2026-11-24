using Rendex.Models;

namespace Rendex.Requests.Screenshot;

/// <summary>
/// The inputs of the RenderArtifact operation.
/// </summary>
public sealed record RenderArtifactRequest
{
    public required V1ArtifactRequest Body { get; init; }
}
