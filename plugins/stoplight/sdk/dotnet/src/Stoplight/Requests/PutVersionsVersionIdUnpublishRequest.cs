namespace Stoplight.Requests;

/// <summary>
/// The inputs of the PutVersionsVersionIdUnpublish operation.
/// </summary>
public sealed record PutVersionsVersionIdUnpublishRequest
{
    /// <summary>
    /// This is the unique identifier for the version.
    /// </summary>
    public required string VersionId { get; init; }
}
