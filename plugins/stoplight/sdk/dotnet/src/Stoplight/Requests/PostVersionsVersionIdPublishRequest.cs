namespace Stoplight.Requests;

/// <summary>
/// The inputs of the PostVersionsVersionIdPublish operation.
/// </summary>
public sealed record PostVersionsVersionIdPublishRequest
{
    /// <summary>
    /// This is the unique identifier for the version.
    /// </summary>
    public required string VersionId { get; init; }
}
