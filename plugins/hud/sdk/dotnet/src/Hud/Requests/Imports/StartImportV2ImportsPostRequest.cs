using Hud.Models;

namespace Hud.Requests.Imports;

/// <summary>
/// The inputs of the StartImportV2ImportsPost operation.
/// </summary>
public sealed record StartImportV2ImportsPostRequest
{
    public required ImportCreateRequest Body { get; init; }
}
