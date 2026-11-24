using Boomi.Models;

namespace Boomi.Requests.ModelsApi;

/// <summary>
/// The inputs of the CreateModel operation.
/// </summary>
public sealed record CreateModelRequest
{
    /// <summary>
    /// Unique identifier of the DataHub repository.
    /// </summary>
    public required string RepositoryId { get; init; }

    public required ModelInput Body { get; init; }
}
