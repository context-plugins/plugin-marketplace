using Boomi.Models;

namespace Boomi.Requests.Repositories;

/// <summary>
/// The inputs of the CreateRepository operation.
/// </summary>
public sealed record CreateRepositoryRequest
{
    public required RepositoryInput Body { get; init; }
}
