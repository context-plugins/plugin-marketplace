using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Requests.PackageDependencies;

/// <summary>
/// The inputs of the UploadLockFile operation.
/// </summary>
public sealed record UploadLockFileRequest
{
    public required string SourceId { get; init; }

    public required string BaseSourceUrl { get; init; }

    public required string ComponentId { get; init; }

    public required BinaryContent File { get; init; }
}
