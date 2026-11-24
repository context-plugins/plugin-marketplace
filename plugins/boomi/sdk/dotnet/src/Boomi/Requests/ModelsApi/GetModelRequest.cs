namespace Boomi.Requests.ModelsApi;

/// <summary>
/// The inputs of the GetModel operation.
/// </summary>
public sealed record GetModelRequest
{
    /// <summary>
    /// Unique identifier of the DataHub repository.
    /// </summary>
    public required string RepositoryId { get; init; }

    /// <summary>
    /// Unique identifier of the data model.
    /// </summary>
    public required string ModelId { get; init; }
}
