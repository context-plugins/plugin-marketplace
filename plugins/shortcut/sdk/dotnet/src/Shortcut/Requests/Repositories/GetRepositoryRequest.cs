namespace Shortcut.Requests.Repositories;

/// <summary>
/// The inputs of the GetRepository operation.
/// </summary>
public sealed record GetRepositoryRequest
{
    /// <summary>
    /// The unique ID of the Repository.
    /// </summary>
    public required long RepoPublicId { get; init; }
}
