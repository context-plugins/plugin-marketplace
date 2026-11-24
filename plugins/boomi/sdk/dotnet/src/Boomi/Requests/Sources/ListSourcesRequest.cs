namespace Boomi.Requests.Sources;

/// <summary>
/// The inputs of the ListSources operation.
/// </summary>
public sealed record ListSourcesRequest
{
    /// <summary>
    /// Unique identifier of the DataHub repository.
    /// </summary>
    public required string RepositoryId { get; init; }
}
