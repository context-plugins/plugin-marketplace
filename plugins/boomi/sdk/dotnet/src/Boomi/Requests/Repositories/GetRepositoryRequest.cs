namespace Boomi.Requests.Repositories;

/// <summary>
/// The inputs of the GetRepository operation.
/// </summary>
public sealed record GetRepositoryRequest
{
    /// <summary>
    /// Unique identifier of the DataHub repository.
    /// </summary>
    public required string RepositoryId { get; init; }
}
