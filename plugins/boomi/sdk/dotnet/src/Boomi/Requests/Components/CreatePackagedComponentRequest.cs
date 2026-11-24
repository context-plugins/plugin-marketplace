using Boomi.Models;

namespace Boomi.Requests.Components;

/// <summary>
/// The inputs of the CreatePackagedComponent operation.
/// </summary>
public sealed record CreatePackagedComponentRequest
{
    public required PackagedComponentInput Body { get; init; }
}
