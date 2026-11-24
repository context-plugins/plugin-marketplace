using Boomi.Models;

namespace Boomi.Requests.Environments;

/// <summary>
/// The inputs of the CreateEnvironment operation.
/// </summary>
public sealed record CreateEnvironmentRequest
{
    public required EnvironmentInput Body { get; init; }
}
