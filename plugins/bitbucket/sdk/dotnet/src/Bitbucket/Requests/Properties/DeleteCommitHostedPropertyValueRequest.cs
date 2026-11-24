namespace Bitbucket.Requests.Properties;

/// <summary>
/// The inputs of the DeleteCommitHostedPropertyValue operation.
/// </summary>
public sealed record DeleteCommitHostedPropertyValueRequest
{
    /// <summary>
    /// The repository container; either the workspace slug or the UUID in curly braces.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// The commit.
    /// </summary>
    public required string Commit { get; init; }

    /// <summary>
    /// The key of the Connect app.
    /// </summary>
    public required string AppKey { get; init; }

    /// <summary>
    /// The name of the property.
    /// </summary>
    public required string PropertyName { get; init; }
}
