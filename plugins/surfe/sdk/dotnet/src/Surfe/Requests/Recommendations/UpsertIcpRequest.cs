using Surfe.Models;

namespace Surfe.Requests.Recommendations;

/// <summary>
/// The inputs of the UpsertIcp operation.
/// </summary>
public sealed record UpsertIcpRequest
{
    public required IcpDefinition Body { get; init; }
}
