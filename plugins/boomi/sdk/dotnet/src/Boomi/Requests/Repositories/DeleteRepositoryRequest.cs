namespace Boomi.Requests.Repositories;

/// <summary>
/// The inputs of the DeleteRepository operation.
/// </summary>
public sealed record DeleteRepositoryRequest
{
    /// <summary>
    /// Unique identifier of the DataHub repository.
    /// </summary>
    public required string RepositoryId { get; init; }
}
