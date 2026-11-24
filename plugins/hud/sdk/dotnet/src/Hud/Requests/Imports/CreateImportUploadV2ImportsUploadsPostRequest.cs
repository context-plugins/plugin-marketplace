using Hud.Models;

namespace Hud.Requests.Imports;

/// <summary>
/// The inputs of the CreateImportUploadV2ImportsUploadsPost operation.
/// </summary>
public sealed record CreateImportUploadV2ImportsUploadsPostRequest
{
    public required ImportUploadRequest Body { get; init; }
}
