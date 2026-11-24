namespace AtlassianCompass.Requests.PackageDependencies;

/// <summary>
/// The inputs of the DeleteLockFile operation.
/// </summary>
public sealed record DeleteLockFileRequest
{
    public required string ComponentId { get; init; }

    public required string SourceId { get; init; }
}
