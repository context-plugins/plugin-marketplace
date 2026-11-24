using Hud.Models;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the ImportJobV2JobsImportPost operation.
/// </summary>
public sealed record ImportJobV2JobsImportPostRequest
{
    public required JobImportRequest Body { get; init; }
}
