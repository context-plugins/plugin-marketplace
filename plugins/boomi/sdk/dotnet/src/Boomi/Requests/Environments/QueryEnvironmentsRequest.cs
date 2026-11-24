using Boomi.Models;

namespace Boomi.Requests.Environments;

/// <summary>
/// The inputs of the QueryEnvironments operation.
/// </summary>
public sealed record QueryEnvironmentsRequest
{
    public required QueryRequest Body { get; init; }
}
