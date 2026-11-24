namespace Boomi.Requests.ModelsApi;

/// <summary>
/// The inputs of the ListModels operation.
/// </summary>
public sealed record ListModelsRequest
{
    /// <summary>
    /// Unique identifier of the DataHub repository.
    /// </summary>
    public required string RepositoryId { get; init; }
}
