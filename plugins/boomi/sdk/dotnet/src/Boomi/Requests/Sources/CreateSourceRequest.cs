using Boomi.Models;

namespace Boomi.Requests.Sources;

/// <summary>
/// The inputs of the CreateSource operation.
/// </summary>
public sealed record CreateSourceRequest
{
    /// <summary>
    /// Unique identifier of the DataHub repository.
    /// </summary>
    public required string RepositoryId { get; init; }

    public required SourceInput Body { get; init; }
}
