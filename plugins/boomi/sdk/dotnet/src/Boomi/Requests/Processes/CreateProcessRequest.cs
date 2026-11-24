using Boomi.Models;

namespace Boomi.Requests.Processes;

/// <summary>
/// The inputs of the CreateProcess operation.
/// </summary>
public sealed record CreateProcessRequest
{
    public required ProcessInput Body { get; init; }
}
